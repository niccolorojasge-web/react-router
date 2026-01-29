import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage"
import Whoweare from "./pages/whoweare"
import Productlist from "./components/productlist"
import Layout from "./layout/Layout"
import Productcaracter from "./components/Productcaracter"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/who-weare" element={<Whoweare />} />
            <Route path="/product-list">
              <Route index element={<Productlist />} />
              <Route path=":id" element={<Productcaracter />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
