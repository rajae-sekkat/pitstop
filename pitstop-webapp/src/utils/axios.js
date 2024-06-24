import Axios from "axios"
import store from "@/store";

let API_GATEWAY = Axios.create({
    baseURL: "http://gateway-container:8081"
});

let CustomerAPI = Axios.create({
    baseURL: "http://gateway-container:8081/api/customers/"
});
let VehicleAPI = Axios.create({
    baseURL: "http://gateway-container:8081/api/vehicles/"
});

let WorkshopAPI = Axios.create({
    baseURL: "http://gateway-container:8081/api/workshop/"
});
WorkshopAPI.interceptors.request.use(async (req) => {
    let available = await store.dispatch("WORKSHOP_SERVICE_AVAILABILITY");
    if (available) {
        return req;
    }
    return req;
}, (error) => {
    return Promise.reject(error);
});
export {
    API_GATEWAY,
    CustomerAPI,
    VehicleAPI,
    WorkshopAPI
    
}