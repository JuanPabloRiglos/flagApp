import { Button } from "@mui/material"
import {storeQuestions} from '../store/storeQuestions'
import  {useQuestions}  from "../hooks/useQuestions"
import {question} from '../types'
import { useState } from "react"

interface propsStart{
    questions : question| undefined
}
export function StartComponent({questions}:propsStart){
    const [limit, setNewLimit]= useState <number>(5)
    const [base, setNewBase]= useState <number>(0)
const getQuestionData=  useQuestions()

const  fetchQuestions  = storeQuestions(state => state.fetchQuestions)




const  handlerClick = async()=>{
    const newQuestion : question = ( await getQuestionData)(base, limit)
    await fetchQuestions(newQuestion)
    setNewBase(limit)
    setNewLimit(limit + 5)
}

    return(

    <Button variant="contained" onClick={handlerClick} sx={{ maxWidth:'30%', marginLeft:'43%', marginY:'3%' }}>{ questions == undefined? 'Start Game!' :' Go next Question!'}</Button>)
}