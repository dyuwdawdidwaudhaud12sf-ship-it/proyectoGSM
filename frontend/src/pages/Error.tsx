import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom'
import { Box, Tooltip, Typography } from '@mui/material'

function Error() {
    const error = useRouteError()

    const titulo = isRouteErrorResponse(error)
        ? `${error.status} · ${error.statusText}`
        : 'Error'

    const detalle = isRouteErrorResponse(error)
        ? (error.data || 'Ha ocurrido un error al cargar esta vista.')
        : 'Comprueba la URL o vuelve al login.'

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', placeItems: 'center', justifyContent: "center", textAlign: 'center', p: 3 }}>
            <div>
                <Typography variant="h3" gutterBottom>{titulo}</Typography>
                <Typography sx={{ mb: 3 }}>{String(detalle)}</Typography>
                <Tooltip title="Volver a la página de inicio de sesión" placement="bottom" arrow>
                    <Link to="/">Volver a login</Link>
                </Tooltip>
            </div>
        </Box>
    )
}


export default Error


