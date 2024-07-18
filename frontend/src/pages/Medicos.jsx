import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MedicoList from '../components/MedicoList';
import MedicoForm from '../components/MedicoForm';

const Medicos = () => {
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
        <h1>Gestión de Medicos</h1>
        <div className="consultorio-form">
          <MedicoForm onSave={handleSave} />
        </div>
        <div className="consultorio-list">
          <MedicoList key={update} />
        </div>
      </div>
    </div>
  );
};

export default Medicos;
