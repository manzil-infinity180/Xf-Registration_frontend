import toast from 'react-hot-toast';
import {Link, useNavigate} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMeData } from '../utils/http';
import { Loader } from '../components/Loader';
import { ErrorPreview } from '../components/ErrorPreview';
import { Registee } from '../components/Registee';
import { Logout } from './Logout';
import { UpdateDetails } from './UpdateDetails';
import { BackButton } from '../components/BackButton';

export function GetMe() {
    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['getme'],
        queryFn : getMeData
    });

    // data && console.log(data);
    
    let content;
    if(isLoading){
        content= <Loader />
    }
    if(isError){
        content = <ErrorPreview title={"Error"} message={error.message} />
    }
    if(data ){ 
        
  content = <ul>
  {
    < Registee user={data} key={data._id}/>
    
  }
 </ul>
}
    
    return (
        <div>
            <BackButton />
            <div>
            <h1>Profile</h1>
            {
                data && content
            }
            {
                data===undefined && <h2>HEY something went Wrong!!! Please Login Again <Link to='/login'><button>Login</button></Link></h2>
            }
            {
                data && <Logout />
            }
            </div>
            <div>
            <UpdateDetails />
            </div>
        </div>
        
    );
}
