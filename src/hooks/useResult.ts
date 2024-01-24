import { storeQuestions } from "../store/storeQuestions"
import { storePoints } from "../store/storePoints"
export const useResult = ()=>{
    const setActualGame = storePoints(state => state.setActualGame)
    const actualGame = storePoints(state => state.actualGame)
    const questions = storeQuestions(state => state.questions)
    let corretcAnswers : number = 0
    let wrongAnswer : number = 0
    questions.forEach(item =>{item.isCorrectUserAnswer ? corretcAnswers++ : wrongAnswer++})
    wrongAnswer = (questions.length != 0 &&  !questions[questions.length -1].userSelecAnswer )? wrongAnswer - 1 : wrongAnswer

   
       const  totalPoints:number = corretcAnswers *10
   
return ({corretcAnswers , wrongAnswer, totalPoints})
}