import { InfinitySpin } from 'react-loader-spinner'
import { HashLoader } from "react-spinners";
export const Loader = () => {
    return (
        <div style={{ display:"flex" ,textAlign:"center",justifyContent:"center" }}>
            <HashLoader 
  visible={true}
  
  width="200"
  color="#a9704d"
  ariaLabel="infinity-spin-loading"
  />
        </div>
    );
};

