import { Route, Routes } from "react-router-dom"
import PropertyListings from "./PropertyListing/Farmlands/PropertyListings"
import ListViewSearch from "./PropertyListing/Farmlands/ListViewSearch"
import MapViewSearch from "./PropertyListing/Farmlands/MapViewSearch"
import PublicNavbar from "./Navbar/PublicNavbar"
import LandPage from "./PropertyListing/Farmlands/Land/LandPage"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PublicNavbar />}>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/land" element={<LandPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
