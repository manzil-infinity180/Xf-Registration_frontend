

import { InfinitySpin, Ring } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <InfinitySpin
                visible={true}
                width="200"
                color="#a9704d"
                ariaLabel="infinity-spin-loading"
            />
            <Ring
                visible={true}
                height="80"
                width="80"
                color="#a9704d"
                ariaLabel="ring-loading"
            />
        </div>
    );
};
