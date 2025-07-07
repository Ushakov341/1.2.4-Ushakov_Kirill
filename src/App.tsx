import React from 'react';
import './App.css';
import { carsList } from './cars.const';
import TableItem from './components/TableItem';
import './components/Table.css';
import TableTitle from './components/TableTitle.tsx';

function App() {
  return (
    <>
      <div className="table">
        <TableTitle />
        <TableItem />
      </div>
    </>
  );
}

export default App;
