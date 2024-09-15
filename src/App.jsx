import { Route, Routes } from "react-router-dom"
import HeadBanner from "./PropertyListing/HeadBanner/HeadBanner"
import PublicNavbar from "./Navbar/PublicNavbar"
import PropertyListings from "./PropertyListing/Farmlands/PropertyListings"

function App() {

  return (
    <>
      <PropertyListings>
        <Routes>
          <Route path="farmland" element={<PropertyListings />} />
        </Routes>
      </PropertyListings>
    </>
  )
}

export default App
