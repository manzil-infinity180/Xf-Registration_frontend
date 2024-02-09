import toast from 'react-hot-toast';
import {Link, useParams} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getMeData, getOthersData } from '../utils/http';
import { Loader } from '../components/Loader';
import { ErrorPreview } from './ErrorPreview';
import { Registee } from './Registee';
import {BackButton} from './BackButton';
import { SocialIcon } from 'react-social-icons'
function OtherDetails() {
    // const navigate = useNavigate();

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

// if(data){
//     let acc = data.detail.github;
//     console.log(acc);
//     console.log(acc.indexOf('://'))
//     console.log(acc.lastIndexOf('m/'));
//     console.log(acc.slice(acc.indexOf('m/')+2)); // account-username
//     console.log(acc.slice(acc.indexOf('://')+3,acc.indexOf('.c'))); // social-medial-platform
//     // console.log(acc.);
// }
function getSocialInfo(acc){
    // console.log(acc)
     let accountUsername = acc.slice(acc.indexOf('m/')+2);
     let socilaPlatform = acc.slice(acc.indexOf('://')+3,acc.indexOf('.c'));
    //  console.log(accountUsername,socilaPlatform);
    //  console.log(account.slice(account.indexOf('m/'+2)));
     return {accountUsername,socilaPlatform}; 
}
   if(data && data.detail.github){
    const {accountUsername:name ,socilaPlatform:platform} = getSocialInfo(data.detail.github);
    console.log(name,platform);
   }

    return (
        <>
        <BackButton />

        <div>
            <h1>Others User Detail</h1>
            {
                data && content
            }
            {
                data && (
                    data.detail.github && (
                        <>
                        {/* <a href={data.detail.github}>Github</a> */}
                        <SocialIcon network="github" url={data.detail.github} target="_blank"/>
                        <SocialIcon network='linkedin' url={data.detail.linkedin} target="_blank"/>
                        <SocialIcon network='leetcode' url={data.detail.leetcode} target="_blank"/>
                        </>
                    )
                   
                )
            }
            
        </div>
        </>
    );
}

export default OtherDetails;