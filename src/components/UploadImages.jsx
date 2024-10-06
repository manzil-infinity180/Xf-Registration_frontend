import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { queryclient, uploadUserPhoto } from "../utils/http";
import './UploadImages.css';
import GoBack from "./UtilComponent/GoBack";

export function UploadImages() {
    const [file, setFile] = useState(null);
    const [filebg, setFileBg] = useState(null);

    const { mutate } = useMutation({
        mutationFn: uploadUserPhoto,
        onSuccess: () => {
            toast.success("Image uploaded successfully");
        },
        onError: () => {
            toast.error("Something went wrong");
        },
        onSettled: () => {
            queryclient.invalidateQueries('registee');
        }
    });

    function handleUploadfile() {
        const data = new FormData();
        data.append("photo", file);
        mutate(data);
    }

    function handleBgFile() {
        const data = new FormData();
        data.append("bgimg", filebg);
        mutate(data);
    }

    return (
        <>
            <GoBack />
            <div className="upload_div">
                <h1>Upload and share your images.</h1>
                <p className="text_drag">Drag and drop to their specific position and start uploading your images now. 10 MB limit.
                And then simply click to Upload</p>

                <div className="div_input">
                    <p className="p_ele">User profile photo</p>
                    <div className="custom_file_input">
                        <input 
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            multiple={false}
                        />
                    </div>
                    {file && <p className="file_label">{file.name}</p>}
                    <button className="button_upload" onClick={handleUploadfile}>Upload UserProfile</button>
                </div>

                <div className="div_input">
                    <p className="p_ele">Background photo</p>
                    <div className="custom_file_input">
                        <input 
                            type="file"
                            onChange={(e) => setFileBg(e.target.files[0])}
                            multiple={false}
                        />
                    </div>
                    {filebg && <p className="file_label">{filebg.name}</p>}
                    <button className="button_upload" onClick={handleBgFile}>Upload BgImage</button>
                </div>
            </div>
        </>
    );
}
