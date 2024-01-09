import { useContext } from "react";
import CurrentPageContext from "../contexts/NavContext.jsx";
import Home from "./pages/Home.jsx";

export default function CurrentPage() {
    const { currentPage } = useContext(CurrentPageContext);

    return (
        <>
            {currentPage === "00" ?
                <Home />
                : null
            }
        </>
    )
}
