import CartProvider from "./store/CartProvider";
import Rotas from "./routes";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <Rotas></Rotas>
    </CartProvider>
  );
}

export default App;
