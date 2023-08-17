import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Cycle, cycleReducer } from "../reducers/cycles/reducer";
import { AddNewCycleAction, MarkCurrentCycleAsFinishedAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";

export interface CreateCycleData {
    image: string;
    name: string;
    description: string;
    price: number;
}

export interface CycleContextType {
    cycles: Cycle[];
    activeCycle: Cycle | undefined;
    activeCycleId: string | null;
    markCurrentCycleAsFinished: () => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CycleContextType)

interface CycleContextProviderProps {
    children: ReactNode;
}

export function CyclesContextProvider({children}: CycleContextProviderProps){
    const [cycleState, dispatch] = useReducer(cycleReducer, {
        cycles: [],
        activeCycleId: null,
     }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const {cycles, activeCycleId} = cycleState;
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId); 

    useEffect(() => {
        const stateJSON = JSON.stringify(cycleState)

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0',stateJSON)
    },[cycleState])

    function markCurrentCycleAsFinished() {
        dispatch(MarkCurrentCycleAsFinishedAction())

        // setCycles((state) => 
        //     state.map((cycle) => {
        //         if(cycle.id === activeCycleId) {
        //             setActiveCycleId(null)
        //             return {...cycle, finishedDate: new Date(),}
        //         }
        //         else{
        //             return cycle
        //         }
        //     }),
        // )
    }

    function createNewCycle(data: CreateCycleData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            image: data.image,
            name: data.name,
            description: data.description,
            price: data.price,
        }
        
        dispatch(AddNewCycleAction(newCycle))
        // setCycles((state) => [...state, newCycle]);

    }

    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }


    return (
        <CyclesContext.Provider value={{
            activeCycle, 
            activeCycleId, 
            markCurrentCycleAsFinished, 
            createNewCycle,
            interruptCurrentCycle,
            cycles
        }}>
        
        {children}
        </CyclesContext.Provider>
    )
}