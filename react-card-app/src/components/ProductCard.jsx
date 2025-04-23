import React from 'react'

const ProductCard = ({image,title,price,description}) => {

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        width: "250px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgb(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3>{title}</h3>
          <p style={{ fontWeight: 'bold' }}>₹ {price}</p>
          <p>{description}</p>
          <button style={{backgroundColor:'#007bff', color:'#fff', padding:'8px 12px', border:'none', borderRadius:'4px', cursor:'pointer', marginTop:'8px'}}>Add to Cart</button>
    </div>
  );
}

export default ProductCard