
import Home from "./routes/home/home.component";
import { Routes,Route} from "react-router-dom/dist";
import Navigation from "./routes/navigation/navigation.component";
import Auth from "./routes/authentication/authentication-component.jsx";




const Shop = () => {
  return (<h1>i'm batman</h1>);
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
       <Route path='home' element={<Home />} />
       <Route path='shop' element={<Shop />} />
       <Route path='auth' element={<Auth />} />
       
       {/* </Route> */}
      </Route>
    </Routes>
  
  );
}

export default App;
