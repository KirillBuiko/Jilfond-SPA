import {RequestClass} from "@/requests/RequestClass";

export class EmployeesRequestClass extends RequestClass{
    async getAllEmployees() {
        return this.makeRequest("https://jsonplaceholder.typicode.com/users");
    }

    async getEmployee(id) {
        return this.makeRequest(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
}