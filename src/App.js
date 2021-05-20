import { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import BotonNuevoPresupuesto from './components/BotoNuevoPresupuesto';

function App() {

  // Gastos en el Local Storage
  let gastosIniciales = JSON.parse(localStorage.getItem('gastos'));
  let restanteInicial = JSON.parse(localStorage.getItem('restante'));
  let presupuestoInicial = JSON.parse(localStorage.getItem('presupuesto'));
  if (!gastosIniciales) {
    gastosIniciales = [];
  }
  if (!restanteInicial) {
    restanteInicial = [];
  }
  if (!presupuestoInicial) {
    presupuestoInicial = [];
  }

  // Definir state
  const [ presupuesto, guardarPresupuesto ] = useState(presupuestoInicial);
  const [ restante, guardarRestante ] = useState(restanteInicial);
  const [ mostrarpregunta, actualizarPregunta ] = useState(false);
  const [ mostrarBoton, actualizarBoton ] = useState(true);
  const [ gastos, guardarGastos ] = useState(gastosIniciales);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      
      // Agrega el nuevo presupuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetear a False
      guardarCrearGasto(false);

    }
    // Guardar Gastos y Restante en Local Storage
    localStorage.setItem('gastos', JSON.stringify(gastos));
    localStorage.setItem('restante', JSON.stringify(restante));
  }, [gasto, crearGasto, gastos, restante])

  // UseEffect que guarda el Presupuesto
  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto));
  }, [presupuesto])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          { mostrarBoton ?
            <BotonNuevoPresupuesto
              actualizarBoton={actualizarBoton}
              actualizarPregunta={actualizarPregunta}
            />
            :
            null
          }
          { mostrarpregunta ?
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
              actualizarBoton={actualizarBoton}
              presupuesto={presupuesto}
            />
            :
            null
          }
            
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>

            <div className="one-half column">
              <Listado
                gastos={gastos}
              />

              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
