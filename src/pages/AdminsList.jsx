import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminsList = () => {
    const [admins, setAdmins] = useState([]);
    const [isUpdating, setIsUpdating] = useState({});

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await axios.get('http://localhost:8084/administrators');
                setAdmins(response.data);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        };

        fetchAdmins();
    }, []);

    const handleUpdate = (adminId) => {
        setIsUpdating(prevState => ({
            ...prevState,
            [adminId]: !prevState[adminId]
        }));
    };

    const handleInputChange = (e, adminId) => {
        const { name, value } = e.target;
        setAdmins(prevState => prevState.map(admin =>
            admin.id === adminId ? { ...admin, [name]: value } : admin
        ));
    };

    const handleSubmit = async (adminId) => {
        try {
            await axios.put(`http://localhost:8084/administrators/${adminId}`, admins.find(admin => admin.id === adminId));
            setIsUpdating(prevState => ({
                ...prevState,
                [adminId]: false
            }));
            alert('Admin updated successfully');
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };

    const handleDelete = async (adminId) => {
        try {
            await axios.delete(`http://localhost:8084/administrators/${adminId}`);
            setAdmins(prevState => prevState.filter(admin => admin.id !== adminId));
            alert('Admin deleted successfully');
        } catch (error) {
            console.error('Error deleting admin:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-5 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Admins List</h2>
            <ul>
                {admins.map(admin => (
                    <li key={admin.id} className="flex justify-between items-center mb-4 p-2 border-b">
                        <div>
                            <p><strong>Name:</strong> {isUpdating[admin.id] ? (
                                <input type="text" name="name" value={admin.name} onChange={(e) => handleInputChange(e, admin.id)} />
                            ) : admin.name}</p>
                            <p><strong>Email:</strong> {isUpdating[admin.id] ? (
                                <input type="text" name="email" value={admin.email} onChange={(e) => handleInputChange(e, admin.id)} />
                            ) : admin.email}</p>
                            <p><strong>Contact:</strong> {isUpdating[admin.id] ? (
                                <input type="text" name="contact" value={admin.contact} onChange={(e) => handleInputChange(e, admin.id)} />
                            ) : admin.contact}</p>
                            <p><strong>Address:</strong> {isUpdating[admin.id] ? (
                                <input type="text" name="address" value={admin.address} onChange={(e) => handleInputChange(e, admin.id)} />
                            ) : admin.address}</p>
                            <p><strong>Role:</strong> {isUpdating[admin.id] ? (
                                <input type="text" name="role" value={admin.role.name} onChange={(e) => handleInputChange(e, admin.id)} />
                            ) : admin.role.name}</p>
                        </div>
                        <div>
                            {isUpdating[admin.id] ? (
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200" onClick={() => handleSubmit(admin.id)}>Submit</button>
                            ) : (
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 mr-2" onClick={() => handleUpdate(admin.id)}>Update</button>
                            )}
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200" onClick={() => handleDelete(admin.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminsList;
