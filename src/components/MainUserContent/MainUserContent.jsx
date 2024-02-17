import Navbar from "../Navbar/Navbar";
import './MainUserContent.css'
import '../Content/Content.css'
import {Link, useParams} from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { FaGithub } from "react-icons/fa";
import toast from 'react-hot-toast';
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import Codeforces from "../Codeforces/Codeforces";
import { getOthersData } from "../../utils/http";
import SkillBadge from "./SkillBadge";
import { ErrorPreview } from "../ErrorPreview";
import { ProfileTracker } from "../ProjectTracker/ProjectTracker";
const style_icon = {
    width:"2rem",
    height:"2rem",
    // gap:"1rem"
    margin: "0 15px"
}

function MainUserContent() {
    const {username} = useParams();
    let skillsData;
    const {data,isError,error,isPending,isLoading}=useQuery({
        queryKey : ['getOthers',username],
        queryFn : ({signal}) => getOthersData({signal,username}),
    });

    
    
    data && console.log(data.detail);
    console.log(username);
    console.log("hello");
    data && console.log(data.detail)
    let content;
    if(isError){
        toast.error(error);
    }
    let oneTime = true;
    if(data && !oneTime){
        toast.success("Data Delivered");
        oneTime = false;
    }
    function handleClickIcon(){
        if(data.detail.resumeLink==="" || data.detail===undefined || data.detail.resumeLink===undefined ){
            toast.error("No Resume Link mentioned by User");
        }else{
            toast.success("Fetching....")
        }
    }
    
    return (
            <>

        {
          data && <>
            <Navbar />
        <section className='content_secton section_content2_main'>
        <div className='inside_img_main'>
             <img src={data.detail.image}
             style={{borderRadius:"50%", width:"180px", height:"180px", objectFit:"cover", 
              position:"absolute", border:"1px solid pink"}} />
           </div>
        <div className='title_content'>
           
        
        <h1 className='title_h1_main'>{data.detail.name}</h1>
        
        </div>
        <p style={{
            textAlign:"center",
            textTransform:"uppercase"
        }}>{data.detail.email}</p>
        <div className="social_icon_link">
        <a href={`https://github.com/${data.detail.github}`} style={{
            color:"white"
        }} target="_blank" > <FaGithub style={style_icon}/> </a>
        <a href={`https://twitter.com/manzil_rahul`} style={{
        color:"white"
       }} target="_blank" >
        <FaXTwitter style={style_icon}/>
        </a>
        <a href={`https://www.linkedin.com/in/rahul-vishwakarma-553874256/`} style={{
        color:"white" 
       }} target="_blank" >
        <FaLinkedin style={style_icon} /> </a>
        <a href={`https://leetcode.com/${data.detail.leetcode}/`} style={{
        color:"white"
       }} target="_blank">
       <SiLeetcode style={style_icon} /></a>
       <a href={`https://codeforces.com/profile/${data.detail.codeforces}`} 
       style={{
        color:"white"
       }} target="_blank">
       <SiCodeforces style={style_icon} /></a>
    
        </div>
        <div className="resume_div">
        <button className="resume_download">

        <a href={`${data.detail.resumeLink}`} style={{
            textDecoration:"none",
            color:"white"
        }} onClick={handleClickIcon}>
        <FaDownload style={{
            margin:"0 5px"
        }}/> Resume </a>
     </button>
     </div>
        <p className='title_des_main'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Nisi lacus sed viverra tellus in hac habitasse. Tempor orci eu 
lobortis elementum nibh tellus molestie nunc. Eget mi proin sed libero enim sed. Cras semper auctor neque vitae tempus
 quam pellentesque. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Non diam phasellus vestibulum lo
rem sed. Dictum fusce ut placerat orci nulla pellentesque. Mattis nunc sed blandit libero volutpat sed cras ornare. Ut diam qua
m nulla porttitor massa id neque aliquam. Turpis egestas maecenas pharetra convallis posuere morbi.
Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Pulvinar pellentesque habitant morbi tristique senectus. 
Placerat vestibulum lectus mauris ultrices eros in cursus. Arcu felis bibendum ut tristique et. 
        </p>
        <div className="line_div"></div>
        <div style={{
            textAlign:"center",
            // justifyContent:"center"
        }}>
            <h1 style={{
                fontSize:"3rem",
                margin:"2rem 0",
                textTransform:"uppercase",
                letterSpacing:"0.3rem"
            }}>Skills</h1>
        
        
            {
                 data.detail.skills.split(',').map(el=> 
                    <img alt="Static Badge" src={`https://img.shields.io/badge/${el}-030712?style=for-the-badge&color=7f8ea3`} className="badge_skill" key={el}/>
                    )
            }
        
        </div>
        <div className="heatmap_div">
            {
                data.detail.github? <GitHubCalendar username={`${data.detail.github}`}/> : <ErrorPreview title={"No Username Found"}
                message={"Please Update/Check your Github Username"} />
            }
        
        </div>
        <div className="leetcode_div">
            {
                data.detail.github ? <img src={`https://leetcard.jacoblin.cool/${data.detail.leetcode}?theme=dark&font=Stardos%20Stencil`}
                style={{
                    margin:"10px 20px",
                    width:"35rem"
                }}/> : <ErrorPreview title={"No Username Found"}
                message={"Please Update/Check your Github Username"} />
            }
        
        {/* <img src="https://codeforces-readme-stats.vercel.app/api/card?username=KDVinit&theme=radical" alt="codeforces" /> */}
        </div>

        <h1 style={{
            textAlign:"center",
                fontSize:"3rem",
                margin:"5rem 0",
                textTransform:"uppercase",
                letterSpacing:"0.3rem",
            }}>Stats</h1>
            {
                data.detail.codeforces? <Codeforces username={data.detail.codeforces}/> : 
                    <ErrorPreview title={"No Username Found"}
                 message={"Please Update/Check your CodeForces Username"} />
               
            }
             <section className='content_secton section_content2'>
            <div className="div_content div_content_main">
            {
            data.detail.project.map((el)=>
                <ProfileTracker key={el._id} project={el}/>
            )
            }
            {/* <ProfileTracker />
            <ProfileTracker />
            <ProfileTracker /> */}
           
            </div>
            </section>
        
        </section>
        </>
        }
        </>
    );
}

export default MainUserContent;