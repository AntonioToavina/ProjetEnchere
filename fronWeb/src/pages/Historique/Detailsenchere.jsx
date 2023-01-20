import { Grid, ListItem, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';

const DetailsEnchere = () => {
    return (
        <>
            <Grid container>
                <Grid xs={2}>
                    <MainLayout />
                </Grid>
                <Grid xs={8}>
                    <Field />
                    <br />

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h2">Listes encheres</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>

                    <Grid xs={12}>
                        <ListItem>
                            <Table
                                aria-labelledby="tableTitle"
                                sx={{
                                    '& .MuiTableCell-root:first-child': {
                                        pl: 2
                                    },
                                    '& .MuiTableCell-root:last-child': {
                                        pr: 3
                                    }
                                }}
                            >
                                <TableHead>
                                    <TableRow>
                                        {header.map((e, index) => (
                                            <TableCell key={index}>{e}</TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {value.map((row, index) => (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            tabIndex={-1}
                                            key={index}
                                        >
                                            <TableCell component="th" scope="row" align="left">
                                                <Link color="secondary" component={Link} to="">
                                                    {row.id}
                                                </Link>
                                            </TableCell>
                                            <TableCell align="left">{row.prod}</TableCell>
                                            <TableCell align="right">{row.categorie}</TableCell>
                                            <TableCell align="left">{row.status}</TableCell>
                                            <TableCell align="right">{row.montant}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </ListItem>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default DetailsEnchere;
