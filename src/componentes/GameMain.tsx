import {Card, CardContent, CardMedia, Typography, CardActionArea, List, ListItem, ListItemButton, ListItemText, Alert , Fab, Modal, Avatar } from '@mui/material';

import { question } from '../types';
import { storeQuestions } from '../store/storeQuestions'
import { StartComponent } from './StartComponent';

import { useState } from 'react';

import { ModalInfo } from './ModalInfo';
import {AsideHandlerInfo} from './AsideHandlerInfo' 
import sheldon from '../assets/img/sheldon-primerplano-3.jpg'

//ts config
interface propsGame{
    questions : question
}

export function GameMain ({questions}: propsGame){


    //manejo modal informativo
    const [openModal, setOpenModal] = useState<boolean>(false);
    const handleModal = () => setOpenModal(openModal => ! openModal);


    const [gameInit, setGameInit]= useState <boolean>(false)
    const selecAnswer = storeQuestions(state => state.selecAnswer)

    const handlerSelectAnswer = (item : string)=>{
    selecAnswer(questions.principal.name.common, item)
    setGameInit(true)

    }

const getBackgroundColors =( selected : string)=>{
    const {corretAnswer , userSelecAnswer } = questions
    //si el usuario aun no selecciono, que s epinte el li sin color
    if(!userSelecAnswer)return 'transparent'
    //si eligio mal, las no seleccionadas que no son correctas quedan sin color
    if(corretAnswer != selected && selected != userSelecAnswer)return 'transparent'
    //si eligio bien 
    if(corretAnswer == selected) return 'green'
    //si eligio mal 
    if( corretAnswer != selected && selected == userSelecAnswer) return 'red'

    return 'transparen'
}

    return(
        <>
    <Modal
        keepMounted
        open={openModal}
        onClose={handleModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
    >
        <ModalInfo principal={questions.principal}/>
    </Modal>
    <AsideHandlerInfo/>
        {/* manejo del modal  */}
        <Card sx={{ maxWidth: {xs:500,md:800} , margin:'auto', marginTop:'2vh' }}  style={{maxWidth: '64%', margin:'auto' }}> <Typography gutterBottom variant="h5" component="div" sx={{bgColor:'#202020', marginLeft:'10%', paddingTop:'1%'}}>
            What country does it correspond to?
            </Typography>
        <CardActionArea sx={{display:{md:'flex'}}}>
        <CardMedia
            component="img"
            image={questions.principal.flags.png}
            alt='flag of the principal country to the level'
            sx={{width:'50%', height:'50%', bgcolor: 'background.paper',
            m: 1,border: 2,  borderRadius: '16px'}}
            style={{marginLeft: '3%', marginBlock:'3%'}}
        />
        <CardContent>
        <List sx={{bgColor:'#202020'}}  >
            {questions.names.map((item, i )=> {
                return (
                    
                    <ListItem key={i} >
                    <ListItemButton onClick={()=>handlerSelectAnswer(item)} sx={{backgroundColor: getBackgroundColors(item),  borderRadius: '16px'}} disabled={questions.userSelecAnswer != null}>
                        <ListItemText sx={{borderBottom:'1px solid #333'}}>
                            {item}
                        </ListItemText>
                
                    </ListItemButton>
                { item == questions.corretAnswer && questions.userSelecAnswer &&  <Fab color="primary" aria-label="add" onClick={()=>handleModal()}>
                        <Avatar sx={{ width: 56, height: 56 }} src={sheldon} alt="Sheldon cooper img" />
                    </Fab>}
            </ListItem>
                )
            })}
        </List>
        </CardContent>
        </CardActionArea>
    </Card>
            {gameInit && questions.userSelecAnswer ? <StartComponent questions={questions}/> :( 
            <Alert severity="info"> You most select an option</Alert>)}
    </>
    )
}