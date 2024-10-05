import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import CustomRingLoader from './RingLoader'; 

export const Loader = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <InfinitySpin
                visible={true}
                width="200"
                color="#a9704d"
                ariaLabel="infinity-spin-loading"
            />
            <CustomRingLoader />
        </div>
    );
};
