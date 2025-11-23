import { useSelector } from 'react-redux'
import type { RootState } from '../Store/index';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Menu from '../components/Menu';
import { useEffect } from 'react';
import DashBoard from '../components/Dashboard';
function home() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userData = useSelector((state: RootState) => state.authenticator)
    console.log(userData)

    const isLoggedin = userData.isAutenticated
    useEffect(() => {
        if (!isLoggedin) {
            navigate('/')
        }
    }, [isLoggedin, navigate])


    return (
        <>
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Menu />
                <DashBoard/>
            </Container>
        </>
    );
}
export default home