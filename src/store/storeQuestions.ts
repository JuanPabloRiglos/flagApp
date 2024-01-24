import { create } from 'zustand'
import confetti from 'canvas-confetti'
import { question } from '../types'
import { persist } from 'zustand/middleware'



interface componentState{
    questions: question[],
    currentQuestion: number,
    fetchQuestions:(newQuestion : question)=> Promise<void>,
    selecAnswer: (questionId : string, selectAnswer:string) => void,
    restartGame: ()=> void
}

export const  storeQuestions =  create<componentState>()(persist((set, get)=>{
    return{
        questions:[],
        currentQuestion:0, 
        fetchQuestions:(newQuestion : question)=>{
            const {questions} = get()
            const copyQuestions = structuredClone(questions)
            const totalQuestions = copyQuestions.length ? [...copyQuestions , newQuestion] : [newQuestion]
            set({
                questions : totalQuestions
            })
        },
        selecAnswer : (questionId : string, selectAnswer:string)=>{
            const { questions } = get()
            const newQuestions = structuredClone(questions)
            //consigo saber sobre que pregunta trabajo
            const questionInStudy = newQuestions.findLastIndex(item => item.principal.name.common === questionId) // busco la ultima aparicion, porque los paises se pueden repetir,  causa un bug
            const userSelecAnswer = selectAnswer
            //seteo si la respuesta fue correcta o no
            const isCorrectUserAnswer = newQuestions[questionInStudy].principal.name.common === userSelecAnswer
            if(isCorrectUserAnswer)confetti()

            // guardo la pregunta en estudio, con la respusta que dio el usuario  si fue correcta
            newQuestions[questionInStudy]= {
                ...newQuestions[questionInStudy],
                userSelecAnswer,
                isCorrectUserAnswer,
                currentQuestion: questionInStudy
            }
            set({questions : newQuestions})
        },
        restartGame:()=>{set({questions:[]})}
    }
},{
    name: 'flagGame'
}))