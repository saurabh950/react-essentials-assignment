// import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';

function App() {
  const productName = "Gaming Laptop Pro";
  const productPrice = 1299;
  const productDescription = "High-performance laptop for gaming.";
  const isOnSale = true;
  const productImage = '/images/laptop.jpg'
  const productId = "laptop-001";

  return (
    <div className="App">
      <header>
        <h1>Product Showcase</h1>
        <p>Discover our amazing products</p>
      </header>

      <main className='products-grid'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
