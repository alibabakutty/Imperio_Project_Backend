import { BrowserRouter, Route, Routes } from "react-router-dom"

import RegionMaster from "./components/RegionMaster"
import Gateway from "./components/Gateway"
import ExecutiveMaster from "./components/ExecutiveMaster"
import DistributorMaster from "./components/DistributorMaster"
import Productmaster from "./components/Productmaster"
import ListofMasters from "./components/ListofMasters"
import RegionMasterAddedCheck from "./message/RegionMasterAddedCheck"
import ExecutiveMasterAddedCheck from "./message/ExecutiveMasterAddedCheck"
import DistributorMasterAddedCheck from "./message/DistributorMasterAddedCheck"
import ProductMasterAddedCheck from "./message/ProductMasterAddedCheck"

import './assets/css/font.css'
import DisplayOFMasters from "./components/DisplayOFMasters"
import RegionFilter from "./components/RegionFilter"


function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* http://localhost:4000 */}
          <Route path="/" element ={<Gateway />} />

          {/* http://localhost:4000/list */}
          <Route path="/list" element ={<ListofMasters />} />

          {/* http://localhost:4000/region */}
          <Route path="/region" element = {<RegionMaster />} />
          
          {/* http://localhost:4000/executive */}
          <Route path="/executive" element = {<ExecutiveMaster />} />

          {/* http://localhost:4000/distributor */}
          <Route path="/distributor" element = {<DistributorMaster />} />
          
         {/* http://localhost:4000/product */}
         <Route path="/product" element = {<Productmaster />} />


          {/* http://localhost:4000/display */}
          <Route path="/display" element = {<DisplayOFMasters /> } />

          {/* http://localhost:4000/regionFilter */}
          <Route path="/regionFilter" element = {<RegionFilter /> } />
          
         {/* http://localhost:4000/addedRegion */}
         <Route path="/addedRegion" element = {<RegionMasterAddedCheck />} />

         {/* http://localhost:4000/addedExecutive */}
         <Route path="addedExecutive" element = {<ExecutiveMasterAddedCheck />} />

         {/* http://localhost:4000/addedDistributor */}
         <Route path="addedDistributor" element = {<DistributorMasterAddedCheck />} />

         {/* http://localhost:4000/addedDistributor */}
         <Route path="addedProduct" element = {<ProductMasterAddedCheck />} />
          
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App