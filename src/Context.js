import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';

    export const CustomContext = createContext();

      export const Context = (props) => {

    const [product, setProducts] = useState([]);

    const navigate = useNavigate()

    const getAllProducts = () => {
    axios('http://localhost:8080/anime')
    .then(({data}) => setProducts(data))
    .catch((erros) => console.log(erros))
  }


  const value = {
    product, setProducts,
    getAllProducts
  }


  return <CustomContext.Provider value={ value }>
      {props.children}
    </CustomContext.Provider>
  
};

