import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import useFetchPlanets from '../hooks/useFetchPlanets';

function Provider({ children }) {
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [data, isFetching] = useFetchPlanets();

  const context = {
    isFetching,
    data,
    filteredPlanets,
    setFilteredPlanets,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
