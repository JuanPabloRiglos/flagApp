import {country, question} from '../types'
import { UseApi } from './useApi'


export async function useQuestions(){
const getCountries = UseApi()

const countries : country[] = await getCountries();

const getQuestionData = (base : number , limit : number) : question  => {
    
    const countriesForQuestion = countries.sort(()=> Math.random()-0.5).splice(base, limit)
    const ppalIndex = Math.round(Math.random()*5)
 
    const ppalCountry = countriesForQuestion[ppalIndex || 3]
    const totalNames= countriesForQuestion.map(item => { return item.name.common})
    const newQuestion = {
        countries : countriesForQuestion,
        principal : ppalCountry,
        names: totalNames,
        corretAnswer:ppalCountry.name.common
    }

    return newQuestion
};


    return (getQuestionData)
}