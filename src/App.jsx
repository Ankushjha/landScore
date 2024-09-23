import { Route, Routes } from "react-router-dom"
import PropertyListings from "./PropertyListing/Farmlands/PropertyListings"
import ListViewSearch from "./PropertyListing/Farmlands/ListViewSearch"
import MapViewSearch from "./PropertyListing/Farmlands/MapViewSearch"
import PublicNavbar from "./Navbar/PublicNavbar"
import LandPage from "./PropertyListing/Farmlands/Land/LandPage"
import SubmitFeedback from "./PropertyListing/Farmlands/Land/SubmitFeedback"
import Login from "./Login"
import Navbar from "./Admin/AddNewListing/Navbar"
import AddNewListing from "./Admin/AddNewListing/AddNewListing"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PublicNavbar />}>
          <Route path="/" element={<PropertyListings />} />
          <Route path="/land" element={<LandPage />} />
          <Route path="/submit-feedback" element={<SubmitFeedback />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route element={<Navbar />}>
          <Route path="/add-new-listing" element={<AddNewListing/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
