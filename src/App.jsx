import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"
import Whoweare from "./pages/whoweare"
import Productlist from "./components/productlist"
import Layout from "./layout/Layout"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
           <Route index element={<Homepage/>}/>
           <Route path="/product-list" element={<Productlist/>}/>
           <Route path="/who-weare" element={<Whoweare/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
