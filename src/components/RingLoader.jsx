
import React from 'react';
import { RingLoader } from 'react-spinners';

const CustomRingLoader = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <RingLoader
                color="#a9704d"  
                loading={true}    
                size={80}        
            />
        </div>
    );
};

export default CustomRingLoader;
