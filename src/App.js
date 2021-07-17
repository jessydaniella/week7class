
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Card from './card';

function App() {
  const products = {
    title: 'my 2023 bag',
    description: 'this bag is so cool',
    price: 3000
  };
  const handleProduct = () => {
    alert(products.title);
  };
  return (
    <div className="App"> 
    <Button text='Sign in' />
    <Button2 />

     <Card myProduct ={products} myClick={handleProduct} />
     {}
    </div>
  );
}                                   

export default App;
