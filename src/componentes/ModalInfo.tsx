import { Box,Typography } from '@mui/material';
import { country } from "../types"

interface modalProps{
    principal : country
}


// mui cofig
const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalInfo= ({principal}:modalProps)=> {
    return(

    <Box sx={style}>
        <h2> Curious fact :</h2>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            <h5>{`Conocido tambien como ${principal.name.official}`} </h5>
        </Typography>
        
            <article>
            {`Es un pais ubicado en ${principal.continents}, cuya capital es ${principal.capital}. Tiene una poblacion de ${principal.population} personas. Entre sus paises limitrofes encontramos a  ${principal.borders}.
            ` }
            </article>
        <h6>Ver en el mapa</h6>
        <a href={`${principal.maps.googleMaps}`} target='_blank'>{`${principal.name.common}`}</a>
        </Box>
        )
}