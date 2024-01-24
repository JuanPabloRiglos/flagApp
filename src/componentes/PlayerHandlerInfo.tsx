import {Box, TextField, Button} from '@mui/material';
  import { useState } from 'react';
  import  {storePoints}  from '../store/storePoints';
  import { useResult } from '../hooks/useResult';
  import { record } from '../types';

    
export function PlayerHandlerInfo (){
  //estados
  const [user, setUser]= useState<record>({name:'', points:0})
  const actualGame = storePoints(state=> state.actualGame )
  const setActualGame = storePoints(state=> state.setActualGame )
  const {totalPoints} = useResult()

  //logica de manejo del dom.
  const inputDataHanlder = (event:React.ChangeEvent<HTMLInputElement> )=>{
    event.preventDefault()
    setUser({name : event.target.value, points:0})
  }
  //utilizo el evento del dom, para que la funcion se dispare con la tecla enter. 
  const savedUser = ()=>{
    window.addEventListener('keydown', (event)=>{
      if(event.keyCode == 13){
        setActualGame(user)}
      })
  }
//seteo a estado inicial
    const setNewUser = ( ) =>{
      setActualGame({name:'', points:0})
      setUser({name:'', points:0})
        }
  
    

    return( <>
      {actualGame.name?
      <Box style={{ width: 450, maxWidth:'100%', marginBottom:'12px'}} sx={{marginLeft:'5%',display:'flex', justifyContent:'space-between'}}>
        <h3> 🦊 Player : <span style={{fontFamily:'serif', fontWeight:'bold', color:'azure'}}>{actualGame.name}</span>. 🎯 Points : <span style={{fontFamily:'serif', fontWeight:'bold', color:'azure'}}>{totalPoints}</span></h3>
        <Button onClick={()=>setNewUser()}>Change user</Button>
        </Box>
      : 
      <Box style={{ width: 350,maxWidth: '100%', margin:'auto', marginBottom:'12px'}} > <TextField fullWidth label='Insert your player name' onChange={inputDataHanlder} onKeyDown={savedUser}/>

        </Box>  }</>
      )
    }