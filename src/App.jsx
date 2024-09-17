import { Route, Routes } from "react-router-dom"
import PropertyListings from "./PropertyListing/Farmlands/PropertyListings"
import ListViewSearch from "./PropertyListing/Farmlands/ListViewSearch"
import MapViewSearch from "./PropertyListing/Farmlands/MapViewSearch"
import PublicNavbar from "./Navbar/PublicNavbar"
import LandPage from "./PropertyListing/Farmlands/Land/LandPage"
import SubmitFeedback from "./PropertyListing/Farmlands/Land/SubmitFeedback"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PublicNavbar />}>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/land" element={<LandPage />} />
          <Route path="/submit-feedback" element={<SubmitFeedback />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
