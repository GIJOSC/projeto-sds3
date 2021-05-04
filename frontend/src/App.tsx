import Datatable from "components/DataTable"
import Footer from "components/Footer"
import NavBar from "components/NavBar"


function App() {
  return (
    <>
     <NavBar/>
    <div>
      <h1 className="text-primary"> Olá Mundo!</h1>
      <Datatable/>
    </div>
    <Footer/>
    
    </>
  );
}

export default App;
