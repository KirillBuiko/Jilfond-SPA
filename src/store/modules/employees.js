import {EmployeesRequestClass} from "@/requests/EmployeesRequestClass";

const employeeRequests = new EmployeesRequestClass();

const state = {
    employeesList: new Map(),
    isLoading: false,
    selectedEmployeeID: ""
}

const getters = {
    findEmployee: (state) => (nameOrID) => {
        return state.employeesList.get(nameOrID) ?? "";
    }
}

const actions = {
    getAllEmployees: async ({state, commit}) => {
        console.log("loading start");
        if (state.isLoading) return;
        commit('setLoading', true);
        try {
            const resp = await employeeRequests.getAllEmployees();
            console.log(resp);
            //commit('addEmployees', resp.data);
            for(let i = 0; i < resp.data.length; i++) {
                await new Promise((resolve) => {
                    setTimeout( () => {
                        commit('addEmployees', [resp.data[i]]);
                        resolve();
                    },300);
                })
            }
        } catch (e) {
            // some error handle
            console.log(e);
        }
        commit('setLoading', false);
        console.log("loading stop");
    }
}

const mutations = {
    setLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    addEmployees(state, employees) {
        if (!employees) return;
        employees.forEach((e) => {
            state.employeesList.set(e["id"], e);
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
