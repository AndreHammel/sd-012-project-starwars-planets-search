import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const Table = () => {
  const { data, key } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          {
            key.map((keys, index) => (
              <th key={ index }>{ keys }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map(({
            name,
            rotation_period: rotationPeriod,
            orbital_period: orbitalPeriod,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water: surfaceWater,
            population,
            films,
            created,
            edited,
            url,
          }, index) => (
            <tr key={ index }>
              <td>{ name }</td>
              <td>{ rotationPeriod }</td>
              <td>{ orbitalPeriod }</td>
              <td>{ diameter }</td>
              <td>{ climate }</td>
              <td>{ gravity }</td>
              <td>{ terrain }</td>
              <td>{ surfaceWater }</td>
              <td>{ population }</td>
              <td>{ films }</td>
              <td>{ created }</td>
              <td>{ edited }</td>
              <td>{ url }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
