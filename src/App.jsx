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
import DisplayRegionMaster from "./components/DisplayRegionMaster"
import ExecutiveFilter from "./components/ExecutiveFilter"
import DisplayExecutiveMaster from "./components/DisplayExecutiveMaster"
import DistributorFilter from "./components/DistributorFilter"
import DisplayDistributorMaster from "./components/DisplayDistributorMaster"
import ProductFilter from "./components/ProductFilter"
import DisplayProductMaster from "./components/DisplayProductMaster"
import RegionAlter from "./components/RegionAlter"
import ExecutiveAlter from "./components/ExecutiveAlter"
import DistributorAlter from "./components/DistributorAlter"
import ProductAlter from "./components/ProductAlter"
import AlterOfMasters from "./components/AlterOfMasters"
import AlterRegionMaster from "./components/AlterRegionMaster"


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

          
         {/* http://localhost:4000/addedRegion */}
         <Route path="/addedRegion" element = {<RegionMasterAddedCheck />} />

         {/* http://localhost:4000/addedExecutive */}
         <Route path="addedExecutive" element = {<ExecutiveMasterAddedCheck />} />

         {/* http://localhost:4000/addedDistributor */}
         <Route path="addedDistributor" element = {<DistributorMasterAddedCheck />} />

         {/* http://localhost:4000/addedDistributor */}
         <Route path="addedProduct" element = {<ProductMasterAddedCheck />} />

         {/* http://localhost:4000/display */}
         <Route path="/display" element = {<DisplayOFMasters /> } />

          {/* http://localhost:4000/regionFilter */}
          <Route path="/regionFilter" element = {<RegionFilter /> } />

          {/* http://localhost:4000/executiveFilter */}
          <Route path="/executiveFilter" element={<ExecutiveFilter />} />

          {/* http://localhost:4000/distributorFilter */}
          <Route path="/distributorFilter" element={<DistributorFilter />} />

          {/* http://localhost:4000/productFilter */}
          <Route path="/productFilter" element={<ProductFilter />} />

          {/* http://localhost:4000/display */}
          <Route path="/alter" element = {<AlterOfMasters />} />

          {/* http://localhost:4000/regionAlter */}
          <Route path="/regionAlter" element={<RegionAlter />} />

          {/* http://localhost:4000/executiveAlter */}
          <Route path="/executiveAlter" element={<ExecutiveAlter />} />

          {/* http://localhost:4000/distributorAlter */}
          <Route path="/distributorAlter" element={<DistributorAlter />} />

          {/* http://localhost:4000/productAlter */}
          <Route path="/productAlter" element={<ProductAlter />} />


         {/* http://localhost:4000/displayRegion */}
         <Route path="displayRegion/:regionMasterId" element = {<DisplayRegionMaster />} />

         {/* http://localhost:4000/displayExecutive */}
         <Route path="displayExecutive/:executiveCode" element = {<DisplayExecutiveMaster />} />

         {/* http://localhost:4000/displayDistributor */}
         <Route path="displayDistributor/:distributorCode" element={<DisplayDistributorMaster />} />

         {/* http://localhost:4000/displayProduct */}
         <Route path="displayProduct/:productCode" element={<DisplayProductMaster />} />

         {/* http://localhost:4000/alterRegionMaster */}
         <Route path="alterRegionMaster/:regionMasterId" element = {<AlterRegionMaster />} />


          
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App