// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'
// import { CyclesContext } from "../../contexts/CyclesContext";
import { HomeContainer, HistoryList, 
        // Status
     } from "./styles";
import { Products } from "./components/Products";

import { Countdown } from "./components/Title";

import {products} from "./components/Products/ProductsJSON/ProductsJSON";

// import { ptBR } from "date-fns/locale";


export function Home(){
    // const {cycles} =useContext(CyclesContext)


    return (
    <HomeContainer>
        <Countdown />

        <div className="coffeeList">Nossos Cafés</div>

            <HistoryList>

                {products.map((product) => <Products 
                    image={product.image} 
                    id={product.id} 
                    productName ={product.productName} 
                    description={product.description}
                    key ={product.id}
                    tags={product.tags}
                    price = {product.price}/>
                    
                )}
                {/* <Products/>
                <Products/>
                <Products/>
                <Products/>
                <Products/> */}
                {/* <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return(
                                <tr key={cycle.id}>
                                    <td>{cycle.image}</td>
                                    <td>{cycle.description} minutos</td>
                                    <td>{cycle.price} minutos</td>
                                    <td>{formatDistanceToNow(new Date(cycle.startDate), {addSuffix:true, locale: ptBR})}</td>
                                    <td>
                                        {cycle.finishedDate && (
                                            <Status statusColor="green">Concluído</Status>
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status statusColor="red">Interrompido</Status>
                                        )}

                                        {(!cycle.finishedDate && !cycle.interruptedDate) && (
                                            <Status statusColor="yellow">Em andamento</Status>
                                        )}

                                    </td>
                                </tr>    
                            )
                        })}
                    </tbody>
                </table> */}
            </HistoryList>
    </HomeContainer>
    )
}