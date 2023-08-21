import { ReactNode, createContext, useContext, useEffect, useReducer, useState } from "react";
import { Product, productReducer, } from "../reducers/cycles/reducer";
import { AddNewCycleAction, MarkCurrentCycleAsFinishedAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";

export interface CreateProductData {
    id: string;
    image: string;
    productName: string;
    description: string;
    price: number;

}

export interface ProductContextType {
    products: Product[];
    // activeProduct: Product | undefined;
    activeProductId: string | null;
    productsCart: Product[];
    setProductsCart: React.Dispatch<React.SetStateAction<Product[]>>;
    addToCart: (id: string, price: number, image: string, productName: string ) => void
    removeToCart: (id: string ) => void
    getQuantityByid: (id:string) => void

    // addProductsCart:(id: string) =>void;
    // const setProductsCart: (value: React.SetStateAction<never[]>) => void
//     createNewCycle: (data: CreateProductData) => void;
//     interruptCurrentCycle: () => void;
}

export const ProductsContext = createContext<ProductContextType | undefined>(undefined);

export function useProductsContext() {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProductsContext must be used within a ProductsContextProvider");
    }
    return context;
}

interface ProductContextProviderProps {
    children: ReactNode;
}

export function ProductsContextProvider({children}: ProductContextProviderProps){

    
    const [productsCart, setProductsCart] = useState<Product[]>([]);

    const [cycleState] = useReducer(productReducer, {
        products: [],
        activeProductId: null,
     }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');

        if (storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    // const [productsCart, setProductsCart] = useContext(ProductsContext)


    const {products, activeProductId} = cycleState;
    // const activeProduct = products.find((product) => product.id === activeProductId); 

const addToCart = (id:string, price: number, image: string, productName: string ) => {
        setProductsCart((currentProducts) => {
            const isProductFound = currentProducts.find((product) => product.id === id)
            if(isProductFound){
                return currentProducts.map((product) => {
                    if(product.id === id){
                        return {...product, quantity: product.quantity + 1}
                    }
                    else {
                        return product
                    }
                })
            }
            else {
                return [...currentProducts, {id, quantity: 1, price, image, productName} as Product]
            }
        })
    }

    const removeToCart = (id: string) => {
        setProductsCart((currentProducts) => {
            if (currentProducts.find((product) => product.id === id)?.quantity === 1){
                return currentProducts.filter((product) => product.id !== id)
            }

            else {
                return currentProducts.map((product) => {
                    if(product.id === id){
                        return {...product, quantity: product.quantity - 1}
                    }
                    else {
                        return product
                    }
                })
            }
        })
    }

    const getQuantityByid = (id:string) => {
        return productsCart.find((product) => product.id === id)?.quantity || 0;
    }

    return (
        <ProductsContext.Provider value={{
            // activeProduct, 
            activeProductId, 
            products,
            productsCart,
            setProductsCart,
            addToCart,
            removeToCart,
            getQuantityByid
        }}>
        
            {children}
        </ProductsContext.Provider>
    )

} 

    // const [cycleState] = useReducer(cycleReducer, {
    //     cycles: [],
    //     activeCycleId: null,
    //  }, (initialState) => {
    //     const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');

    //     if (storedStateAsJSON) {
    //         return JSON.parse(storedStateAsJSON)
    //     }

    //     return initialState
    // })



    // const {cycles, activeCycleId} = cycleState;
    // const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId); 

    // useEffect(() => {
    //     const stateJSON = JSON.stringify(cycleState)

    //     localStorage.setItem('@ignite-timer:cycles-state-1.0.0',stateJSON)
    // },[cycleState])

    // function createNewCycle(data: CreateProductData) {
    //     const id = String(new Date().getTime());

    //     const newCycle: Cycle = {
    //         id,
    //         image: data.image,
    //         name: data.name,
    //         description: data.description,
    //         price: data.price,
    //     }

        
    //     dispatch(AddNewCycleAction(newCycle))
    //     setCycles((state) => [...state, newCycle]);
    // }


        // <ProductContext.Provider value={{
        // // activeCycle, 
        // // activeCycleId, 

        // // cycles
        // }}>
        
        // {children}
        // </ProductContext.Provider>


    // function markCurrentCycleAsFinished() {
    //     dispatch(MarkCurrentCycleAsFinishedAction())

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


    // function createNewCycle(data: CreateProductData) {
        // const id = String(new Date().getTime());

        // const newCycle: Cycle = {
        //     id,
        //     image: data.image,
        //     name: data.name,
        //     description: data.description,
        //     price: data.price,
        // }
        
        // dispatch(AddNewCycleAction(newCycle))
        // setCycles((state) => [...state, newCycle]);



    // function interruptCurrentCycle() {
    //     dispatch(interruptCurrentCycleAction())
    // }


