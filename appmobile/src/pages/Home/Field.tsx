import {
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import AnimateButton from "../../components/@extended/AnimateButton";

const Field: React.FC = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Creation enchere</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Titre</InputLabel>
            <OutlinedInput id="firstname-login" type="textarea" fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="firstname-signup">Description</InputLabel>
            <OutlinedInput id="firstname-login" type="textarea" fullWidth />
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Categorie</InputLabel>
            <OutlinedInput fullWidth id="lastname-signup" type="date" />
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Prix mise Enchere</InputLabel>
            <OutlinedInput fullWidth id="lastname-signup" type="" />
          </Stack>
        </Grid>
        <Grid item xs={6} md={1}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lastname-signup">Duree</InputLabel>
            <OutlinedInput
              fullWidth
              id="lastname-signup"
              type="number"
              name="number"
              placeholder="Doe"
              inputProps={{}}
            />
          </Stack>
        </Grid>

        <Grid item xs={6}>
          <AnimateButton type={undefined}>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </AnimateButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Field;
