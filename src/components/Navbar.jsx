import { useContext } from "react";
import CurrentPageContext from "../contexts/NavContext.jsx";
import css from "../styles/_navbar.module.scss";
import logo from "../images/shared/logo.svg";
import hamburgerIcon from "../images/shared/icon-hamburger.svg";
import closeIcon from "../images/shared/icon-close.svg";

export default function Navbar() {
    const { currentPage, setCurrentPage, mobileNavActive, setMobileNavActive } = useContext(CurrentPageContext);

    const navLinks = [
        { index: "00", name: "Home" },
        { index: "01", name: "Destination" },
        { index: "02", name: "Crew" },
        { index: "03", name: "Technology" },
    ]

    return (
        <>
            <header className={`${css["header--desktop"]} hidden-mobile`}>
                <nav className={`${css["navbar--desktop"]} flex flex-jc-sb flex-ai-c`}>
                    <img className={css["navbar__logo"]} src={logo} alt="Shin's Space Tourism Logo" onClick={() => setCurrentPage("00")} />
                    <div className={`hidden-mobile flex`}>
                        <div className={`${css["navbar--desktop__line"]}`}></div>
                        <ul className={`${css["navbar--desktop__links"]} flex flex-jc-c flex-ai-c`}>
                            {navLinks.map(link => {
                                return (
                                    <li key={link.index} className={`${css["navbar--desktop__item"]}`}>
                                        <button
                                            className={`${css["navbar--desktop__link"]} ${currentPage === link.index ? css["navbar--desktop__link--active"] : ""}`}
                                            onClick={() => setCurrentPage(link.index)}>
                                        <span
                                            className={`${css["navbar--desktop__link--index"]}`}>{link.index}</span> {link.name}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button className={`${css["navbar--mobile__nav-btn"]} visible-mobile`}
                            onClick={() => setMobileNavActive(prevState => !prevState)}>
                        <img src={!mobileNavActive ? hamburgerIcon : closeIcon} alt="Navigation Menu Icon"/>
                    </button>
                </nav>
            </header>
            <header className={`visible-mobile`}>
                <nav className={`${css["navbar--mobile"]}`} data-visible={mobileNavActive ? "true" : "false"}>
                    <ul className={`${css["navbar--mobile__links"]}`}>
                        {navLinks.map(link => {
                            return (
                                <li key={link.index} className={`${css["navbar--mobile__item"]}`}>
                                    <button
                                        className={`${css["navbar--mobile__link"]} flex`}
                                        onClick={() => setCurrentPage(link.index)}>
                                        <span
                                            className={`${css["navbar--mobile__link--index"]}`}>{link.index}</span> {link.name}
                                        <div className={currentPage === link.index ? css["navbar--mobile__link--active"] : "hidden"}></div>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className={` ${css["navbar--mobile__btns"]} flex flex-jc-sb flex-ai-c`}>
                    <img className={css["navbar__logo"]} src={logo} alt="Shin's Space Tourism Logo" onClick={() => setCurrentPage("00")} />
                    <button className={`${css["navbar--mobile__hamburger-btn"]} visible-mobile`}
                            onClick={() => setMobileNavActive(prevState => !prevState)}>
                        <img src={!mobileNavActive ? hamburgerIcon : closeIcon} alt="Navigation Menu Icon"/>
                    </button>
                </div>
            </header>
        </>
    )
}
