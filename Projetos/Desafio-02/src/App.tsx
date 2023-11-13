import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ProductsContextProvider} from "./contexts/CyclesContext";


function App() {
  return (
    <ThemeProvider theme = {defaultTheme}>
      <BrowserRouter>
      <ProductsContextProvider>
        <Router/>
      </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App