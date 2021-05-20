import React from 'react';
import PropTypes from 'prop-types';

const BotonNuevoPresupuesto = ({ actualizarBoton, actualizarPregunta }) => {

  const definirNuevoPresupuesto = e => {
    e.preventDefault();
    actualizarBoton(false);
    actualizarPregunta(true);
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
