import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PacienteList from '../components/PacienteList';
import PacienteForm from '../components/PacienteForm';

const Pacientes = () => {
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
        <h1>Gestión de Pacientes</h1>
        <div className="consultorio-form">
          <PacienteForm onSave={handleSave} />
        </div>
        <div className="consultorio-list">
          <PacienteList key={update} />
        </div>
      </div>
    </div>
  );
};

export default Pacientes;
