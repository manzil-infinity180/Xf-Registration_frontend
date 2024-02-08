import { useMutation,useQuery } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import {queryclient, updateUsername} from "../utils/http"
export function UsernameUpdate() {
    
    const {mutate,isPending,isError,error} = useMutation({
        mutationFn : updateUsername,
        onSuccess: (data) => {
            console.log(data);
            toast.success("Updated Username....");
            
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
        // setPost(data);
        console.log(data);
        // console.log(post);
        mutate(data);

   }
    return (
        <div>
            <h1>Username</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="New username" name="username"
             style={{ padding:"10px", width:"200px"}} />
             <button type="submit" style={{padding:'10px',width:"100px", margin:"20px"}}>Update Me</button>
            </form>
        </div>
    );
}