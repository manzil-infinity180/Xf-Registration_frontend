import { getAllRegistee } from '../../utils/http';
import { ErrorPreview } from '../ErrorPreview';
import { Loader } from '../Loader';
import { useQuery } from "@tanstack/react-query"
import './Content.css'
import { ContentUser } from './ContentUser';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Map from '../Map/Map';
import SearchRegistee from '../SearchRegistee';
var values = {
  '2016-06-23': 1,
  '2016-06-26': 22,
  '2016-06-27': 3,
  '2016-06-28': 4,
  '2016-06-29': 9
}
var panelColors = [
  '#EEEEEE',
  '#46f723',
  '#F87D09',
  '#AC5808',
  '#7B3F06'
];
var until = '2016-06-30';
function Content() {

  const {data,isError,error,isPending,isLoading}=useQuery({
    queryKey : ['registee'],
    queryFn : getAllRegistee
});
// console.log(data);

let content;
    if(isLoading){
        content= <Loader />
    }
    if(isError){
        // console.log(error.info)
        content = <ErrorPreview title={"Error"} message={error.message} />
    }


    return (
      <>
       <Navbar />
       <div className='banner' >
        <div className='title_front_div'>
        <h1 className='title_front'>Create Your Profile in 1 minute & Share through One Link</h1>
        
        </div>
        <p className='p_title_front'>Wrap your all stats at one place like projects,competitive programming stats and share everywhere with anybody.</p>

       </div>
       <SearchRegistee />
        <section className='content_secton section_content2'>
       
        <div className='title_content'>
        <h1 className='title_h1'>Users</h1>
        </div>
        <p className='title_des'>Here all user who have registered on XF,See other profiles content like Resume, Project, 
            Leetcode & Github heatmap, and other information.</p>

        <div className='div_content'>
            {
              data 
              && 
              data.allRegistee.map((user)=> <ContentUser user={user} key={user._id} />)

            
            }
             { isLoading && <Loader />}

        </div>
        </section>


        
        
        <Header />
        </>
        
    );
}




export default Content;

