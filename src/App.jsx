import { BrowserRouter, Route, Routes } from "react-router-dom"

import RegionMaster from "./components/RegionMaster"
import Gateway from "./components/Gateway"
import ExecutiveMaster from "./components/ExecutiveMaster"
import DistributorMaster from "./components/DistributorMaster"
import Productmaster from "./components/Productmaster"
import ListofMasters from "./components/ListofMasters"
import RegionMasterAddedCheck from "./message/RegionMasterAddedCheck"






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

         {/* http://localhost:4000/added */}
         <Route path="/added" element = {<RegionMasterAddedCheck />} />
          
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App