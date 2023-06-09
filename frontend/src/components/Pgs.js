import Card from './Card'
import React, {useState,useEffect} from "react";
import Navbar from './navbar'
import Footer from './footer'
import './components1.css'
import './components2.css'

function Pgs() {
    const [products, setProducts] = useState([]);
    const [pg, setPgs] = useState(null);
  
    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:1000/priyanshu", {
          mode: "cors",
        });
        const result = await response.json();
        setProducts(result);
        setPgs(result);
      } catch (error) {
        console.error(error);
      }
    };
  
    function removePgs(name) {
      const newPgs = pg.filter((pg) => pg.name !== name);
      setPgs(newPgs);
    }
  
    if (!pg) {
      return (
        <div className="refresh">
          <h2>Loading...</h2>
        </div>
      );
    }
  
    if (pg.length === 0) {
      return (
        <div className="refresh">
          <h2>No Pgs Left</h2>
          <button className="btn-white" onClick={() => setPgs(products)}>
            Refresh
          </button>
        </div>
      );
    }
  
    return (
      <>
      <Navbar/>
      <div className="container">
        <div className="Search-header">
          <h1>Available PGs</h1>
        </div>
        <div className="cards">
          {pg.map((pgs) => {
            return <Card key={pgs.name} {...pgs} removePgs={removePgs}></Card>;
          })}
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  

export default Pgs;