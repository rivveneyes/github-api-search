import React from "react";

const Alert = ({ alert }) => {
  return alert !== null && <div className={`${alert.type}`}>{alert.msg}</div>;
};

export default Alert;
