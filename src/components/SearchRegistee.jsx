import { useQuery } from "@tanstack/react-query"
import { getSearchTerm, queryclient } from "../utils/http"
import { Loader } from "./Loader";
import {ErrorPreview} from "./ErrorPreview";
import { Registee } from "./Registee";
import { useEffect, useRef, useState } from "react";
import { ContentUser } from "./Content/ContentUser";

function SearchRegistee() {
    const [searchTerm,setSearchTerm] = useState("");
    
     const {data,isError,isLoading,error,refetch} =useQuery({
        queryKey :['searchTerm',searchTerm],
        queryFn : ({signal}) => getSearchTerm({signal,searchTerm}),
        enabled: false,
     });
    
     function handleSubmit(e){
           e.preventDefault();
           refetch()
           
     }
   
    
    data && console.log(data.searchedObj.length);

    return (
      <>
        <div style={{textAlign:"center", margin:"100px 0"}}>
            <form onSubmit={handleSubmit} id="search-form">
          <input
            style={{width:"50%",height:"50px",border:"none",borderRadius:"25px",fontSize:"1.2rem",padding:"0 35px",
          margin:"0 15px 0",color:"#7f8ea3"}}
            type="search"
            placeholder="Search Others using their username"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <button type="submit"
          style={{
            border:"none",
            cursor:"pointer",
            fontSize:"1.25rem",
            background:"transparent",
            color:"#7f8ea3"
          }}>Search</button>
        </form>
       
            
        </div>
         <div className='div_content'>
         {
           data && data.searchedObj.map((user)=>
             
             <ContentUser user={user} key={user._id} />
         ) 
         }
         {
          data && data.searchedObj.length===0 && <h1 style={{textAlign:"center", 
          color:"#7f8ea3",letterSpacing:"0.1cm"}}>
            No user found</h1>
         }
        
      </div>
      </>
    );
}

export default SearchRegistee;