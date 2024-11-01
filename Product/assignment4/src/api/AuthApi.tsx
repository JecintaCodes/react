import axios from "axios"

const url: string = 'https://todobackend-6jq1.onrender.com/api/v1/auth'

export const SignUpUser = async(data: any) =>{
    try {
 const config: {} = {
    "content-type": "multipart/form-data"
 } 
 return await axios.post(`${url}/register-user`, data, config).then((res: any)=>{

    // return res.data.data
    console.log(res)
 }) 

    } catch (error) {
      console.log(error)  
    }
}

export const SignInUser = async(data: any) =>{
    try {

        return await axios.post(`${url}/sign-in-user`, data).then((res: any)=>{
            console.log(res)
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = async(userID: string)=>{
    try {
        return await axios.get(`${url}/${userID}/get-one-User`).then((res: any)=>{
            return res.data.data
        })
    } catch (error) {
        console.log(error)

    }
}

export const getAllUsers = async()=>{
    try {
        
        return await axios.get(`${url}/get-User`).then((res: any)=>{
    return res.data.data
        })

    } catch (error) {
      console.log(error)  
    }
}

