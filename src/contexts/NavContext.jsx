import { createContext, useState } from "react";
import PropTypes from "prop-types";

const NavContext = createContext();
export default NavContext;

export function NavContextProvider({ children }) {
    const [currentPage, setCurrentPage] = useState("00");
    const [mobileNavActive, setMobileNavActive] = useState(false);
    const value = {currentPage, setCurrentPage, mobileNavActive, setMobileNavActive};

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

NavContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const NavContextConsumer = NavContext.Consumer;
