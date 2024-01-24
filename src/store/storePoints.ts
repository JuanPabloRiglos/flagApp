import { create } from "zustand";
import {record} from '../types'
import { persist } from 'zustand/middleware'

interface componentState {
    allGames: record[],
    record:record,
    actualGame:record,
    setActualGame:(currentGame:record)=> void,
    setRecord:(objet:record)=> void
}

export const storePoints = create<componentState>()(persist((set,get)=>{
    return{
        allGames: [],
        record:{},
        actualGame:{},
        setActualGame:(currentGame:record)=>{
            console.log(currentGame)
            set({actualGame: currentGame}) 
            
        },
        setRecords:(actualGame : record)=>{
            const {allGames} = get()
            const copyGames = structuredClone(allGames)
            const newGames = [...copyGames, actualGame]
            set({allGames:newGames})
        } 
    }

}, {name:'allGames'}))