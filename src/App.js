import { Link, Route, Routes } from "react-router-dom";
import CheckPage from "./pages/CheckPage";
import DetailPage from "./pages/DetailPage";


function App() {
    return(
      // <div className="container">
      //     <CheckPage/>
      // </div>
      <>
      <Link to='/'>Home</Link>
      <Routes>
        <Route path="/" element={<CheckPage/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
      </>
    )
}

export default App;
