import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import './Resultado.module.css'

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const card = (
  <>
    <section>
        <div> <h3>Dados do cep: </h3> <label>01001-000 </label> </div>

        <ul>
          <li> <span>logradouro: </span> Praça da Sé </li>
          <li> <span>complemento: </span> lado ímpar</li>
          <li> <span>bairro: </span> Sé </li> 
          <li> <span>localidade: </span> São Paulo</li>
          <li> <span>uf: </span>SP </li>
          <li> <span>ibge: </span> 3550308 </li> 
          <li> <span>gia: </span> 1004 </li>
          <li> <span>ddd: </span> 11 </li>
          <li> <span>siafi: </span> 7107 </li>
        </ul>
    </section>
  </>
);

export default function Resultado() {
  return (
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
