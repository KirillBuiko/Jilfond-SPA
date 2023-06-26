import {createStore} from "vuex";
import employees from "@/store/modules/employees";

export default createStore({
    modules: {
        employees
    },
})