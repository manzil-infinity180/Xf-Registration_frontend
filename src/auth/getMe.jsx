import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMeData } from '../utils/http';

export function GetMe() {
    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['getme'],
        queryFn : getMeData
    });

    data && console.log(data);
    
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
}
