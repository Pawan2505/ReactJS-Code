import './App.css';
import ProductCard from './components/ProductCard';
import tshirt from './assets/tshirt.jpeg';
import jeans from './assets/jeans.jpeg';
import shoes from './assets/shoes.jpeg';
import watch from './assets/watch.jpeg'


function App() {
  const products = [
    {
      id: 1,
      image: tshirt,
      title: "Red & white T-shirt",
      price: 499,
      description: "Comfortable cotton t-shirt for daily wear."
    },
    {
      id: 2,
      image: jeans,
      title: "Blue Denim Jeans",
      price: 899,
      description: "Stylish jeans with perfect fitting."
    },
    {
      id: 3,
      image: shoes,
      title: "Running Shoes",
      price: 1499,
      description: "Lightweight and durable running shoes."
    },
    {
      id: 4,
      image: watch,
      title: "Smart Watch",
      price: 1999,
      description: "Track your fitness and notifications."
    }
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {products.map((item) => (
        <ProductCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default App;
