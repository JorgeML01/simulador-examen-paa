import React from "react";
import data from "./majors.json";
import "./styles.css";
import "../LeaderboardTablePAM/styles.css";

function BoardMajors() {
  return (
    <div id="majors-container">
      <h1 id="majors-header">Puntuación mínima para ser admitido</h1>
      <table className="majors-table">
        <thead>
          <tr>
            <th>Carrera</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((major, index) => (
            <tr key={index}>
              <td className="career">{major.carrera}</td>
              <td className="points">{major.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BoardMajors;
