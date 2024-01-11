import { useContext } from "react";
import CurrentPageContext from "../../contexts/NavContext.jsx";
import Navbar from "../Navbar.jsx";
import Home from "./Home.jsx";
import Destination from "./Destination.jsx";

export default function CurrentPage() {
    const { currentPage } = useContext(CurrentPageContext);

    const getPageBackground = () => {
        switch (currentPage) {
            case "00":
                return "bg-home";
                
            case "01":
                return "bg-destination";

            default:
                return "bg-home";
        }
    };

    const getPageComponent = () => {
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
        <div className={`bg ${getPageBackground()}`}>
            <Navbar />
            {getPageComponent()}
        </div>
    );
}