import { Button, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import AnimateButton from '../../components/@extended/AnimateButton';

const Field = () => {
    return (
        <>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <Typography variant="h2">Recherches avances</Typography>
                </Grid>
                <Grid item />
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3} md={3}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="firstname-signup">Mot cle</InputLabel>
                        <OutlinedInput id="firstname-login" type="firstname" name="firstname" placeholder="John" fullWidth />
                    </Stack>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="lastname-signup">Date</InputLabel>
                        <OutlinedInput fullWidth id="lastname-signup" type="date" name="email" placeholder="Doe" inputProps={{}} />
                    </Stack>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="lastname-signup">Categorie</InputLabel>
                        <OutlinedInput fullWidth id="lastname-signup" type="email" name="email" placeholder="Doe" inputProps={{}} />
                    </Stack>
                </Grid>
                <Grid item xs={3} md={3}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="lastname-signup">Prix</InputLabel>
                        <OutlinedInput fullWidth id="lastname-signup" type="number" name="number" placeholder="Doe" inputProps={{}} />
                    </Stack>
                </Grid>

                <Grid item xs={3} md={3}>
                    <Stack spacing={1}>
                        <InputLabel htmlFor="lastname-signup">Statu</InputLabel>
                        <OutlinedInput fullWidth id="lastname-signup" type="email" name="text" placeholder="Doe" />
                    </Stack>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={3} md={3}></Grid>
                    <Grid item xs={3}>
                        <AnimateButton>
                            <Button fullWidth size="large" type="submit" variant="contained" color="primary">
                                Search
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Field;
