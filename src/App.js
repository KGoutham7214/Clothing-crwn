
import Home from "./routes/home/home.component";
import { Routes,Route} from "react-router-dom/dist";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/authentication/authentication-component.jsx";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout-component";



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
       <Route path='home' element={<Home />} />
       <Route path='shop/*' element={<Shop />} />
       <Route path='auth' element={<Auth />} />
       <Route path='checkout' element={<Checkout />} />
       
       
       {/* </Route> */}
      </Route>
    </Routes>
  
  );
}

export default App;
