import { hot } from 'react-hot-loader';
import React from 'react';
import ReactTable from 'react-table';
import selectTable from 'react-table/lib/hoc/selectTable';

import 'react-table/react-table.css';

const App = () => {
  const data = [{
    name: 'John',
  }, {
    name: 'Mary'
  }]
  const columns = [{
    Header: 'Name',
    accessor: 'name',
  }]
  const Table = selectTable(ReactTable);

  return <Table data={data} columns={columns} />;
};

export default hot(module)(App);