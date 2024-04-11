// import { useContext } from "react";
// import {formatDistanceToNow} from 'date-fns'
import { MapPinLine } from "phosphor-react";
import { FormContainer, AddressContainer, TitleContainer, CEPInput, RuaInput, NumeroComplementoAlign, NumeroInput, ComplementoInput, BairroInput, CidadeInput, UFInput,
    // HistoryList, 
    // Status 
} from "./styles";
import { useState } from "react";
import { useAddressContext } from "../../../../contexts/AddressContext";
// import { CyclesContext } from "../../contexts/CyclesContext";
// import { ptBR } from "date-fns/locale";

export function Address(){
    // const {cycles} =useContext(CyclesContext)
    // const {activeCycle} = useContext(CyclesContext)
    // const {register} = useFormContext()

    const { cep, setCep, rua, setRua, numero, setNumero,complemento, setComplemento, bairro, setBairro,
        cidade, setCidade,uf, setUf} = useAddressContext();

    return (
        <AddressContainer>
            <h1>Complete seu pedido</h1>
            <FormContainer >
                <TitleContainer>
                    <div className="titleAndSubtitleContainer">
                        <div className="alignTitle">
                            <MapPinLine className="MapPin"size={22} />
                            <strong> Endereço de Entrega</strong>
                        </div>
                        <div className="subtitleText"> Informe o endereço onde deseja receber seu pedido</div>
                    </div>
                </TitleContainer>
                <CEPInput 
                    id="cep" 
                    // list="task-suggestion" 
                    placeholder="CEP"
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                    // disabled={!!activeCycle}
                    // {...register('task')}
                />
{/* 
                    <datalist id="task-suggestion">
                        <option value="Projeto 1"></option>
                        <option value="Projeto 2"></option>
                        <option value="Projeto 3"></option>
                        <option value="Projeto 4"></option>
                    </datalist> */}
                    
                <RuaInput
                    id="rua"
                    placeholder="Rua"  
                    value={rua}
                    onChange={(event) => setRua(event.target.value)}
                    // type="number" 
                    // id="minutesAmount" 
                    // placeholder="00" 
                    // step={1}
                    // min={1} 
                    // max={60}
                    // disabled={!!activeCycle}
                    // {...register('minutesAmount', {valueAsNumber: true})}
                />

                <NumeroComplementoAlign>
                    <NumeroInput
                        type="number"
                        id="numberAddress"
                        placeholder="Número" 
                        value={numero}
                        onChange={(event) => setNumero(event.target.value)}
                    />
                    <ComplementoInput
                        id="complemento"
                        placeholder="Complemento" 
                        value={complemento}
                        onChange={(event) => setComplemento(event.target.value)}
                    />
                </NumeroComplementoAlign>
                
                <NumeroComplementoAlign>
                    <BairroInput
                        id="bairro"
                        placeholder="Bairro"  
                        value={bairro}
                        onChange={(event) => setBairro(event.target.value)}
                    />
                    <CidadeInput
                        id="cidade"
                        placeholder="Cidade" 
                        value={cidade}
                        onChange={(event) => setCidade(event.target.value)}
                    />
                    <UFInput
                        id="uf"
                        placeholder="UF" 
                        value={uf}
                        onChange={(event) => setUf(event.target.value)}
                    />
                </NumeroComplementoAlign>
            </FormContainer>
        </AddressContainer>
        )
}
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
