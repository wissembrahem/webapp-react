import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout ({videoRental}){
    return (
        <>
        <Header videoRental={videoRental} />
        <Outlet />
        </>
    );
}