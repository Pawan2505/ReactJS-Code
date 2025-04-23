### ✅ 1. Folder Structure

```
product-card-mini/
├── src/
│   ├── assets/
│   │   ├── tshirt.jpg
│   │   ├── jeans.jpg
│   │   ├── shoes.jpg
│   │   └── watch.jpg
│   ├── components/
│   │   └── ProductCard.js
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── package.json
```

---

### ✅ 2. `src/components/ProductCard.js`

```jsx
import React from 'react';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '16px',
      width: '250px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{title}</h3>
      <p style={{ fontWeight: 'bold' }}>₹ {price}</p>
      <p>{description}</p>
      <button style={{
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '8px'
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
```

---

### ✅ 3. `src/App.js`

```jsx
import React from 'react';
import ProductCard from './components/ProductCard';

// Importing local images
import tshirt from './assets/tshirt.jpg';
import jeans from './assets/jeans.jpg';
import shoes from './assets/shoes.jpg';
import watch from './assets/watch.jpg';

function App() {
  const products = [
    {
      id: 1,
      image: tshirt,
      title: "Red & White T-shirt",
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
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px'
    }}>
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
```

---

### ✅ 4. `src/index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

---

### ✅ 5. `public/index.html` (Default template)

Make sure this has a root div:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Product Card Mini Project</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

---

### ✅ 6. Add Your Local Images

Place these inside `src/assets/` folder:

- `tshirt.jpg`
- `jeans.jpg`
- `shoes.jpg`
- `watch.jpg`

You can use any images with these filenames or change the import paths as needed.

---

### ✅ Done!

Run your project:

```bash
npm install
npm start
```

---
