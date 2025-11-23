import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Menu from '../components/Menu';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


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
    
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Menu />
            <Typography variant="h1">pagina reports de gabriel</Typography>
        </Container>
    );
}
export default Reports
