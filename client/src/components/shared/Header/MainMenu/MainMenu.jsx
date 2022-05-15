import { useState} from "react";
import styles from "./MainMenu.module.scss";
import ScrollContainer from "react-indiana-drag-scroll";


import axios from "axios";
import { set } from "react-hook-form";

const MainMenu = (props) => {
  
  const [isShown, setIsShown] = useState(false);

  props.reponse(isShown)

  



  return (
    
    <div className={styles.Menu}>
      
      <div className={styles.MenuTitle}>
        <h3>
          En ce moment à <span className="underline">Lille</span>
        </h3>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche} onClick={() => setIsShown(!isShown)} ></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>

              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
      <div className={styles.trend}>
        <div className={styles.SectionTitle}>
          <h4>Tendances</h4>
        </div>
        <div className={styles.BorderScroll}>
          <ScrollContainer className="scroll-container">
            <div className={styles.TendancesAffiche}>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
              <div className={styles.Affiche}>
                <div className={styles.formeAffiche}></div>
              </div>
            </div>
          </ScrollContainer>
        </div>
      </div>
    </div>
    
  );
};

export default MainMenu;
