import Table from "react-bootstrap/Table";

export default function Tabledata({ alldataList, homeWorld }) {
  const allData = Promise.all([alldataList, homeWorld]);
  return (
    <>
      <Table striped bordered hover className="project--table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Mass</th>
            <th>HomeWorld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((allData) => (
            <tr key={allData.name}>
              <td>{allData.name}</td>
              <td>{allData.birth_year}</td>
              <td>{allData.height}</td>
              <td>{allData.mass}</td>
              {/* make calls on the data being returned */}
              {/* promise.all, get request to homeworld */}
              <td>{}</td>
              <td>{allData.species}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
