import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/'
});

export const getProducts = ()=>{
    return instance.get("productos/all/",
    {headers: {'Content-Type': 'application/json'}});
}
export const getProduct = (id)=>{
    return instance.get(`productos/getById/${id}/`)
}

