import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
// import './Sidebar.css'; // Tailwind CSS will be included globally

const Sidebar = () => {
    return (
        <nav className="fixed top-0 left-0 h-full bg-white shadow-lg" style={{ zIndex: 3, width: '325px' }} id="mySidebar">
            <div className="p-4 relative">
                <FontAwesomeIcon icon={faTimes} className="absolute top-4 right-4 lg:hidden cursor-pointer" />
                <h3 className="text-xl font-bold"><b>Presidency University</b></h3>
            </div>
            <div className="p-8 text-lg text-gray-600 font-semibold">
                <a href="/" className="block py-2">Home</a>
                <Accordion title="User Management">
                    <a href="/adduser" className="block py-2 pl-6 bg-gray-100">Add User</a>
                    <a href="/userslist" className="block py-2 pl-6">Manage Users</a>
                </Accordion>
                <Accordion title="Admin Management">
                    <a href="/addadmin" className="block py-2 pl-6 bg-gray-100">Add Admin</a>
                    <a href="/adminslist" className="block py-2 pl-6">Manage Admins</a>
                </Accordion>
                <Accordion title="Student Module">
                    <a href="/addstudent" className="block py-2 pl-6 bg-gray-100">Add Student</a>
                    <a href="/studentslist" className="block py-2 pl-6">Delete Student</a>
                </Accordion>
                <Accordion title="Faculty Module">
                    <a href="/addfaculty" className="block py-2 pl-6 bg-gray-100">Add Faculty</a>
                    <a href="/facultiesList" className="block py-2 pl-6">Delete Faculty</a>
                </Accordion>
                <Accordion title="Enrollment Module">
                    <a href="/enroll" className="block py-2 pl-6 bg-gray-100">Enroll Student</a>
                    <a href="#" className="block py-2 pl-6">Remove Student</a>
                </Accordion>
                <Accordion title="Role Module">
                    <a href="/addrole" className="block py-2 pl-6 bg-gray-100">Add Role</a>
                    <a href="/roleslist" className="block py-2 pl-6">Delete Role</a>
                </Accordion>
                <Accordion title="Course Module">
                    <a href="/addcourse" className="block py-2 pl-6 bg-gray-100">Add Department</a>
                    <a href="/courseslist" className="block py-2 pl-6">Remove Department</a>
                </Accordion>
            </div>
            <a href="#footer" className="block py-2 px-8">Contact</a>
            <a href="javascript:void(0)" className="block py-2 px-8" onClick={() => document.getElementById('newsletter').style.display = 'block'}>Newsletter</a>
        </nav>
    );
};

const Accordion = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleAccordion = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            <button onClick={toggleAccordion} className="block w-full text-left py-2 px-8 focus:outline-none">
                {title} <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            <div className={`pl-8 transition-all duration-300 ease-in-out overflow-hidden ${isActive ? 'max-h-96' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
