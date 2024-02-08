import { useState } from "react";
import { fetchData } from "../utils/http";
import { useMutation } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import {queryclient} from "../utils/http"
import {useNavigate} from "react-router-dom"
import { Loader } from "../components/Loader";
import { Registee } from "../components/Registee";

export function Login(){
    const navigate = useNavigate();
    // const [post , setPost]= useState({
    //     email:'',
    //     password:''
    //   });
    const [post,setPost] = useState({
        email:''
    })
    //   console.log(post)
      const handleInput = (e)=>{
        setPost({
          ...post,
          [e.target.name]:e.target.value
        })
      }
    const {mutate,isLoading,isPending,data,isError,error} = useMutation({
        mutationFn:fetchData,
        onSuccess: (data) => {
            console.log(data);
            toast.success("Login Successfully " + data.loginedUser.username);
            navigate('/overview')
            
      },
      onError : (error)=>{
        toast.error(error.info.status + "\n" + error.info.message);
      },
   onSettled: () => {
    queryclient.invalidateQueries('create')
 }
    })

    
//   if(isError){
//     toast.error(error.info.status + "\n" + error.info.message);
//   }
     let content;
     if(isLoading || isPending){
        content = <Loader />
     }
     if(data){
        content = <ul>
            {
                <Registee user={data.loginedUser} />
            }
        </ul>
     }
    

    // let content;
    // if(isLoading){
    //     content = <h1>Adding.....</h1>
    // }else if(isSuccess){
    //     content = <h1>Name: {data.user.name} Email: {data.user.email} </h1>
    // }else if(isError){
    //     content = <h1>Error...</h1>
    // }




        
        // async function fetchData(post){
        //     const url = 'http://localhost:7007/api/v1/login';
        //     const res = await fetch(url,{
        //        method:"POST",
        //        body: JSON.stringify(post),
        //        credentials :'include',
        //        headers: {
        //         'Content-type':'application/json'
        //       },
    
        //     });
        //     const data = await res.json();
        //     console.log(data);
        // }
       
        function handleSubmit(e){
            // console.log(post);
            e.preventDefault();
            const formData = new FormData(e.target);
            // console.log(formData)
            const data = Object.fromEntries(formData);
            // onSubmit({...data});
            // console.log(data);
        //    mutate(post);
        mutate(data);
        
        }
     
    

    return(
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" onChange={handleInput}/>
            {/* <label>Passwod</label>
            <input type="password" name="password" onChange={handleInput}/>
            {content} */}
            {content}
            <button type="submit" style={{fontSize:"1.1rem"}}>Login</button>
        </form>
    )
}