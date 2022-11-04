import Compclase from "./Componets/Compclase";
import Compfuncion from "./Componets/Compfuncion";
import Contador from "./Componets/Contador";
import Count from "./Componets/Count";
import Estados from "./Componets/Estados";
import Eventos from "./Componets/Eventos";
import { Formulario } from "./Componets/Formulario";
import Listas from "./Componets/Listas";
import Parrafo from "./Componets/Parrafo";
import Variables from "./Componets/Variables";

function App() {
  return (
    <div className="App">
     <Formulario></Formulario>
     <Compclase></Compclase>
     <Compfuncion></Compfuncion>
     <Parrafo></Parrafo>
     <Variables></Variables>
     <Eventos></Eventos>
     <Estados></Estados>
     <Contador></Contador>
    <Count></Count>
     <Listas></Listas>
    </div>
  );
}

export default App;
