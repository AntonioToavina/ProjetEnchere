import { Grid, ListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import MainCard from '../../components/MainCard';
import MainLayout from '../../layout/MainLayout';
import Field from './Field';

const Listes = () => {
    const header = ['IdEnchere', 'Produit', 'Categorie', 'Status', 'Montant actuel'];
    const value = [{ id: 1, prod: 'vdv', categorie: 'sccc', status: 'vscd', montant: 2000 }];
    return (
        <Grid container>
            <Grid xs={2}></Grid>
            <Grid xs={8}>
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
    );
};

export default Listes;
