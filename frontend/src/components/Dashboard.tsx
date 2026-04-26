import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Tooltip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import type { RootState } from "../Store";

interface itemtype {
    id?: number
    nombre: string
    marca: string
    tipo: string
    precio: number
}

function DashBoard() {

    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)

    const dispatch = useDispatch()

    const esadmin = userData.userRol == 'admin'

    const variables: itemtype = {
        nombre: '',
        marca: '',
        tipo: '',
        precio: 0
    }

    const [item, setItem] = useState(variables)

    const cambios = (e: any) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value,
        });
    }


    async function EnviarAlaDatabase() {
        fetch(`http://localhost:3030/insertar?nombre=${item.nombre}&marca=${item.marca}&tipo=${item.tipo}&precio=${item.precio}`)
            .then(response => response.json())
            .then(() => {
                ObtenerdelaDatabase();
            })
    }

    const enviarBD = (e: any) => {
        e.preventDefault();
        console.log(item);
        EnviarAlaDatabase()
        setItem({
            nombre: '',
            marca: '',
            tipo: '',
            precio: 0
        })
    }

    const [tableData, setTableData] = useState([])

    async function ObtenerdelaDatabase() {
        fetch(`http://localhost:3030/obtener`)
            .then(response => response.json())
            .then(tableData => {
                setTableData(tableData.data);
            })

    }

    useEffect(() => {
        ObtenerdelaDatabase();
    }, []);


    async function EliminardelaDatabase(row: itemtype) {
        fetch(`http://localhost:3030/eliminar?id=${row.id}`)
            .then(response => response.json())
            .then(() => {
                ObtenerdelaDatabase();
            })
    }


    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <form onSubmit={enviarBD}>
                    <Grid container sx={{ width: 1920, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                        <Grid sx={{ width: 480 }}>
                            <TextField label="Nombre" name="nombre" value={item.nombre} onChange={cambios} required fullWidth />
                        </Grid>
                        <Grid sx={{ width: 480 }}>
                            <TextField label="Marca" name="marca" value={item.marca} onChange={cambios} required fullWidth />
                        </Grid>

                        <Grid sx={{ width: 480 }}>
                            <TextField label="Tipo" name="tipo" value={item.tipo} onChange={cambios} required fullWidth />
                        </Grid>
                        <Grid sx={{ width: 480, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <TextField label="Precio" name="precio" type="number" value={item.precio} onChange={cambios} required fullWidth />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Tooltip title="Insertar nuevos datos en la base de datos" placement="right" arrow>
                            <Button type="submit" variant="outlined" color="primary" sx={{ width: 300 }}>+ Insertar Datos</Button>
                        </Tooltip>
                    </Grid>
                </form>

                <Divider sx={{ width: 1920, mb: 2 }} />

                <TableContainer sx={{ width: 1920 }} >
                    <Table sx={{ width: 1920 }}>
                        <TableHead>
                            <TableRow>
                                {esadmin && (<TableCell color="textPrimary" sx={{ textAlign: 'center', width: 430, fontSize: 35, background: 'Black' }}>Eliminar</TableCell>)}
                                <TableCell color="textPrimary" sx={{ textAlign: 'center', width: 384, fontSize: 35, background: 'Black' }}>Nombre</TableCell>
                                <TableCell color="textPrimary" sx={{ textAlign: 'center', width: 384, fontSize: 35, background: 'Black' }}>Marca</TableCell>
                                <TableCell color="textPrimary" sx={{ textAlign: 'center', width: 300, fontSize: 35, background: 'Black' }}>Tipo</TableCell>
                                <TableCell color="textPrimary" sx={{ textAlign: 'center', width: 430, fontSize: 35, background: 'Black' }}>Precio</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((row: itemtype) => (
                                <TableRow key={row.id}>
                                    {esadmin &&
                                        (<TableCell sx={{ flexGrow: 1, textAlign: 'center', width: 430, fontSize: 35 }}>
                                            <Tooltip title="Eliminar este elemento de la base de datos" placement="right" arrow>
                                                <Button onClick={() => EliminardelaDatabase(row)}><DeleteForeverIcon /></Button>
                                            </Tooltip>
                                        </TableCell>
                                        )}
                                    <TableCell color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', width: 384, fontSize: 35 }}>{row.nombre}</TableCell>
                                    <TableCell color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', width: 384, fontSize: 35 }}>{row.marca}</TableCell>
                                    <TableCell color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', width: 300, fontSize: 35 }}>{row.tipo}</TableCell>
                                    <TableCell color="textPrimary" sx={{ flexGrow: 1, textAlign: 'center', width: 430, fontSize: 35 }}>{row.precio}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container >
        </>
    );
}
export default DashBoard



