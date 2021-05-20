import React from 'react';
import PropTypes from 'prop-types';

const BotonNuevoPresupuesto = ({ actualizarBoton, actualizarPregunta, guardarError, guardarPresupuesto, guardarRestante, guardarGastos }) => {

  const definirNuevoPresupuesto = e => {
    e.preventDefault();
    actualizarBoton(false);
    actualizarPregunta(true);
    guardarPresupuesto(0);
    guardarRestante(0);
    guardarGastos([]);
    guardarError(false);
  };

  return (
    <form
    onSubmit={definirNuevoPresupuesto}
    >
      <button
        type='submit'
        className="button-primary u-full-width"
      >
        Definir Nuevo Presupuesto Semanal
      </button>
    </form>
  )

};

BotonNuevoPresupuesto.prototype = {
  actualizarBoton: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
  guardarError: PropTypes.func.isRequired,
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  guardarGastos: PropTypes.func.isRequired
}
 
export default BotonNuevoPresupuesto;
