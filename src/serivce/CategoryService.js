import {Axios} from "./Axios" 

export default function getCategory (){
    return Axios.get("/motorcycle-category")
}