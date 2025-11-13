import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

function Error() {
    const error = useRouteError()

    const titulo = isRouteErrorResponse(error)
        ? `${error.status} · ${error.statusText}`
        : 'Error'

    const detalle = isRouteErrorResponse(error)
        ? (error.data || 'Ha ocurrido un error al cargar esta vista.')
        : 'Comprueba la URL o vuelve al login.'

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', placeItems: 'center', justifyContent: "center" , textAlign: 'center', p: 3 }}>
            <div>
                <Typography variant="h3" gutterBottom>{titulo}</Typography>
                <Typography sx={{ mb: 3 }}>{String(detalle)}</Typography>
                <Link to="/">Volver a login</Link>
            </div>
        </Box>
    )
}


export default Error


