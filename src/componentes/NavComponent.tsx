import {AppBar, Container, Stack, Toolbar, Typography, IconButton} from '@mui/material';

// import { Container,  Stack } from '@mui/material'
import { PlayerHandlerInfo } from './PlayerHandlerInfo';
export function NavComponent(){

    return(
        
        <AppBar position="static"  style={{maxWidth: '95%', margin:'auto' }} sx={{ borderRadius:'16px', marginBottom:'1%', 
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800]}}>
            <Container maxWidth="xl" >

        <Toolbar sx={{ display:'flex', flexDirection:{xs:'column', md:'row'}, justifyContent:'space-around '}}>
            <Stack sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Typography variant="h6" >
            <h2>Fun With Flags</h2>
            </Typography>  
            <IconButton
            >
                <img src="https://cdn-icons-png.freepik.com/512/2164/2164733.png?filename=finish_2164733.png&fd=1" style={{width:'68px', height:'68px', paddingBottom:'10px'}} alt="flag Icon" />
            </IconButton>
            </Stack>
        <PlayerHandlerInfo />
        </Toolbar>
        </Container>
        </AppBar>

//         <Container maxWidth='md'>
//         <Stack direction="row" gap={2} alignItems='center' justifyContent='center'>
    
//         
    
//         <img src="https://cdn-icons-png.freepik.com/512/2164/2164733.png?filename=finish_2164733.png&fd=1" style={{width:'68px', height:'68px', paddingBottom:'10px'}} alt="flag Icon" />
//     </Stack>
//     </Container>
    )
}



