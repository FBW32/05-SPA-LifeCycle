import React from "react";
import "./Style.css";
export default function User(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>
        <a>{props.email}</a>
      </td>
    </tr>
  );
}
