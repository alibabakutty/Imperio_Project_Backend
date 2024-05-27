import { BrowserRouter, Route, Routes } from "react-router-dom"

import RegionMaster from "./components/RegionMaster"
import Gateway from "./components/Gateway"
import ExecutiveMaster from "./components/ExecutiveMaster"
import DistributorMaster from "./components/DistributorMaster"
import Productmaster from "./components/Productmaster"
import ListofMasters from "./components/ListofMasters"






function App() {
  

  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* http://localhost:4001 */}
          <Route path="/" element ={<Gateway />} />

          {/* http://localhost:4001/list */}
          <Route path="/list" element ={<ListofMasters />} />


          {/* http://localhost:4001/region */}
          <Route path="/region" element = {<RegionMaster />} />
          
          {/* http://localhost:4001/executive */}
          <Route path="/executive" element = {<ExecutiveMaster />} />

          {/* http://localhost:4001/distributor */}
          <Route path="/distributor" element = {<DistributorMaster />} />
          
         {/* http://localhost:3000/product */}
         <Route path="/product" element = {<Productmaster />} />
          
        </Routes>
      </BrowserRouter>
      
      

    </>
  )
}

export default App