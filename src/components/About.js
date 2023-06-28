import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function About() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setItem(response.data);
        console.log(response.data); // Display the product information in the console
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div>
      <h1>About Page</h1>
      {item ? (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default About;

