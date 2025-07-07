import React from 'react';
import { carsList } from '../cars.const';
import Button from './Button';

function TableItem() {
  return (
    <>
      {carsList.length === 0 ? (
        <div className="emptyList">Автомобили не найдены</div>
      ) : (
        carsList.map((car, index) => (
          <div className="tableRow" key={index}>
            <div className="brand">
              {car.brand} {car.model}
            </div>
            <div className="price">
              {car.price} {car.сurrency}
            </div>
            <div className="year">{car.year}</div>
            <select className="color">
              {car.color.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <Button isReserved={car.isReserved} disabled={car.isReserved} />
          </div>
        ))
      )}
    </>
  );
}

export default TableItem;
