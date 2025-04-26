### useForm() kya karta hai?

useForm ek React Hook hai, jo react-hook-form library ka part hai.

Jab hum useForm() ko call karte hain, yeh ek object deta hai — jisme useful functions aur properties hote hain form manage karne ke liye.


Example:

### useForm() se milte hain:

1. register

2. handleSubmit

3. errors

4. reset etc.



## register kya karta hai?

register function ka kaam hai input fields ko form ke system ke andar register karna.

Jab hum kisi input field me register('name') lagate hain, tab React Hook Form us field ko track karne lagta hai — jaise value etc.

## Example:

<input {...register('email')} />


Yahan email input automatically form ke state me aa jaata hai.

##  handleSubmit kya karta hai?

handleSubmit ek wrapper function hai jo

Form ke submit hone ke baad data ko validate karta hai.

Agar validation successful hai, toh humara apna function call karta hai (jo hum pass karte hain).

Agar validation me error hota hai, toh error dikhaata hai.


## Example:

<form onSubmit={handleSubmit(onSubmit)}>


onSubmit ek function hai jo form ka data receive karega after validation.


