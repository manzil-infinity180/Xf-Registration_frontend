import { InfinitySpin } from 'react-loader-spinner'
export const Loader = () => {
    return (
        <div style={{textAlign:"center",justifyContent:"center"}}>
            <InfinitySpin
  visible={true}
  
  width="200"
  color="#a9704d"
  ariaLabel="infinity-spin-loading"
  />
        </div>
    );
};

