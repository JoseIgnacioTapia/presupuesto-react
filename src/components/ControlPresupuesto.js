import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers';
import Error from './Error';
import PropTypes from 'prop-types';


const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: $ { presupuesto }
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante: $ { restante }
      </div>

      {
        (restante < 0) 
        ? 
        <Error mensaje="🚨 El Gasto excedió el Presupuesto"/> 
        : 
        null
      }
    </Fragment>
  );
}
 
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;
