import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Searchbar from "../../components/client/Searchbar/Searchbar";
import MainMenu from "../../components/shared/Header/MainMenu/MainMenu";
import { ReactComponent as Spinner } from "../../assets/icons/spin.svg";

import api from "../../services/api";

import { getIcon, currentLocation } from "../../components/shared/Pin/getIcon";
import Place from "../../components/shared/Place/Place";
import styles from "./Home.module.scss";
import useClickedOutside2 from "../../hooks/useClickedOutside2";

const Home = () => {
  const [position, setPosition] = useState(null);
  const [isGeoLocAllowed, setIsGeoLocAllowed] = useState(true);
  const [locations, setLocations] = useState([]);

  navigator.permissions.query({ name: "geolocation" }).then(function (result) {
    // Will return ['granted', 'prompt', 'denied']
    result.state === "granted" || result.state === "prompt"
      ? setIsGeoLocAllowed(true)
      : setIsGeoLocAllowed(false);
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoloc) =>
      setPosition([geoloc.coords.latitude, geoloc.coords.longitude])
    );
  }, []);
  useEffect(() => {
    // get and display locations
    api
      .get(`events`)
      .then((res) => {
        setLocations(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isShown, setIsShown] = useState(false);
  const { target2, button2, isShown2, setIsShown2 } = useClickedOutside2();
  const [placeData, setPlaceData] = useState({});

  return (
    <>
      {isGeoLocAllowed && position && (
        <div className={styles.Home}>
          <main className={styles.mainContent}>
            <Searchbar />

            <MapContainer className={styles.map} center={position} zoom={13}>
              <TileLayer
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
                url="https://api.mapbox.com/styles/v1/louislecout/ckzwfj8rc00a414jydquyrqpv/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG91aXNsZWNvdXQiLCJhIjoiY2t6d2ZubTEzMmoxNTJ3cGU5eGJ5amg4eiJ9.Av7gubKDgQ_33XWfC5nUHQ"
              />

              <Marker
                position={position}
                icon={currentLocation("user")}
              ></Marker>

              {/* Display Locations */}

              {locations.map((data) => (
                <Marker
                  ref={button2}
                  key={data.id}
                  position={[data.longitude, data.latitude]}
                  icon={getIcon("theater")}
                  eventHandlers={{
                    click: () => {
                      if (!isShown) {
                        setPlaceData(data);
                      }
                      setIsShown2(!isShown2);
                    },
                  }}
                >
                  {/* <Popup>
                  {data.name}
                </Popup> */}
                </Marker>
              ))}
            </MapContainer>
            {isShown2 && (
              <div className={styles.background}>
                <div className={styles.containerPlace} ref={target2}>
                  <Place data={placeData} />
                </div>
              </div>
            )}
          </main>
          <MainMenu />
        </div>
      )}

      {isGeoLocAllowed && !position && (
        <div className={styles.message}>
          <Spinner className={styles.spinner} />
        </div>
      )}
      {!isGeoLocAllowed && (
        <div className={styles.message}>
          MyTravelBuddy a besoin d'accéder à votre position pour fonctionner
        </div>
      )}
    </>
  );
};

export default Home;
