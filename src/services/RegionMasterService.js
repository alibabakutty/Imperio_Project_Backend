import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/regionMaster";


export const createNewRegionMaster = (region) => axios.post(REST_API_BASE_URL+"/add", region);