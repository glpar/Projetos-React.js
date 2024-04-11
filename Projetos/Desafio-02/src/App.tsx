import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ProductsContextProvider} from "./contexts/CyclesContext";
import { PaymentProvider } from "./contexts/PaymentContext";
import { AddressProvider } from "./contexts/AddressContext";


function App() {
  return (
    <ThemeProvider theme = {defaultTheme}>
      <BrowserRouter>
      <AddressProvider>
      <PaymentProvider>
      <ProductsContextProvider>
        <Router/>
      </ProductsContextProvider>
      </PaymentProvider>
      </AddressProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
