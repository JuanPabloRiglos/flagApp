
import { Button, Container, Typography, Box} from '@mui/material';

import { storeQuestions } from '../store/storeQuestions';
import { useResult } from '../hooks/useResult';

export function Footer() {
    const questions = storeQuestions(state => state.questions)
    const restartGame = storeQuestions(state => state.restartGame)
    const {corretcAnswers, wrongAnswer} =useResult()
return (
  <>
        <Box
        component="footer"
        style={{maxWidth: '95%', margin:'auto'}}
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
        }}
        >
        <Container maxWidth="sm">
            <Typography variant="body1">
            {`✅ Corret Answer: ${corretcAnswers} . ❌ Wrong/Pending Answer: ${wrongAnswer}. 🤞Current answer : ${questions?.length}.`}
            </Typography>
        </Container>
        <Button variant="outlined" color="error" sx={{marginInline:'auto'}} onClick={()=>restartGame()}>
  Restart Game
</Button>
    </Box>
    </>
);
}