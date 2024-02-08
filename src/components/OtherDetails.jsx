import toast from 'react-hot-toast';
import {Link, useNavigate, useParams} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMeData, getOthersData } from '../utils/http';
import { Loader } from '../components/Loader';
import { ErrorPreview } from './ErrorPreview';
import { Registee } from './Registee';

function OtherDetails() {
    const {username} = useParams();
    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['getOthers',username],
        queryFn : ({signal}) => getOthersData({signal,username}),
    });

    data && console.log(data.detail);
    console.log(username);

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
    < Registee user={data.detail} key={data.detail._id}/>
    
  }
 </ul>
}

    return (
        <div>
            <h1>Others User Detail</h1>
            {
                data && content
            }
        </div>
    );
}

export default OtherDetails;