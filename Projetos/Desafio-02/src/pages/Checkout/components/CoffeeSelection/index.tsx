import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { FormContainer, CoffeeSelectionContainer, TitleContainer, PaymentButtons,
    // HistoryList, 
    // Status 
} from "./styles";
import { useProductsContext } from "../../../../contexts/CyclesContext";
// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function CoffeeSelection(){
    // const {cycles} =useContext(CyclesContext)
    // const {activeCycle} = useContext(CyclesContext)
    // const {register} = useFormContext()
    const {productsCart} = useProductsContext()

    const quantity = productsCart.reduce((count, current) => {
        return count + current.quantity;
    }, 0)

    const totalPrice = productsCart.reduce((count, current) => {
        return count + current.quantity * current.price;
    }, 0);
    return (
        <CoffeeSelectionContainer>
            <FormContainer >
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <div className="alignTitle">
                            <CurrencyDollar className="CurrencyDollar"size={22} />
                            <strong> Pagamento</strong>
                        </div>
                        <div className="subtitleText"> Items no Carrinho: {quantity}</div>
                        <div className="subtitleText"> Custo Total: {totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</div>
                        <div className="subtitleText" >{productsCart.map((product) => (
                            <div key={product.id}>
                                {/* Aqui você pode renderizar as propriedades do produto */}
                                <img src={product.image} />
                                <p>{product.name}</p>
                                <p>{product.description}</p>
                                <p>{product.quantity}</p>
                                <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                {/* ... outras propriedades */}
                            </div>
                        ))}
                        </div>
                    </div>
                </TitleContainer>
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
