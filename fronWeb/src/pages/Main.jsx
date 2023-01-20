import { Box, Grid } from '@mui/material';
import MainCard from '../components/MainCard';
import Listes from './Home/ListesWithoutLogin';

const Main = () => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8}>
                <MainCard sx={{ mt: 3 }}>
                    <Listes />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default Main;
