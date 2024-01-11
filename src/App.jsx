import {NavContextProvider, NavContextConsumer} from "./contexts/NavContext.jsx";
import Navbar from "./components/Navbar.jsx";
import CurrentPage from "./components/pages/CurrentPage.jsx";

export default function App() {
    return (
        <NavContextProvider>
            <NavContextConsumer>
                {() => {
                    return (
                        <>
                            <Navbar />
                            <CurrentPage />
                        </>
                    )
                }}
            </NavContextConsumer>
        </NavContextProvider>
    )
}
