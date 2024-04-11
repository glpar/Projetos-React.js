import { Bank, CreditCard, CurrencyDollar, Minus, Money, Plus, Trash } from "phosphor-react";
import { FormContainer, CoffeeSelectionContainer, TitleContainer, PaymentButtons, CoffeesContainer, QuantityContainer, CoffeeNameAndQuantityContainer, ButtonsContainer,
    // HistoryList, 
    // Status 
} from "./styles";
import { useProductsContext } from "../../../../contexts/CyclesContext";
import { NavLink } from "react-router-dom";
// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function CoffeeSelection(){
    // const {cycles} =useContext(CyclesContext)
    // const {activeCycle} = useContext(CyclesContext)
    // const {register} = useFormContext()
    const {productsCart, removeToCart,addToCart, getQuantityByid, removeAllToCart} = useProductsContext()

    // const quantity = productsCart.reduce((count, current) => {
    //     return count + current.quantity;
    // }, 0)

    const frete = 3.50;

    const totalPrice = productsCart.reduce((count, current) => {
        return count + current.quantity * current.price;
    }, 0);

    const totalPriceWithFrete = productsCart.reduce((count, current) => {
        return count + (current.quantity * current.price) + frete;
    }, 0);
    return (
        <CoffeeSelectionContainer>
            <h1>Complete seu pedido</h1>
            <FormContainer >
                <CoffeesContainer >
                    {productsCart.map((product) => (
                        <div className="List" key={product.id}>
                            {/* Renderizar as propriedades do produto */}
                            {/* ... */}

                            <div className="imageContainer">
                                <img src={product.image} alt={`Imagem de ${product.productName}`} />
                            </div>
                            <CoffeeNameAndQuantityContainer>
                                <div className="subtitleTextCoffee">
                                    <div className="coffeeTitle">{product.productName}</div>
                                    <div className="price">
                                        {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </div>
                                </div>
                                <ButtonsContainer>
                                    <div className="coffee">
                                        <button onClick={() => removeToCart(product.id)}>
                                            <Minus />
                                        </button>
                                        <div className="quantity">{getQuantityByid(product.id)}</div>
                                        <button onClick={() => addToCart(product.id, product.price, product.image, product.productName)}>
                                            <Plus />
                                        </button>
                                    </div>
                                    <button className="removeButton" onClick={() => removeToCart(product.id)}>
                                        <Trash className="trashIcon" />
                                        Remover
                                    </button>
                                </ButtonsContainer>
                            </CoffeeNameAndQuantityContainer>
                            {/* ... outras propriedades */}
                        </div>
                    ))}
                </CoffeesContainer>
                <div className="totalPrice">
                    <div className="subtitleText">Total de ofertas</div>
                    <div className="subtitlePrice">{totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                </div>
                <div className="totalFrete">
                    <div className="subtitleText">Entrega</div>
                    <div className="subtitlePrice">{frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                </div>
                <div className="totalFullPrice">
                    <div className="subtitleText">Total</div>
                    <div className="subtitlePrice">{totalPriceWithFrete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                </div>
                
                <NavLink  to="../finalized" title="Finalized">
                        Confirmar Perdido
                </NavLink>
            </FormContainer>
        </CoffeeSelectionContainer>

    )
}
{/* {/*             
                    <datalist id="task-suggestion">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist> */}
                    
                // <RuaInput
                //     id="rua"
                //     placeholder="Rua"  
                    // type="number" 
                    // id="minutesAmount" 
                    // placeholder="00" 
                    // step={1}
                    // min={1} 
                    // max={60}
                    // disabled={!!activeCycle}
                    // {...register('minutesAmount', {valueAsNumber: true})}
                // />

//                 <NumeroComplementoAlign>
//                     <NumeroInput
//                         type="number"
//                         id="numberAddress"
//                         placeholder="Número" 
//                     />
//                     <ComplementoInput
//                         id="complemento"
//                         placeholder="Complemento" 
//                     />
//                 </NumeroComplementoAlign>
                
//                 <NumeroComplementoAlign>
//                     <BairroInput
//                         id="bairro"
//                         placeholder="Bairro"  
//                     />
//                     <CidadeInput
//                         id="cidade"
//                         placeholder="Cidade" 
//                     />
//                     <UFInput
//                         id="uf"
//                         placeholder="UF" 
//                     />
//                 </NumeroComplementoAlign>
 
//         ) */}
// }
            {/* <HistoryList>
                <table>
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
                </table>
            </HistoryList> */}
