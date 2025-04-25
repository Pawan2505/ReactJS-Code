
React me forms use hote hain user input lene ke liye- jaise login form, registration form feedback form etc.

In traditional HTML, input field  manage their own state. lekin react me humko yeh state react component ke andar control karna hota hai - isse bolte hai Controlled Components.

Agar hum input ki value ko directly DOM se lete hain (without state), toh use bolte hai uncontrolled Components.


Controlled Components :

1. React useState() se input ka data manage karta hai.
2. Input field ki value attribute hoti hai jo state se linked hoti hai.
3. Har change pr onchange() event update karta hai state



Uncontrolled Components : 

1. React state use nahi hoti.
2. Hum useRef() hook se input field ka direct access lete hai
3. Yeh simpler hota hai chhoti application ke liye.



Controlled :
1. Value stored -> React state (useState())
2. Update onChange -> har baar hota hai
3. Suitable for -> Complex logic , validation



Uncontrolled : 
1. Value stored -> DOM (ref.current.value)
2. Update onChange -> sirf jab read karna ho tab hota hai baar baar nhi hota
3. Suitable for -> Simple forms, read-only