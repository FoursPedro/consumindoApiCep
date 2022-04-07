import './App.css';
import Container from '@mui/material/Container';

import { useState } from 'react'

import Header from './componentes/gerais/Header'
import Busca from './componentes/Busca'
import Resultado from './componentes/Resultado'
import Footer from './componentes/gerais/Footer'

function App() {
  const [cep, setCep] = useState()

  return (
    <div className="App">
      <Container>
        <Header/>

        <main>
          <Busca setCep={setCep}/>
          {cep !== undefined && <Resultado cep={cep}/>}
        </main>
        
        <Footer/>
      </Container>
    </div>
  );
}

export default App;