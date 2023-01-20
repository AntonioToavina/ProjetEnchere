import { IonPage } from "@ionic/react";
import { Box, Grid } from "@mui/material";
import AuthBackground from "../../assets/images/auth/AuthBackground";
import Logo from "../../components/Logo/Logo";
import MainCard from "../../components/MainCard";
import Menu from "../Menu/Menu";
import FieldNewEnchere from "./FieldNewEnchere";

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage id="main-content">
        <Grid item xs={12}>
          <AuthBackground></AuthBackground>
          <Grid xs={12} container justifyContent="center" alignItems="center">
            <Grid item>
              <MainCard
                sx={{
                  maxWidth: { xs: 400, lg: 475 },
                  margin: { xs: 2.5, md: 3 },
                  "& > *": {
                    flexGrow: 1,
                    flexBasis: "50%",
                  },
                }}
                border={undefined}
                boxShadow={undefined}
                content={undefined}
                contentSX={undefined}
                darkTitle={undefined}
                divider={undefined}
                elevation={undefined}
                secondary={undefined}
                shadow={undefined}
                title={undefined}
                codeHighlight={undefined}
                others={undefined}
              >
                <Box sx={{ p: { xs: 2, sm: 3, md: 4, xl: 5 } }}>
                  <FieldNewEnchere />
                </Box>
              </MainCard>
            </Grid>
          </Grid>
        </Grid>
      </IonPage>
    </>
  );
};

export default Home;
