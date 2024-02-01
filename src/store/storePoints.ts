
import  {create} from "zustand";
import {record, SetState, GetState} from '../types'
import { persist } from 'zustand/middleware'

interface componentState {
    allGames: record[],
    record:record,
    actualGame:record,
    setActualGame:(currentGame:record)=> void,
    setRecords:(objet:record)=> void
}

export const storePoints = create<componentState>()(persist((set : SetState<componentState> ,get: GetState<componentState>) : componentState=>{
    return{
        allGames: [],
        record:{name: '', points:0},
        actualGame:{name: '', points:0},
        setActualGame:(currentGame:record)=>{
        
            set({actualGame: currentGame}) 
            
        },
        setRecords:(actualGame : record)=> {
            const {allGames} = get()
            const copyGames = structuredClone(allGames)
            const newGames = [...copyGames, actualGame]
            set({allGames:newGames})
        } 
    }

}, {name:'allGames'}))