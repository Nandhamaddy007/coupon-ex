import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


export default function Controller(props){
    return(
        <>
     <Navbar />
         
                <Outlet />
        </>
    )
}