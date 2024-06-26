import  { produce } from 'immer'
import { ActionTypes } from "./actions";

export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CycleState{
    cycles:Cycle[]
    activeCycleId: string | null

}

export function cycleReducer(state: CycleState, action: any) {

    switch (action.type) {
        case ActionTypes.Add_New_Cycle:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
            // return {
            //     ...state,
            //     cycles:[...state.cycles, action.payload.newCycle],
            //     activeCycleId: action.payload.newCycle.id,
            //}
        case ActionTypes.Interrupt_Current_Cycle: {
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
            })
            // return {
            //     ...state,
            //     cycles: state.cycles.map((cycle) => {
            //         if(cycle.id === state.activeCycleId) {
            //              return {...cycle, interruptedDate: new Date(),}
            //         }
            //         else{
            //              return cycle
            //         }
            //     }),
            //     activeCycleId:null
            // }
        }
        case ActionTypes.Mark_Current_Cycle_As_Finished:{
            const currentCycleIndex = state.cycles.findIndex(cycle => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate = new Date()
            })
        }
            // return {
            //     ...state,
            //     cycles: state.cycles.map((cycle) => {
            //         if(cycle.id === state.activeCycleId) {
            //             return {
            //                 ...cycle, finishedDate: new Date(),
            //             }
            //         }
            //             else{
            //                 return cycle
            //             }
            // }),
            //     activeCycleId:null
            // }
        default:         
            return state;
    }
}