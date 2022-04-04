import React from "react";
import Table from "react-bootstrap/Table";

export default function Tabledata({ starWarsData }) {
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
        <tbody>
          <tr>
            <td>{starWarsData.name}</td>
            <td>{starWarsData.birth_year}</td>
            <td>{starWarsData.height}</td>
            <td>{starWarsData.weight}</td>
            <td>{starWarsData.homeworld}</td>
            <td>{starWarsData.species}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
