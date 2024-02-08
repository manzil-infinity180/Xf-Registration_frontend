import { useMutation,useQuery } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import {getMeData, queryclient, updateUserDetails} from "../utils/http"
import { useState } from "react";
const style = {padding:'10px', margin:"10px"};
export function UpdateDetails() {
    // const [user,setUser]=useState({
    //     name:'',
    //     age:'',
    //     OneTopSkill:'',
    //     position:'',
    //     PostalCode:'',
    //     address:'',
    //     college:''
    // });
    const [user,setUser] = useState({});
    const [value,setValue] = useState(true);

    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['getme'],
        queryFn : getMeData
    });
    // optimstic updating
    const {mutate}=useMutation({
        mutationFn : updateUserDetails,

        onMutate : async (data)=>{
           // getting the data 
            const newData = data;
            // cancelling the all other queries
            await queryclient.cancelQueries({queryKey: ['getme']});
            // previous stored queries
            const previousEvent= queryclient.getQueriesData(['getme']);
             // setting the data 
            queryclient.setQueriesData(['getme'],newData);
            return {previousEvent};
        },
        onError: (error,data,context)=>{
            queryclient.setQueriesData(['getme'],context.previousEvent);
          },
          onSettled: ()=>{
            // invalidating the query that we update the outdated data 
            queryclient.invalidateQueries(['getme']);
          }
        
    });
     data && console.log(data);
    if(value && data){
        setUser(data);
        setValue(false);
    }
     console.log("hey");
     console.log(user);

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
        const data = Object.fromEntries(formData);
        console.log(data);
        mutate(data);
    }
    const handleInput = (e)=>{
        setUser({
          ...user,
          [e.target.name]:e.target.value
        })
      }
    return (
         <div>

            {data && <div style={{
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
       
            <h2 style={{textAlign:"center"}}>Update YourSelf</h2>
            <input 
            type="text" 
            placeholder="Full Name" 
            name="name" style={style}
            value={user.name}
            onChange={handleInput}
            />
            <input type="email" placeholder="Email" name="email" 
            style={style}
            value={user.email}
            disabled
            />
            <input type="number"
             placeholder="age" 
            name="age" 
            style={style}
            value={user.age}
            onChange={handleInput}
            />
            <input type="text"
             placeholder="Username" 
             name="username" 
             style={style}
             value={user.username}
             disabled
            />
            <input type="text"
             placeholder="College Name"
             name="college"
             style={style} 
             value={user.college}
             onChange={handleInput}
            />
            <input type="text"
             placeholder="Address" 
             name="address" 
            style={style}
            value={user.address}
            onChange={handleInput}
            />
            <input type="text"
             placeholder="PostalCode" 
             name="PostalCode" 
            style={style}
            value={user.PostalCode}
            onChange={handleInput}
            />
            <input type="text"
             placeholder="Position-Student/Current Job" 
            name="position" 
            style={style}
            value={user.position}
            onChange={handleInput}
            />
            <input type="text"
             placeholder="One Top Skill" 
             name="OneTopSkill" 
            style={style}
            value={user.OneTopSkill}
            onChange={handleInput}
            />
            <button type="submit" style={style}>Update</button>
        </form>
        </div>}
            
        </div>
    );
}
