import { useQuery } from "@tanstack/react-query"
import { getSearchTerm, queryclient } from "../utils/http"
import { Loader } from "./Loader";
import {ErrorPreview} from "./ErrorPreview";
import { Registee } from "./Registee";
import { useEffect, useRef, useState } from "react";

function SearchRegistee() {
    const [searchTerm,setSearchTerm] = useState("");
    const searchElement = useRef();
    
     const {data,isError,isLoading,error} =useQuery({
        queryKey :['registee',searchTerm],
        queryFn : ({signal}) => getSearchTerm({signal,searchTerm}),
        retry: 3
     });
    
     function handleSubmit(e){
           e.preventDefault();
           setSearchTerm(searchElement.current.value);
           
     }
     let content;
    if(isLoading){
        content= <Loader />
    }
    if(isError){
        content = <ErrorPreview title={"Error"} message={error.message} />
    }
    if(searchTerm && data ){ 
              if(data.searchedObj.length>=1){
        content = <ul>
        {
          data.searchedObj.map((el)=> < Registee user={el} key={el._id}/>
          ) 
        }
       </ul>
       }else{
        content = <ErrorPreview title="No user found"  message="Please check it again" />
       }
        
        
    }

    return (
        <div style={{textAlign:"center", margin:"100px"}}>
            <form onSubmit={handleSubmit} id="search-form">
          <input
            style={{width:"250px",height:"50px"}}
            type="search"
            placeholder="Search Others using their username"
            ref={searchElement}
          />
          <button type="submit">Search</button>
        </form>
        <div>
           { searchTerm && content}
        </div>
            
        </div>
    );
}

export default SearchRegistee;