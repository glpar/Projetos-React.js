import { Product } from "./reducer"

export enum ActionTypes {
    Add_New_Product='Add_New_Product',
    Interrupt_Current_Product = 'Interrupt_Current_Product',
    Mark_Current_Product_As_Finished='Mark_Current_Cycle_As_Product'
}

export function AddNewCycleAction(newProduct: Product) {
    return {
        type: ActionTypes.Add_New_Product,
            payload: {
                newProduct,
            }
    }
}

export function MarkCurrentCycleAsFinishedAction() {
    return {
        type: ActionTypes.Mark_Current_Product_As_Finished,
    }
}

export function interruptCurrentCycleAction() {
    return{
        type: ActionTypes.Interrupt_Current_Product,
    }
}