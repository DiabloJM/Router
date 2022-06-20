import React from 'react';
import './Home.css';

function Home(props) {
    return (
         <div className="Curriculum">
            <h1 className="Title">Curriculum Vitae</h1>
            <h2 className="Subtitle">Objetivos Profesionales</h2>
            <p className="Text">Desempeñe como programador de videojuegos y diseñador de entornos inmersivos</p>
            <h2 className="Subtitle">Perfil Personal</h2>
            <p className="Text">Tengo años de experiencia en el estudio de ambiente universitario</p>
            <h2 className="Subtitle">Experiencia Laboral</h2>
            <p className="Text">Fui un excelente cajero de Oxxo por 6 meses</p>
            <h2 className="Subtitle">Formación Académica</h2>
            <p className="Text">La UNIAT no es la gran verga pero me esfuerzo por salir adelante</p>
        </div> 
    );
}

export default Home;