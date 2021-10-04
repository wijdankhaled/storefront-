import Header from './components/header';
import ActiveCat from './components/activeCat';
import Product from './components/products';
import Footer from './components/footer';
import Categories from './components/categories';
import './App.css';
function App() {

  return (
    <>
    <Header/>
       <Categories/>
        <ActiveCat/>
        <Product/>
    <Footer/>
    </>
  );

}

export default App;