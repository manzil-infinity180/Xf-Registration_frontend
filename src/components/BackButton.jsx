import {useNavigate} from "react-router-dom"
export function BackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={()=>navigate(-1)} style={{
            padding:"10px",
            border:"none",
            opacity:"0.7",
        }}>&lt; Back Button  </button>
    );
}

