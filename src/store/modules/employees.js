import {EmployeesRequestClass} from "@/requests/EmployeesRequestClass";
import stringSimilarity from 'string-similarity'
const employeeRequests = new EmployeesRequestClass();

const state = {
    employeesList: new Map(),
    isLoading: false,
    selectedEmployeeID: ""
}

const getters = {
}

const actions = {
    getAllEmployees: async ({state, commit}) => {
        if (state.isLoading) return;
        commit('setLoading', true);
        try {
            const resp = await employeeRequests.getAllEmployees();
            commit('addEmployees', resp.data);
        } catch (e) {
            commit('setLoading', false);
            throw(e);
        }
        commit('setLoading', false);
    },
    findEmployee: ({state}, namesOrIDs) => {
        if(!namesOrIDs || (typeof namesOrIDs !== "string")) return [];
        const resultArray = [];
        // split
        const searchArray = namesOrIDs.toLowerCase().split(',');
        // iterate all
        for (let i = 0; i < searchArray.length; i++) {
            // check if id
            const item = searchArray[i].trim();
            let id = parseInt(item);
            if(!isNaN(id)){
                if(state.employeesList.has(id)) resultArray.push(id);
            }
            else {
                let maxSimilarity = 0;
                let bestID = "";
                // find the most similar name
                state.employeesList.forEach((value, key) => {
                    const similarity = stringSimilarity.compareTwoStrings(value.name.toLowerCase(), item);
                    if(similarity > maxSimilarity){
                        maxSimilarity = similarity;
                        bestID = key;
                    }
                });
                if (bestID !== "") resultArray.push(bestID);
            }
        }
        return resultArray;
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
    },
    selectEmployee(state, id) {
        if(state.employeesList.has(id))
            state.selectedEmployeeID = id;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
