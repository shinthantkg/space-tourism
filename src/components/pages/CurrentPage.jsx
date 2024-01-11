import { useContext } from "react";
import CurrentPageContext from "../../contexts/NavContext.jsx";
import Navbar from "../Navbar.jsx";
import Home from "./Home.jsx";
import Destination from "./Destination.jsx";

export default function CurrentPage() {
    const { currentPage } = useContext(CurrentPageContext);

    function getPageComponent() {
        switch (currentPage) {
            case "00":
                return <Home />;

            case "01":
                return <Destination />;

            default:
                return <Home />;
        }
    };

    return (
        <>
            <Navbar />
            {getPageComponent()}
        </>
    );
}