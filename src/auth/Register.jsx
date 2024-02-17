import { useState } from "react";
// import { getData, queryclient } from "../utils/http";
import { useMutation } from "@tanstack/react-query"
import { createUser, queryclient } from "../utils/http";
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
const style = {padding:'10px', margin:"10px"};
export function Register(){
    const navigate = useNavigate();
    const [searchTerm,setSearchTerm] = useState("");
    const [post,setPost] = useState({});
    const {mutate,isLoading,isPending,data,isError,error} = useMutation({
      mutationFn: createUser,
      onSuccess: (data) => {
          console.log(data);
          toast.success("Registration ....");
          navigate('/overview');
          
    },
    onError : (error)=>{
      console.log(error.info);
      toast.error(error.info.status + "\n" + error.info.message);
    },
 onSettled: () => {
  queryclient.invalidateQueries('registee')
}
  })

  

      function handleSubmit(e){
           e.preventDefault();
           const formData = new FormData(e.target);
          //  formData.append("coordinates",JSON.stringify([77.2167, 28.6448]));
           const data = Object.fromEntries(formData);
           setPost(data);
           console.log(data);
           
           console.log(post);
           mutate(data);
           
           

      }
      

    // const {data,isPending,isError,error} = useQuery({
    //     queryKey:['user'],
    //     queryFn : ({signal}) => getData({searchTerm,signal}),
    //     enabled : searchTerm !==undefined
    // });

    

    // let content;
    // if(isError){
    //     content = <h1>Error...{error.message}</h1>
    // }
    // if(isPending){
    //     content = <h1>Pending....</h1>
    // }
    // if(data){
    //    content = (
    //    <ul style={{margin:"20px"}}>
    //     {
    //         data.user.map((el)=>(
    //             <ul key={el._id} style={{margin:"20px"}}>
    //             <li>Name: {el.name}</li>
    //             <li>Email: {el.email}</li>
    //             <li>Username: {el.username}</li>
    //             </ul>
    //         ))
    //     }
    //    </ul>
    //    )
    // }

    


    return(
        <>
        
        {/* "name":"Rahul Vishwakarma",
  "age":19,
  "email":"rahul@gmail.com",
  "college":"MMMUT Gorakhpur",
  "address":"Gorakhpur,UttarPradesh",
  "PostalCode":273410,
  "position":"Backend Dev",
  "image":"user009.jpg",
  "bgimg":"bguser009.jpg",
  "username":"rahulvs2809",
  "phoneNumber":8149132874,
  "location": { "type" : "Point",
    "coordinates": [93.185654, 26.0739] },
  "OneTopSkill":"Nodejs" */}
       <div style={{
        height:"100%",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        // textAlign:'center'
        margin:"50px 0"
       }}>
        <form onSubmit={handleSubmit} style={{
        height:"100%",
        width: "30%",
        display:"flex",
        flexDirection: "column"
       }}>
        {/* <label>Name</label>
            <input type="text" name="name"  onChange={handleInput} />
            <label>Email</label>
            <input type="email" name="email"onChange={handleInput} />
            <label>Passwod</label>
            <input type="password" name="password" onChange={handleInput}/>
            <label>Username</label>
            <input type="text" name="username" onChange={handleInput}/> */}
            <h2 style={{textAlign:"center"}}>Register YourSelf</h2>
            <input type="text" placeholder="Full Name *" name="name" style={style} required/>
            <input type="email" placeholder="Email *" name="email" style={style} required />
            <input type="number" placeholder="age *" name="age" style={style} required />
            <input type="text" placeholder="Username *"  name="username" style={style} required />
            <input type="text" placeholder="College Name *" name="college"style={style} required/>
            <input type="text" placeholder="Address *" name="address" style={style} required/>
            <input type="text" placeholder="Position-Student/Current Job *" name="position" style={style} required/>
            <input type="text" placeholder="One Top Skill *" name="OneTopSkill" style={style} required/>
            <input type="text" placeholder="Skills* separated by commas like nodejs,react " style={style} name="skills"/>
            <input type="text" placeholder="Resume Drive Link" style={style} name="resumeLink"/>
            <p style={{textAlign:"center"}}>Social Links</p>
            <input type="text" placeholder="Github Username" style={style} name="github"/>
            <input type="text" placeholder="LinkedIn Link" style={style} name="linkedin"/>
            <input type="text" placeholder="Leetcode Username" style={style} name="leetcode"/>
            <input type="text" placeholder="CodeForces Username" style={style} name="codeforces"/>


            
           
            {/* <label>Search</label>
            <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search User by username"/> */}
            <button type="submit" style={style}>Send</button>
        </form>
        </div>
        {/* {content} */}
        </>
    )
}
