import styles from "./Affiche.module.scss";

const Affiche = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.imgpresentation}></div>
                <div className={styles.titleAffiche}>
                    <div className={styles.seperatation}>
                    <h1 className={styles.expotitle}>50 NUANCES DE BLEU</h1>
                    <h2 className={styles.place}>Palais des Beaux-Arts de Lille</h2>
                    </div>
                    <h2 className={styles.date}>Du 23 Mai au 15 Juillet</h2>
                </div>
            </div>
            <div className={styles.description}>
                <h2 className={styles.title}>Description de l'evenement</h2>
                <span className={styles.textdesc}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et ex massa. Etiam condimentum aliquam nisl, eu tincidunt arcu condimentum vitae. Phasellus ut do
                    lor sit amet augue egestas ornare. Donec tincidunt maximus augue, vel iaculis nisi eleifend id. Nulla dapibus odio dolo
                    r. Integer auctor et nibh nec ultricies. Morbi tristique, orci nec condimentum vestibulum, neque nisi elementum massa, 
                    sit amet egestas lorem libero at mi. Morbi a mauris nec eros tincidunt gravida. Curabitur iaculis pretium neque, ac
                     luctus lacus dictum quis. Suspendisse eget massa nec tellus molestie molestie. Proin sed ipsum nulla. Interdum et m
                     alesuada fames ac ante ipsum primis in faucibus. Aliquam nunc massa, aliquam non mattis et, suscipit ut nibh. P
                     ellentesque et sem pellentesque, bibendum mi at, sollicitudin ligula. Curabitur sit amet elit sed lacus 
                     consectetur fringilla. Nullam malesuada elit eu lectus rhoncus, a porttitor orci tempus. Duis eget e
                     st sit amet risus rhoncus suscipit. Nam ac sodales libero, id semper mauris. Etiam et ipsum non
                      erat accumsan ultricies. Aliquam scelerisque tincidunt ante quis rhoncus. Sed viverra purus sit amet vulputate 
                      hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</span>
            </div>
            <div className={styles.price}>
                <h2 className={styles.title}>Tarifs</h2>
                <ul>
                    <li><u>Adulte (+14ans) :</u> 5€</li>
                    <li><u>Enfant :</u> 2€ </li>
                    <li><u>Etudiant :</u> Gratuit</li>

                </ul>
                </div>



            <h2 className={styles.title}>Lieu</h2>
            <div className={styles.Lieu}>
                <div className={styles.informations}>
                    <ul>
                <li><span className={styles.lieutitle}><u>Telephone :</u> 03 20 04 05 05</span></li>
                <li><span className={styles.lieutitle}><u>Adresse :</u> Rue du Palais des Beaux-Arts, 59000 Lille</span></li>
                <li><span className={styles.lieutitle}><u>Horaires :</u> Du lundi au vendredi de 10h à 18h et le samedi de 10h à 18h</span></li>
                </ul>
                </div>
                <div className={styles.knowMore}>
                <div className={styles.button}>
                    <button>
                            <span className={styles.buttontitle}>En savoir plus</span>
                    </button>
                </div>
                </div>
                </div>
        </div>

    
    
    
    );
};

export default Affiche;