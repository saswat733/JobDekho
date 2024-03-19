import axios from "axios";
import { api_url } from "../../config";

export const userService={
    signup
}

async function signup(userData){
    try {
        const response=await axios.post(`${api_url}/users/signup`,userData);
        return response
    } catch (error) {
        throw error;
    
    }
}