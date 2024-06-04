import { useEffect, useState } from "react"
import { getPatrons } from "../../data/patronsData.js"
import { Table } from "reactstrap"
import { Link, useParams } from "react-router-dom"

export const PatronsList = () => {
  const [patrons, setPatrons] = useState([])

  useEffect(() => {
    getPatrons().then(setPatrons)
  }, [])

  return (
    <div className="container">
      <div className="sub-menu bg-light">
        <h4>Patrons</h4>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Active?</th>
          </tr>
        </thead>
        <tbody>
          {patrons
            .sort((a, b) => a.id - b.id)
            .map((p) => (
              <tr key={`patrons-${p.id}`}>
                <th scope="row">{p.id}</th>
                <td>
                  <Link to={`/patrons/${p.id}`}>
                    {p.firstName} {p.lastName}
                  </Link>
                </td>
                <td>{p.isActive === true ? "Active" : "Not Active"}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}
