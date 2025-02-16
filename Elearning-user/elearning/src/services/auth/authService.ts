import axios from "axios";

const Base_Url=process.env.REACT_APP_API_URL;

export interface LoginData{
    username: string;
    password: string;

}

export const login = async(dataLogin: LoginData)=>{
        try{
            const response= await axios.post(`${Base_Url}/login`,dataLogin);
                const { login_token } = response.data;
            localStorage.setItem('authToken',login_token)
        }catch(err){
            console.log("lỗi")
        }

}