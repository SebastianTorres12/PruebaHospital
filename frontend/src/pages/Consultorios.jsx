import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ConsultorioList from '../components/ConsultorioList';
import ConsultorioForm from '../components/ConsultorioForm';

const Consultorios = () => {
  const [update, setUpdate] = useState(false);

  const handleSave = () => {
    setUpdate(!update);
  };

  return (
    <div className="main-container">
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink to="/citas" activeClassName="active">
              Citas
            </NavLink>
          </li>
          <li>
            <NavLink to="/consultorios" activeClassName="active">
              Consultorios
            </NavLink>
          </li>
          <li>
            <NavLink to="/medicos" activeClassName="active">
              Medicos
            </NavLink>
          </li>
          <li>
            <NavLink to="/pacientes" activeClassName="active">
              Pacientes
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Gestión de Consultorios</h1>
        <div className="consultorio-form">
          <ConsultorioForm onSave={handleSave} />
        </div>
        <div className="consultorio-list">
          <ConsultorioList key={update} />
        </div>
      </div>
    </div>
  );
};

export default Consultorios;
