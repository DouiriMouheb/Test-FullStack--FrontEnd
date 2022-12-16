import {axiosInstance} from "../setup/axios";

export const  getAllTodos = async ()=>{
    try{
        const response = await axiosInstance({
            method :'get',
            url:'/display-data'
        })
        return {success:true , data:response.data}
    }catch (e) {
        return {success:false , data: null}
    }
}