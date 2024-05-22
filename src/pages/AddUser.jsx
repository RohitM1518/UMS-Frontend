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
        roleName: 'Admin',
        rolePermissions: 'admin_permission_1, admin_permission_2'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
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
            const response = await axios.post('YOUR_API_ENDPOINT', data);
            console.log('User added successfully:', response.data);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Add User</h2>
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
                    <input
                        type="text"
                        name="rolePermissions"
                        value={userData.rolePermissions}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        readOnly
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
