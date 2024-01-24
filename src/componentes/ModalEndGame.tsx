import { Box, Button } from "@mui/material"
import confetti from 'canvas-confetti'
import { storeQuestions } from "../store/storeQuestions";

interface modalProps{
    level: number
}
export function ModalEndGame( {level}:modalProps ){

    const restartGame = storeQuestions(state => state.restartGame)
    
    console.log(level)

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
 level === 6 && confetti()
    return(
        <Box sx={style}>
    {level === 6? <h3> You Win! </h3> : <h3> Game Over.</h3> }
    
    {level === 6? 
    <Button variant="contained" color="success" onClick={()=>{restartGame()}}>Restart Game
    </Button>
    : <Button variant="outlined" color="error" onClick={()=>{restartGame()}}>Restart Game
    </Button>}
        </Box>
    )
}