
export function ErrorPreview({title , message}) {
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            textAlign:"center",
            width:"100%",
            height:"200px"
        }}>
            <div>
            <h1>{title}</h1>
            <h2>{message}</h2>
            </div>
        </div>
    );
}

