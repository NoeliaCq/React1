import Header from './components/Header';
import {useState, Fragment} from 'react';
import Footer from './components/Footer';
import Producto from './components/Producto';


function App() {

  //Listado de productos con un state

  const[productos, guardarProductos] = useState([
    {id:1, articulo:"La vie est Belle", precio:'$10990'},
    {id:2, articulo:"One CK", precio:'$3750'},
    {id:3, articulo:"Prune IV", precio:'$1660'},
    {id:4, articulo:"Halloween", precio:'$6945'},
    {id:5, articulo:"DKNY", precio:'$8560'}
  ]);

  return (
    <Fragment>
      <Header />
      <h1>Perfumes SRL - Compra online</h1>
      {productos.map(producto => (
        <Producto 
          producto = {producto}
        />
      )
        )}
  
      <Footer 
        anio = {"2021"}
      />
    </Fragment>
  );
}

export default App;
