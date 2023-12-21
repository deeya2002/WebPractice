//yo gareko backend k ho gareko ho url join garna
import axios from "axios";
const Api = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials: true,
    headers:{
        "Content-Type":"multipart/form-data"
    }
})

//configuration for axios
const config ={
    headers : {
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

//creating test api
export const testApi = () => Api.get("/test");
//http:localhost:5000/test

//Creating Register Api
export const registerApi = (data)=> Api.post("/api/user/create",data);

//Creating Login Api
export const loginApi = (data)=> Api.post("/api/user/login",data);

//create product api
export const createProductApi =(formData) => Api.post('/api/product/create', formData)

// get products Api
export const getAllProductsApi = () => Api.get('/api/product/get_products')

//get single product api
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`)

//update product 
export const updateProductApi = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData)

//delete product 
export const  deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`)
