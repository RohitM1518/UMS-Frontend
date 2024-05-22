// src/services/RoleService.js
import axios from 'axios';

const ROLE_API_BASE_URL = "http://localhost:8080/api/roles";

class RoleService {
    getRoles() {
        return axios.get(ROLE_API_BASE_URL);
    }

    createRole(role) {
        return axios.post(ROLE_API_BASE_URL, role);
    }

    getRoleById(roleId) {
        return axios.get(ROLE_API_BASE_URL + '/' + roleId);
    }

    updateRole(role, roleId) {
        return axios.put(ROLE_API_BASE_URL + '/' + roleId, role);
    }

    deleteRole(roleId) {
        return axios.delete(ROLE_API_BASE_URL + '/' + roleId);
    }
}

export default new RoleService();
