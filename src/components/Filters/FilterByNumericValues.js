import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import { columns, comparisonMethods } from '../../utils/data';

const FilterByNumericValues = () => {
  const { setFilterByNumericValue } = useContext(Context);

  const [column, setColumn] = useState('population');
  const [comparison, setcomparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterByNumericValue({
      column,
      comparison,
      value,
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
      >
        {
          columns.map((item) => <option key={ item }>{ item }</option>)
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setcomparison(target.value) }
      >
        {
          comparisonMethods.map((item) => <option key={ item }>{ item }</option>)
        }
      </select>
      <label htmlFor="value">
        Valor:
        {' '}
        <input
          data-testid="value-filter"
          type="number"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        data-testid="button-filter"
        type="submit"
      >
        Filtrar
      </button>
    </form>
  );
};

export default FilterByNumericValues;
