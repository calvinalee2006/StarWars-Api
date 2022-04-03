import React from "react";
import Table from "react-bootstrap/Table";

export default function Tabledata() {
  return (
    <>
      <Table striped bordered hover className="project--table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Weight</th>
            <th>HomeWorld</th>
            <th>Species</th>
          </tr>
        </thead>
        {/* <tr>
          <td>setStarWarsData('Name')</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr> */}
      </Table>
    </>
  );
}
