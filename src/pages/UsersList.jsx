import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editUserData, setEditUserData] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8084/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:8084/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
            alert('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditUserData(users[index]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdate = async (userId) => {
        try {
            await axios.put(`http://localhost:8084/users/${userId}`, editUserData);
            setUsers(users.map(user => (user.id === userId ? editUserData : user)));
            setEditIndex(null);
            alert('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Users List</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={user.id} className="flex justify-between items-center mb-4 p-2 border-b">
                        {editIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={editUserData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg mb-2"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={editUserData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg mb-2"
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    value={editUserData.contact}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg mb-2"
                                />
                                <input
                                    type="text"
                                    name="address"
                                    value={editUserData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg mb-2"
                                />
                                <button
                                    onClick={() => handleUpdate(user.id)}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setEditIndex(null)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200 ml-2"
                                >
                                    Cancel
                                </button>
                            </div>
                        ) : (
                            <div>
                                <p><strong>Name:</strong> {user.name}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Contact:</strong> {user.contact}</p>
                                <p><strong>Address:</strong> {user.address}</p>
                                <p><strong>Role:</strong> {user.role.name}</p>
                            </div>
                        )}
                        <div>
                            <button
                                onClick={() => handleEdit(index)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(user.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;
