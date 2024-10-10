import React from 'react';
import CustomRingLoader from './RingLoader'; 

export const Loader = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <CustomRingLoader />
        </div>
    );
};

