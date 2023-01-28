import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Grid } from "@mui/material";
import { useHistory } from "react-router";
import AuthBackground from "../../assets/images/auth/AuthBackground";

const Menu: React.FC = () => {
  const history = useHistory();

  const handleClick = (link: string) => {
    history.push(link);
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Grid item={true} xs={12}>
            <AuthBackground></AuthBackground>
            <Grid xs={12} item={true} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => handleClick("/home")}>Home</a>
                </IonLabel>
              </IonItem>
            </Grid>
            <Grid item={true} xs={12} container>
              <IonItem>
                <IonLabel>
                  {" "}
                  <a onClick={() => handleClick("/account")}>Account</a>
                </IonLabel>
              </IonItem>
            </Grid>
          </Grid>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Menu;
