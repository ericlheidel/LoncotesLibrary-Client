import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MaterialList from "./components/materials/MaterialList"
import MaterialDetails from "./components/materials/MaterialDetails"
import CreateMaterial from "./components/materials/CreateMaterial"
import { PatronsList } from "./components/patrons/PatronsList.jsx"
import { PatronDetails } from "./components/patrons/PatronDetails.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronsList />} />
          <Route path=":id" element={<PatronDetails />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
