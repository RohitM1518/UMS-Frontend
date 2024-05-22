import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RolesList = () => {
    const [roles, setRoles] = useState([]);
    const [editingRoleId, setEditingRoleId] = useState(null);
    const [updatedRoleName, setUpdatedRoleName] = useState('');
    const [deletedRoleId, setDeletedRoleId] = useState(null);

    useEffect(() => {
        fetchRoles();
    }, []);

    const fetchRoles = async () => {
        try {
            const response = await axios.get('http://localhost:8084/roles');
            setRoles(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

    const handleUpdateRole = async (roleId) => {
        try {
            const roleToUpdate = roles.find(role => role.roleId === roleId);
            await axios.put(`http://localhost:8084/roles/${roleId}`, { name: updatedRoleName });
            alert('Role updated successfully');
            fetchRoles();
            setEditingRoleId(null);
            setUpdatedRoleName('');
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    const handleDeleteRole = async (roleId) => {
        try {
            await axios.delete(`http://localhost:8084/roles/${roleId}`);
            alert('Role deleted successfully');
            fetchRoles();
            // Clear editing state if deleting the currently editing role
            if (editingRoleId === roleId) {
                setEditingRoleId(null);
                setUpdatedRoleName('');
            }
            // Reset deletedRoleId state
            setDeletedRoleId(null); // Set deletedRoleId to null after successful deletion
        } catch (error) {
            console.error('Error deleting role:', error);
        }
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Roles List</h2>
            <ul>
                {roles.map(role => (
                    <li key={role.roleId} className="flex justify-between items-center border-b py-2">
                        {editingRoleId === role.roleId ? (
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    value={updatedRoleName}
                                    onChange={(e) => setUpdatedRoleName(e.target.value)}
                                    className="border rounded px-2 py-1 mr-2"
                                />
                                <button
                                    onClick={() => handleUpdateRole(role.roleId)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Update
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <span>{role.name}</span>
                                <div>
                                    <button
                                        onClick={() => setEditingRoleId(role.roleId)}
                                        className="bg-green-500 text-white px-4 py-2 ml-4 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteRole(role.roleId)} // Corrected line
                                        className="bg-red-500 text-white px-4 py-2 ml-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            {deletedRoleId && (
                <div className="mt-4">
                    <p className="mb-2">Are you sure you want to delete this role?</p>
                    <button
                        onClick={() => handleDeleteRole(deletedRoleId)}
                        className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => setDeletedRoleId(null)}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        No
                    </button>
                </div>
            )}
        </div>
    );
};

export default RolesList;
