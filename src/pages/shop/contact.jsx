import React from 'react';



const Contact = () => {
  const data = {
    name :'VIGNESH (Logistic Manager)',
    email :'vigneshwebdevelopr@gmail.com',
    phone: '8********212'
  }
  return (
    <div className="contact-card">
      <h2>{data.name}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </div>
  );
};

export  {Contact};
