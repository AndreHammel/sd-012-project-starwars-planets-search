import React, { useContext } from 'react';
import MyContext from '../context/context';

function Table() {
  const { dados } = useContext(MyContext);
  return (
    <table>
      <theader>
        <tr>
          <th>name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </theader>
      <tbody>
        {console.log(dados)}
        {dados.map((dado) => (
          <tr key={ dado.name }>
            <td>{dado.name}</td>
            <td>{dado.rotation_period}</td>
            <td>{dado.orbital_period}</td>
            <td>{dado.diameter}</td>
            <td>{dado.climate}</td>
            <td>{dado.gravity}</td>
            <td>{dado.terrain}</td>
            <td>{dado.surface_water}</td>
            <td>{dado.population}</td>
            <td>{dado.films}</td>
            <td>{dado.created}</td>
            <td>{dado.edited}</td>
            <td>{dado.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
