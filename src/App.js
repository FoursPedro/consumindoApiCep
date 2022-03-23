import './App.css';

import Footer from './componentes/gerais/Footer'
import Header from './componentes/gerais/Header'
import Busca from './componentes/Busca'
import Resultado from './componentes/Resultado'

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <Busca/>

        <div>
          <Resultado/>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default App;