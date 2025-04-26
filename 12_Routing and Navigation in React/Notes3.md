# 📦 1. Data send karne ke mainly 2 tareeke hain:

| Method | Kab use hota hai? |
|:-------|:------------------|
| URL Params (Dynamic Routing) | Jab small info chahiye jaise ID, slug |
| State Passing using `Link` | Jab bada object, array, ya detailed data bhejna hai |

---

# 🛣️ 2. Method 1: URL Params se Data Bhejna

Jaise humne Product Page banaya tha:

```jsx
<Link to="/product/123">Product 123</Link>
```

Aur Product page pe data receive kiya:

```jsx
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return <h2>Product ID: {id}</h2>;
};

export default Product;
```

**Yahaan hum simple ID URL me bhej rahe hain.**

---

# 🚚 3. Method 2: State ke through Data Bhejna (Recommended for complex data)

Agar aapko **poora object ya array** dusre page ko bhejna hai, to hum `Link` ke through **state** bhejte hain.

### Step 1: Send Data Using Link

```jsx
import { Link } from 'react-router-dom';

const Home = () => {
  const product = { id: 1, name: "Laptop", price: 50000 };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/product" state={{ product }}>
        Go to Product
      </Link>
    </div>
  );
};

export default Home;
```

**Yahan `state` ke andar product object bhej rahe hain.**

---

### Step 2: Receive Data on Other Page

```jsx
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const { product } = location.state || {};  // Safely destructuring
  
  return (
    <div>
      <h2>Product Page</h2>
      <p>ID: {product?.id}</p>
      <p>Name: {product?.name}</p>
      <p>Price: {product?.price}</p>
    </div>
  );
};

export default Product;
```

---

# 🧠 Important Cheeze:

- Jab **small value** bhejni ho (like id), to URL Params use karo.
- Jab **full object ya data** bhejna ho, to `state` ke through send karo.
- `useLocation()` se aap easily `state` read kar sakte ho.
- Always null-check kar lena (`product?.id`) warna error aa sakta hai.

---

# 🔥 Bonus Tip:
Agar user page ko refresh kar dega jab state se data bheja gaya hai, to state chali jaati hai (kyunki memory clear ho jaati hai).  
**Isliye important data LocalStorage, Redux ya Context me save karna better hota hai refresh ke cases ke liye.**

---

# 🎯 Interview Me Kaise Bolenge:

> Sir/Mam, React Router me hum ek page se dusre page me data bhejne ke liye URL Params ya Link ke state property ka use karte hain.  
> Agar small data ho to URL params, aur large data (object/array) ke liye `state` ka use best practice hai. Receiving side par `useParams` ya `useLocation` hooks ka use karke data ko access karte hain.

---

