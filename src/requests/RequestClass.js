import axios from "axios";

export class RequestClass {
    async makeRequest(url, options) {
        const {method="GET", data, responseType="json"} = options ?? {};
        return axios({
            method,
            url,
            data,
            responseType
        });
    }
}