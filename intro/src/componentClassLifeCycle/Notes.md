## React Class Component – Lifecycle

### What is Lifecycle?
- Lifecycle means the different stages of a component: when it **loads**, **updates**, or **removes** from the screen.
- These steps work **automatically** in class components.

---

### 3 Phases of Lifecycle:

1. **Mounting** – when the component loads for the first time  
2. **Updating** – when the component changes (like state or props)  
3. **Unmounting** – when the component is removed from the screen

---

## Important Lifecycle Methods:

### 1. `componentDidMount()`
- When it runs: after the first render  
- Used for: API calls, starting timer, getting data  
- Example:
```js
componentDidMount() {
  console.log("Component loaded");
}
```

---

### 2. `componentDidUpdate(prevProps, prevState)`
- When it runs: after state or props change  
- Used for: checking what changed, updating logic  
- Example:
```js
componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log("Count changed");
  }
}
```

---

### 3. `componentWillUnmount()`
- When it runs: before the component is removed  
- Used for: clean-up work like stopping timer, saving memory  
- Example:
```js
componentWillUnmount() {
  clearInterval(this.timer);
  console.log("Component removed");
}
```

---

## Real Life Use Cases:
- Creating a counter or timer  
- Getting data from an API  
- Adding or removing event listeners

---

## Note:

| Method                  | When it runs                | Why we use it               |
|-------------------------|-----------------------------|-----------------------------|
| `componentDidMount()`   | After first render          | Start setup (timer, API)    |
| `componentDidUpdate()`  | After state/props change    | Handle updates              |
| `componentWillUnmount()`| Before removing component   | Clean-up (like stop timer)  |
