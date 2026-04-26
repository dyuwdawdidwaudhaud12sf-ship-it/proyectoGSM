import Container from '@mui/material/Container';
import Menu from '../components/Menu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import type { RootState } from '../Store';
import Informes from '../components/InformeColeccion';
import Tooltip from '@mui/material/Tooltip';


function Reports() {

    const navigate = useNavigate()

    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)

    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if (!isLoggedin) {
            navigate('/')
        }
    }, [isLoggedin, navigate])


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


    const [Informe, setInforme] = useState(false);

    const click = () => {
        setInforme(true);
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Menu />
            <Tooltip title="Generar Informe sobre Colección" placement="right" arrow>
            <Button variant="contained" color="primary" onClick={click} sx={{ width: 300 }}>Informe Colección</Button>
            </Tooltip>
            <Divider sx={{ width: 1920, mt: 3, borderBottomWidth: 10 }} />
            {Informe && <Informes tableData={tableData} />}
        </Container>
    );
}
export default Reports
