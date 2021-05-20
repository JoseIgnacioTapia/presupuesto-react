import React from 'react';
import PropTypes from 'prop-types';

const BotonNuevoPresupuesto = ({ actualizarBoton, actualizarPregunta, guardarError, guardarPresupuesto, guardarRestante }) => {

  const definirNuevoPresupuesto = e => {
    e.preventDefault();
    actualizarBoton(false);
    actualizarPregunta(true);
    guardarPresupuesto(0);
guardarRestante(0);
    guardarError(false)
  };

  return (
    <form
    onSubmit={definirNuevoPresupuesto}
    >
      <button
        type='submit'
        className="button-primary u-full-width"
      >
        Definir Nuevo Presupuesto
      </button>
    </form>
  )

};

BotonNuevoPresupuesto.prototype = {
  actualizarBoton: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
}
 
export default BotonNuevoPresupuesto;
