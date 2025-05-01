##  Local Storage :

1. Local Storage browser ki ek memory hoti hai.
2. Isme hum small data (jaise text ya string) permanently save kar sakte hain.
3. Jab tak user khud clear nahi karta ya browser ki settings se delete nahi hota, tab tak data safe rehta hai.
4. Local Storage mein data key-value pair ke form mein store hota hai.
5. Page refresh karne ya browser band karne ke baad bhi Local Storage ka data rehta hai.
6. Local Storage ko JavaScript se handle karte hain.


## Important JavaScript Methods:

1. localStorage.setItem('key', 'value') => use : Data store karne ke liye
2. localStorage.getItem('key') => use : Data read karne ke liye
3. localStorage.removeItem('key') => use : Specific data delete karne ke liye
4. localStorage.clear() => use : Saara data ek saath delete karne ke liye



<!-- Session Storage  -->

1. Session Storage bhi LocalStorage ki tarah hi kaam karta hai, lekin isme data sirf ek session ke liye hota hai. Jab browser tab band hota hai, to sessionStorage ka data bhi delete ho jata hai.

<!-- Key Differences: -->

1. Local Storage: Data permanent hota hai (tab tak nahi delete hota jab tak aap manually remove na karen).
2. Session Storage: Data session-specific hota hai (jab browser tab band hota hai, data automatically clear ho jata hai)