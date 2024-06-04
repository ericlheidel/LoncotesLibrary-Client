import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOverdueCheckouts } from "../../data/checkoutData.js"
import { getPatronById } from "../../data/patronsData.js"
import { Table } from "reactstrap"

export const PatronDetails = () => {
  const [overdueCheckouts, setOverdueCheckouts] = useState([])
  const [patron, setPatron] = useState([])
  const [userOverdueCheckouts, setUserOverdueCheckouts] = useState([])

  const { id } = useParams()

  useEffect(() => {
    getOverdueCheckouts().then(setOverdueCheckouts)
  }, [])

  useEffect(() => {
    getPatronById(id).then(setPatron)
  }, [])

  useEffect(() => {
    // if (overdueCheckouts) {
    const userOverdueCheckouts = overdueCheckouts.filter(
      (c) => c.patronId === patron.id
    )
    setUserOverdueCheckouts(userOverdueCheckouts)
    // }
  }, [overdueCheckouts])

  // const GetOverdueCheckoutCount = () => {
  //   const overdueCheckoutCount = overdueCheckouts.filter(
  //     (c) => c.patronId === patron.id
  //   )
  //   return overdueCheckoutCount.length
  // }

  if (!patron) {
    return <div>User does not exist...</div>
  }

  return (
    <div className="container">
      <h2>
        {patron.firstName} {patron.lastName}
      </h2>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Address</th>
            <td>{patron.address}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{patron.email}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{patron.isActive === true ? "Active" : "Not Active"}</td>
          </tr>
          <tr>
            <th scope="row">Checkouts</th>
            <td>{patron.checkouts?.length}</td>
          </tr>
          <tr>
            <th scope="row">Overdue Checkouts</th>
            <td>{userOverdueCheckouts?.length}</td>
          </tr>
        </tbody>
      </Table>
      <h5>Checkouts</h5>
      {patron.checkouts?.length ? (
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Genre</th>
              <th>Genre</th>
            </tr>
          </thead>
        </Table>
      ) : (
        <p>User has no current checkouts...</p>
      )}
    </div>
  )
}
