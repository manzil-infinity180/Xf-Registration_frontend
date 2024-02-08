import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import {queryclient, uploadUserPhoto} from "../utils/http"
import axios from 'axios'
import { render } from "react-dom";

export function UploadImages() {
    const [file,setFile] = useState(null);
    const [filebg,setFileBg] = useState(null);

    const {mutate,isPending,isError,error} = useMutation({
        mutationFn : uploadUserPhoto,
        onSuccess: (data) => {
            console.log(data);
            toast.success("Image uploaded successfully");
            
      },
      onError : (error)=>{
        // console.log(error.info);
        // toast.error(error.info.status + "\n" + error.info.message);
        console.log(error)
      },
      onSettled: () => {
      queryclient.invalidateQueries('registee')
  }
    })

   
    function handleUploadfile(){
        // console.log(file)
        const data = new FormData();
        console.log(file)
        data.append("photo", file);
       
       
        
        // const datax = Object.fromEntries(data);
        // // console.log(datax.image);
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onloadend = ()=>{
        //     console.log(reader.result)
        //     mutate(reader.result);
        // }
        // console.log(JSON.stringify(data));
        // console.log(datax.image);
        mutate(data);
    }
    
    function handleBgFile(){
        const data = new FormData();
        data.append("bgimg", filebg);
        // const datax = Object.fromEntries(data);
        console.log(data);
        mutate(data);
        
       
    }
    return (
        <div>
            <p>User profile photo</p>
            <input 
               type="file"
               onChange={(e)=>setFile(e.target.files[0])}
               multiple={false}
               />
               {
                file && <p style={{color:"blue"}}>{file.name}</p>
               }
               <button onClick={handleUploadfile}>Upload UserProfile</button>
            <p>Background photo </p>   
            <input 
               type="file"
               onChange={(e)=>setFileBg(e.target.files[0])}
               multiple={false}
               />
               {
                filebg && <p style={{color:"blue"}}>{filebg.name}</p>
               }
               <button onClick={handleBgFile}>Upload UserProfile</button>
        </div>
    );
}
