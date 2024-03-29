import { Link } from 'react-router-dom';
import './Content.css'
export function ContentUser({user}){
    return <>
      {user && 
      <div className='user-main-content style '>
         <div className='inside_img' style={{
           backgroundImage:`url(${user.bgimg})`
         }}>
            <img src={user.image}
            style={{borderRadius:"50%", width:"150px", height:"150px", 
            objectFit:"cover",
            marginTop:"7rem", position:"absolute", border:"1px solid pink"}} 
            loading='lazy'/>
         </div>
         <div className='user_intro'>
         <h3 className='user_name'>{user.name}</h3>
         <div className='skills'>
           
            {user.skills.split(',').map((el,i)=> 
            
             <div className='skills_name'>
                    <button className='skills_btn'>{el}</button>
                    </div>
                    )}
         </div>
         <p className='skills_user'>
          {user.summary}
         </p>
         </div>
         <div className='show_profile'>
            <Link to={`/profile/${user.username}`} className='show_profile_link'>Show Profile
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
            width="1rem" style={{marginLeft:"4px"}} 
            ><path fill="#0a101f" d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 160H128c-35.3 0-64 28.7-64 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V224C0 153.3 57.3 96 128 96H338.7L297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm-96 256c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 416H96c-17.7 0-32 14.3-32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448c0-53 43-96 96-96H242.7l-41.4-41.4c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>
            </Link>

         </div>
         
         
         </div>}
    </>
 }