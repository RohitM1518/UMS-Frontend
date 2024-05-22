import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        password: '',
        roleId: 2,
        roleName: 'Faculty',
        rolePermissions: ['']
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePermissionsChange = (e, index) => {
        const { value } = e.target;
        const newPermissions = [...userData.rolePermissions];
        newPermissions[index] = value;
        setUserData((prevData) => ({
            ...prevData,
            rolePermissions: newPermissions
        }));
    };

    const addPermission = () => {
        setUserData((prevData) => ({
            ...prevData,
            rolePermissions: [...prevData.rolePermissions, '']
        }));
    };

    const removePermission = (index) => {
        setUserData((prevData) => ({
            ...prevData,
            rolePermissions: prevData.rolePermissions.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: userData.name,
            email: userData.email,
            contact: userData.contact,
            address: userData.address,
            password: userData.password,
            role: {
                roleId: userData.roleId,
                name: userData.roleName,
                permissions: userData.rolePermissions
            }
        };

        try {
            const response = await axios.post('http://localhost:8084/faculties', data);
            console.log('User added successfully:', response.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Create User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Contact</label>
                    <input
                        type="text"
                        name="contact"
                        value={userData.contact}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Role</label>
                    <input
                        type="text"
                        name="roleName"
                        value={userData.roleName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        readOnly
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Permissions</label>
                    {userData.rolePermissions.map((permission, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                value={permission}
                                onChange={(e) => handlePermissionsChange(e, index)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => removePermission(index)}
                                className="bg-red-500 text-white px-2 py-1 rounded-lg ml-2"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addPermission}
                        className="bg-gray-500 text-white px-2 py-1 rounded-lg mt-2"
                    >
                        Add Permission
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Add Faculty
                </button>
            </form>
        </div>
    );
};

export default AddUser;
