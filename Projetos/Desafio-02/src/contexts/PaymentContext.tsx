import { ReactNode, createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export function usePaymentContext() {
    return useContext(PaymentContext);
}

interface PaymentContextProviderProps {
    children: ReactNode;
}

export function PaymentProvider({ children }: PaymentContextProviderProps) {
    const [selectedPayment, setSelectedPayment] = useState('');

    return (
        <PaymentContext.Provider value={{ selectedPayment, setSelectedPayment }}>
            {children}
        </PaymentContext.Provider>
    );
}



