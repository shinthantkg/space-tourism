import Navbar from "../Navbar.jsx";
import css from "../../styles/_home.module.scss";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className={`${css["home"]} flex flex-fd-c-tm flex-jc-sb flex-ai-c-tm`}>
                <div className={`${css["intro"]} flex flex-fd-c flex-ai-c-tm`}>
                    <h1 className={`${css["intro__heading"]}`}>
                        <span className={`${css["intro__heading--span"]}`}>So, you want to travel to</span>Space
                    </h1>
                    <p className={`${css["intro__body"]}`}>
                        Let&apos;s face it; if you want to go to space, you might as well genuinely go to outer space
                        and not hover kind of on the edge of it. Well site back, and relax because we&apos;ll give you a
                        truly out of this world experience!
                    </p>
                </div>
                <div className={`${css["home__explore-btn-border"]} flex flex-jc-c`}>
                    <button className={`${css["home__explore-btn"]} flex flex-jc-c flex-ai-c`}>Explore</button>
                </div>
            </main>
        </>
    );
}
