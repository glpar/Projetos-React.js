import  { produce } from 'immer'
import { ActionTypes } from "./actions";

export interface Product {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    tags: string[];
    quantity: number;
}

interface ProductState{
    products:Product[]
    activeProductId: string | null

}

export function productReducer(state: ProductState, action: any) {
        switch (action.type) {
            case ActionTypes.Add_New_Product:
                return produce(state, draft => {
                    draft.products.push(action.payload.newCycle)
                    draft.activeProductId = action.payload.newCycle.id
                })
                // return {
                //     ...state,
                //     cycles:[...state.cycles, action.payload.newCycle],
                //     activeCycleId: action.payload.newCycle.id,
                //}
            case ActionTypes.Interrupt_Current_Product: {
                const currentCycleIndex = state.products.findIndex(cycle => {
                    return cycle.id === state.activeProductId
                })
    
                if (currentCycleIndex < 0) {
                    return state
                }
    
                return produce(state, (draft) => {
                    draft.activeProductId = null
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
            case ActionTypes.Mark_Current_Product_As_Finished:{
                const currentProductIndex = state.products.findIndex(product => {
                    return product.id === state.activeProductId
                })
    
                if (currentProductIndex < 0) {
                    return state
                }
    
                return produce(state, (draft) => {
                    draft.activeProductId = null
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