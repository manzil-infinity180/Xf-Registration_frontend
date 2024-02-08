import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { logoutUser } from '../utils/http';
import { useState } from 'react';

export function Logout() {
    const [value,setValue] = useState(true);
   const navigate = useNavigate();
    const {data,isError,error,isPending,isLoading,refetch,isSuccess}=useQuery({
        queryKey : ['getme'],
        queryFn : logoutUser,
        enabled:false
    });

    function handleLogout(){
        console.log("heloo");
        refetch();
        if(value){
            toast.success("successful logout")
            setValue(false);
        }
        data && console.log(data);
        setTimeout(()=>{
            navigate('/login')
        },1000)
        
    }
    return (
        <div>

            <button onClick={handleLogout} style={{width:"20%",padding:"5px"}}>Logout</button>
            
        </div>
    );
}