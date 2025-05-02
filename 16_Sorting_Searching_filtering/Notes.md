Bilkul! Main aapko code **line by line** explain karunga, **natural Indian Hindi-English** style mein jaise classroom mein samjhaya jaata hai — aur explanation ke baad **complete final code** bhi dunga.

---

## 🔍 Code Explanation: Line by Line

```js
import axios from 'axios';
import React, { useEffect, useState } from 'react'
```

👉 Yeh dono imports hai.

* `axios` ka use hum API se data fetch karne ke liye karte hain.
* `React`, `useState` aur `useEffect` React ke core features hain:

  * `useState()` ka use variables banane ke liye hota hai (stateful data),
  * `useEffect()` ka use side-effects jaise API call karne ke liye hota hai.

---

```js
const AllFilterOperation = () => {
```

👉 Yeh humara **functional React component** hai jiska naam hai `AllFilterOperation`.

---

```js
  const [data, setData] = useState([]); 
```

👉 Yeh state banayi hai jisme hum API se aane wale **complete users ka data** store karenge.

```js
  const [search, setSearch] = useState(""); 
  const [city, setCity] = useState(""); 
  const [Sort, selectedSort] = useState(""); 
```

👉 Yeh teen alag states hai:

* `search`: user jo naam search karega uske liye.
* `city`: dropdown se selected city ke liye.
* `Sort`: sort order (`asc`, `desc`) ko store karta hai.

---

```js
  const show = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const result = res.data;
    setData(result);
  };
```

👉 `show()` function API ko call karta hai, data laata hai, aur `data` state mein save karta hai.

---

```js
  useEffect(() => {
    show();
  }, []);
```

👉 `useEffect` ensures ke component mount hone ke baad `show()` run ho.
`[]` ka matlab hai sirf ek baar chalana — jab page load ho.

---

```js
  function searchName(event) {
    setSearch(event.target.value);
  }
```

👉 Jab user input box mein type karega, toh yeh function `search` state update karega.

---

```js
  function selectCity(event) {
    setCity(event.target.value);
  }
```

👉 Jab user city choose karega, toh yeh city wali state ko update karega.

---

```js
  const cities = data.map((users) => {
    return users.address.city;
  });
```

👉 API se aaye users ka loop chalake har ek user ka `city` value nikal rahe hain, jo dropdown mein dikhaya jaayega.

---

```js
  function selectSort(event) {
    selectedSort(event.target.value);
  }
```

👉 Jab sort dropdown mein user "A-Z" ya "Z-A" select karega, toh woh value yaha store hoti hai.

---

### 🔁 Filtering + Sorting Logic:

```js
  const filterData = data
    .filter((users) => {
      var searched = search.toUpperCase();
      var userName = users?.name?.toUpperCase();
      return userName.includes(searched);
    })
```

👉 Pehle filter kar rahe hain jo naam `search` ke andar match karta ho.

```js
    .filter((users) => {
      return users?.address?.city.includes(city);
    })
```

👉 Phir city ke hisaab se filter ho raha hai.

```js
    .sort((a, b) => {
      if (Sort == "asc") {
        return a.username.localeCompare(b.username);
      } else if (Sort == "desc") {
        return b.username.localeCompare(a.username);
      } else {
        return true;
      }
    });
```

👉 Lastly, agar sorting `asc` ya `desc` selected hai, toh data ko uss order mein sort kar rahe hain.

---

### 🧾 Return Statement (UI)

```js
return (
  <div className="container">
```

👉 Outer container using Bootstrap class.

---

```js
    <div className="row mt-5">
      <div className="col-lg-4">
        <input
          type="search"
          className="form-control"
          placeholder="enter username"
          onChange={searchName}
        />
      </div>
```

👉 Left side input field for search.

---

```js
      <div className="col-lg-4">
        <select className="form-select" onChange={selectCity}>
          <option value="">-- select city --</option>
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
      </div>
```

👉 Middle dropdown to select city (dynamically created).

---

```js
      <div className="col-lg-4">
        <select className="form-select" onChange={selectSort}>
          <option value="">-- select username --</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
```

👉 Right dropdown for sorting by username.

---

```js
    <table className="table table-hover table-striped table-success mt-5">
      <thead className="table-dark">
        <tr>
          <th>s.no</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>city</th>
          <th>phone</th>
        </tr>
      </thead>
```

👉 Table ka header bana hua hai. Styling Bootstrap classes se ho rahi hai.

---

```js
      <tbody>
        {filterData.map((users, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{users?.name}</td>
              <td>{users?.username}</td>
              <td>{users?.email}</td>
              <td>{users?.address?.city}</td>
              <td>{users?.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
```

👉 Final table rows render ho rahe hain filtered & sorted users ke basis par.

---

## ✅ Final Full Code

```jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllFilterOperation = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [Sort, selectedSort] = useState("");

  const show = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setData(res.data);
  };

  useEffect(() => {
    show();
  }, []);

  function searchName(event) {
    setSearch(event.target.value);
  }

  function selectCity(event) {
    setCity(event.target.value);
  }

  function selectSort(event) {
    selectedSort(event.target.value);
  }

  const cities = data.map((users) => users.address.city);

  const filterData = data
    .filter((users) => {
      return users?.name?.toUpperCase().includes(search.toUpperCase());
    })
    .filter((users) => {
      return users?.address?.city.includes(city);
    })
    .sort((a, b) => {
      if (Sort === "asc") {
        return a.username.localeCompare(b.username);
      } else if (Sort === "desc") {
        return b.username.localeCompare(a.username);
      } else {
        return 0;
      }
    });

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4">
          <input
            type="search"
            className="form-control"
            placeholder="Enter username"
            onChange={searchName}
          />
        </div>
        <div className="col-lg-4">
          <select className="form-select" onChange={selectCity}>
            <option value="">-- Select city --</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="col-lg-4">
          <select className="form-select" onChange={selectSort}>
            <option value="">-- Sort by username --</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>

      <table className="table table-hover table-striped table-success mt-5">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllFilterOperation;
```

Aap chahein toh isme search input ke aage “clear” button bhi laga sakte hain for better UX.

---

Kya aapko ek visual UI wireframe bhi chahiye is layout ka?
