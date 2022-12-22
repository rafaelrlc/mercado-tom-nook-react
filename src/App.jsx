import CartProvider from "./store/CartProvider";
import Rotas from "./routes";
import Header from "./Components/Layout/Header";
import AuthContextProvider from "./store/authProvider";

function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <Header></Header>
        <Rotas></Rotas>
      </CartProvider>
    </AuthContextProvider>
  );
}
export default App;
