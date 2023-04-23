import React from 'react'
import{
  BrowserRouter as Router , 
  Routes ,
  Route ,
} from "react-router-dom" ;

import Home from "./components/Home"
import Contact from './components/ContactUs'
import Signup from './components/signup';
import Login from './components/Login'
import Profile from './components/Profile' ;
import Partner from './components/Partner'



function App(){
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts();
  }, [])

const getProducts = async () => {
  let result = await fetch('http://localhost:5000/priyanshu',{
  mode:"cors"
  });
  result = await result.json();
  setProducts(result);
}
console.log(products);
const [pg, setPgs] = useState(products);
  function removePgs(name) {
    const newPgs = pg.filter(pg => pg.name !== name);
    setPgs(newPgs);
  }

  if(pg.length === 0) {
    return (
        <div className="refresh">
          <h2>No Pgs Left</h2>
          <button className="btn-white" onClick={() => setPgs(products)}>
            Refresh
          </button>
        </div>
    );
  }

    return(
       <>
      
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ContactUs' element={<Contact />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/partner' element={<Partner/>}/>
          </Routes>
        </Router>
       </>
    );
}

export default App ;