import { useQuery } from "@tanstack/react-query"
import { getAllRegistee } from "../utils/http"
import { Loader } from "./Loader";
import {ErrorPreview} from "./ErrorPreview";
import { Registee } from "./Registee";
export function Overview(){
    return (
        <div>
            <h1>Hello</h1>
            {/* {content} */}
        </div>
    )
}