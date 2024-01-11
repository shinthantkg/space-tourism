import { useState, useEffect } from "react";
import data from "../../data/data.json";
import css from "../../styles/_destination.module.scss";
import moon from "../../images/destination/image-moon.webp";
import mars from "../../images/destination/image-mars.webp";
import europa from "../../images/destination/image-europa.webp";
import titan from "../../images/destination/image-titan.webp";
=======

export default function Destination() {
  const destinationsData = data.destinations;
  const [currentDestination, setCurrentDestination] = useState(0);
  const [currentData, setCurrentData] = useState(destinationsData[currentDestination]);
  const images = [moon, mars, europa, titan];

  useEffect(() => {
    setCurrentData(destinationsData[currentDestination]);
  }, [currentDestination, destinationsData]);

  useEffect(() => {
    document.body.classList = "bg bg-destination";

    return () => {
      document.body.classList = "";
    };
  }, []);

  return (
    <main className={`${css["destination"]} flex flex-fd-rr flex-jc-c`}>
      <div className={`${css["destination-info"]}`}>
        <ul className={`${css["destination-list"]} flex`}>
          {destinationsData.map(destination => {
            return <li key={destination.id} className={`${css["destination-list__item"]} ${currentDestination === destination.id ? css["destination-list__item--active"] : ""}`} onClick={() => setCurrentDestination(destination.id)}>{destination.name}</li>
          })}
        </ul>
        <h1 className={`${css["destination-info__name"]}`}>{currentData.name}</h1>
        <p className={`${css["destination-info__desc"]}`}>{currentData.description}</p>
        <hr className={`${css["destination-info__divider"]}`} />
        <div className={`${css["destination-travel-info"]} flex`}>
          <div>
            <h3 className={`${css["destination-travel-info__name"]}`}>Avg. distance</h3>
            <span className={`${css["destination-travel-info__data"]}`}>{currentData.distance}</span>
          </div>
          <div>
            <h3 className={`${css["destination-travel-info__name"]}`}>Est. travel time</h3>
            <span className={`${css["destination-travel-info__data"]}`}>{currentData.travel}</span>
          </div>
        </div>
      </div>
      <div>
        <h2 className={`${css["destination__selection-label"]}`}><span className={`${css["destination__selection-label--index"]}`}>01</span> Pick your destination</h2>
        <img src={images[currentDestination]} alt={currentData.alt} />
        <img src={currentData.image} alt={currentData.alt} />
      </div>
    </main>
  );
}