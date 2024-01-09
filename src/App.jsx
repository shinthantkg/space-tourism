import {NavContextProvider, NavContextConsumer} from "./contexts/NavContext.jsx";
import CurrentPage from "./components/CurrentPage.jsx";

export default function App() {
    return (
        <NavContextProvider>
            <NavContextConsumer>
                {() => {
                    return <CurrentPage />
                }}
            </NavContextConsumer>
        </NavContextProvider>
    )
}
