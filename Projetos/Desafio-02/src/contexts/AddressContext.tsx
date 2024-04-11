import { ReactNode, createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const useAddressContext = () => {
  return useContext(AddressContext);
};

interface AddressContextProviderProps {
    children: ReactNode;
}

export const AddressProvider = ({ children }: AddressContextProviderProps) => {
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

  return (
    <AddressContext.Provider value={{ cep, setCep, rua, setRua, numero, setNumero,complemento, setComplemento, bairro, setBairro,
    cidade, setCidade,uf, setUf /* ...rest of your state */ }}>
      {children}
    </AddressContext.Provider>
  );
};