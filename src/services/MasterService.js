import axios from "axios";


const REST_API_BASE_URL = "http://localhost:8080/api/master";


// ADD
export const createNewRegionMaster = (region) => axios.post(REST_API_BASE_URL+"/addRegion", region);


export const createNewExecutiveMaster = (executive) => axios.post(REST_API_BASE_URL+"/addExecutive", executive);


export const createNewDistributorMaster = (distributor) => axios.post(REST_API_BASE_URL+"/addDistributor", distributor);


export const createNewProductMaster = (product) => axios.post(REST_API_BASE_URL+"/addProduct", product);

// DISPLAY
export const listOfRegions = () => {return axios.get(REST_API_BASE_URL+"/allRegion")};

export const listOfExecutives = () => {return axios.get(REST_API_BASE_URL+"/allExecutive")};

export const listOfDistributors = () => {return axios.get(REST_API_BASE_URL+"/allDistributor")};

export const listOfProducts = () => {return axios.get(REST_API_BASE_URL+"/allProduct")};


// ALTER
