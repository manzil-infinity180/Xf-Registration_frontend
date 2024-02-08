import { useQuery } from "@tanstack/react-query"
import { getAllRegistee } from "../utils/http"
import { Loader } from "./Loader";
import {ErrorPreview} from "./ErrorPreview";
import { Registee } from "./Registee";
export function Overview(){

    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['registee'],
        queryFn : getAllRegistee
    });
    // const allRegistee = [data;
    // data && console.log(data.allRegistee);

    let content;
    if(isLoading){
        content= <Loader />
    }
    if(isError){
        console.log(error.info)
        content = <ErrorPreview title={"Error"} message={error.message} />
    }
    if(data){
       console.log(data.allRegistee);
       
       content = <ul>
        
        {
          data.allRegistee.map((el)=> < Registee user={el} key={el._id}/>
          ) 
        }
       </ul>
        
        
    }
    
    return (
        <div>
            <h1>Hello</h1>
            {content}
        </div>
    )
}