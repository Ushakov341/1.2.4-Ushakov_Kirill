import React from 'react';

function Button(props) {
  if (props.isReserved) {
    return <span className="button reserved">Зарезервирован</span>;
  }

  return (
    <button className="button" disabled={props.disabled}>
      {props.children || 'Забронировать'}
    </button>
  );
}

export default Button;
