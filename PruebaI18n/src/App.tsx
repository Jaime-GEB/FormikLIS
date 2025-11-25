import './i18n/config';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Comp3 from './components/Comp3';
import { useState } from 'react';

function App() {
  const [idioma, setIdioma] = useState('en')
  const changeLang =()=>{
    setIdioma(idioma == 'es' ? 'en' : 'es')
  }

  
  return (
    <>
      <button onClick={changeLang} >{idioma}</button>

      <div className="App">
        <Comp1 lang={idioma}/>
        <hr />
        <Comp2 lang={idioma}/>
        <hr />
        <Comp3 lang={idioma}/>
      </div>
    </>
  );
}

export default App;