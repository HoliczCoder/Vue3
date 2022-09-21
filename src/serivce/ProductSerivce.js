import {Axios} from "./Axios" 

export default function getProductByCategoryId (id){
    return Axios.get(`/product/${id}`)
}