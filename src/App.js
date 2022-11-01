
import Home from "./routes/home/home.component";
import { Routes,Route} from "react-router-dom/dist";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (<h1>i'm batman</h1>);
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
       <Route path='home' element={<Home />} />
       <Route path='shop' element={<Shop />} />
       <Route path='signIn' element={<SignIn />} />
       {/* </Route> */}
      </Route>
    </Routes>
  
  );
}

export default App;
