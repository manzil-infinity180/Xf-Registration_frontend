import { getAllRegistee } from '../../utils/http';
import { ErrorPreview } from '../ErrorPreview';
import { Loader } from '../Loader';
import { useQuery } from "@tanstack/react-query"
import './Content.css'
import { ContentUser } from './ContentUser';
import Calendar from 'react-github-contribution-calendar';
import Navbar from '../Navbar/Navbar';
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
console.log(data);

let content;
    if(isLoading){
        content= <Loader />
    }
    if(isError){
        console.log(error.info)
        content = <ErrorPreview title={"Error"} message={error.message} />
    }


    return (
      <>
       <Navbar />
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

        </div>
        </section>
        </>
        
    );
}




export default Content;

