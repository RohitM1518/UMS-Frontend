import React, { useState } from 'react';
import axios from 'axios';

const AddRole = () => {
    const [name, setName] = useState('');
    const [permissions, setPermissions] = useState([]);
    const [newPermission, setNewPermission] = useState('');

    const handleAddPermission = () => {
        if (newPermission.trim() !== '') {
            setPermissions([...permissions, newPermission]);
            setNewPermission('');
        }
    };

    const handleRemovePermission = (permission) => {
        setPermissions(permissions.filter(p => p !== permission));
    };

    const handleSubmit = async () => {
        try {
            const roleData = {
                name: name,
                permissions: permissions
            };
            await axios.post('http://localhost:8084/roles', roleData);
            alert('Role added successfully');
            // Reset form after successful submission
            setName('');
            setPermissions([]);
            setNewPermission('');
        } catch (error) {
            console.error('Error adding role:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-semibold mb-4">Add Role</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Permissions:</label>
                    <ul>
                        {permissions.map((permission, index) => (
                            <li key={index} className="flex items-center">
                                <span>{permission}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemovePermission(permission)}
                                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-2 flex items-center">
                        <input
                            type="text"
                            value={newPermission}
                            onChange={(e) => setNewPermission(e.target.value)}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <button
                            type="button"
                            onClick={handleAddPermission}
                            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Add Permission
                        </button>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Role
                </button>
            </form>
        </div>
    );
};

export default AddRole;
