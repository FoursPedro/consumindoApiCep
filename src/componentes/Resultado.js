import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './Resultado.module.css';

import { useState, useEffect } from 'react';
import { Axios } from '../services/configAxios';

function Resultado({ cep }) {

  //receber o cep
  //executar a consulta axios
  //armazenar o resultado em uma constante
  //interpolar a constante com html
  
  const [resultado, setResultado] = useState({});
  
  useEffect(() => {
    Axios.get(`/${cep}/json/`).then((response) => {setResultado(response.data);})
  }, [cep]);
  
  useEffect(() => {
    console.log("chegou no resultado " + cep);
    console.log(resultado);
  }, [resultado])

  return (
    <Box sx={{ minWidth: 500 }}> 
      <Card variant="outlined">
        <section>
          <div> <h3>Dados do cep: </h3> <label></label> </div>
          
          <ul>
            <li> <span>logradouro: </span> {resultado.logradouro} </li>
            <li> <span>complemento: </span> {resultado.complemento} </li>
            <li> <span>bairro: </span> {resultado.bairro} </li> 
            <li> <span>localidade: </span> {resultado.localidade} </li>
            <li> <span>uf: </span> {resultado.uf} </li>
            <li> <span>ibge: </span> {resultado.ibge} </li> 
            <li> <span>gia: </span> {resultado.gia} </li>
            <li> <span>ddd: </span> {resultado.ddd} </li>
            <li> <span>siafi: </span> {resultado.siafi} </li>
          </ul>
        </section>
      </Card>
    </Box>
  );
}

export default Resultado;