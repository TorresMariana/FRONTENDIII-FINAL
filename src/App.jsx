
import { Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Detail from "./Routes/Detail";

import { useDentistStates } from "./Components/utils/global.context";


function App() {
  return (
      <div className="App">

          <Navbar/>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path={routes.home} element= {<Home/>}/>
            <Route path={routes.details} element= {<Detail/>}/>
            <Route path={routes.contact} element={<Contact />}/>
            <Route path={routes.favs} element={<favs />}/>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
