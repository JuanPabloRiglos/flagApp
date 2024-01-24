
import { Divider, Modal, Box, Typography, Rating} from '@mui/material';
import { useEffect, useState } from 'react';
import { useResult } from '../hooks/useResult';
import {ModalEndGame} from './ModalEndGame'
import '../styles/aside.css'

export  function AsideHandlerInfo() {
  const { totalPoints, wrongAnswer}= useResult()
  const [lives, setLives] = useState<number>(5);
  const [level, setLevel]= useState<number>(1)
  

      //manejo modal informativo
      const [openModal, setOpenModal] = useState<boolean>(false);
      const handleModal = () => setOpenModal(openModal => ! openModal);

  useEffect(()=>{
    const setLive= (wrongAnswer:number)=> {
      if(wrongAnswer == 0){ setLives(5)}else if(lives == 0){
setOpenModal(true)}
      else{
        const restLives = lives - 1
        setLives(restLives)
      }
    }
    setLive(wrongAnswer)
  },[wrongAnswer]);

  useEffect(()=>{
    const levelsWatcher= ()=>{
      if(totalPoints >= 100 && totalPoints < 200){
        setLevel(6)
        setOpenModal(true)    
    } 
      if(totalPoints >= 200 && totalPoints < 300) setLevel(3)
      if(totalPoints >= 300 && totalPoints < 400) setLevel(4)
      if(totalPoints >= 400 && totalPoints < 500) setLevel(5)
      if(totalPoints >= 500) {
        setLevel(6)
        setOpenModal(true)    
    }}

    levelsWatcher()
 
  },[totalPoints])

  return ( <>
    <Modal
    keepMounted
    open={openModal}
    onClose={handleModal}
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
>
    <ModalEndGame level={level}/>
</Modal>
<aside > 
<h3 >Level : {level}</h3>
<Divider/>

<Box id='asideUntilLarge'
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"> Lives </Typography>
      <Rating
        name="simple-controlled"
        value={lives}
      
      />
        
    </Box>

<Box id='asideLarge'
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"> Lives </Typography>
      <Rating
        name="simple-controlled"
        value={lives}
        sx={{ margin:'25%', display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center'}} 
      />
        
    </Box>

</aside>
</>
)}