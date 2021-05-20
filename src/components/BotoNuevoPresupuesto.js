import React from 'react';

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
 
export default BotonNuevoPresupuesto;
