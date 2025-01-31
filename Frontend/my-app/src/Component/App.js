import { Outlet } from "react-router-dom";
import Footer1 from "./Footer1";
import Header1 from "./Header1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App()
{
    return (

        <>
       
       <Header1></Header1><br></br>
       {/* <Home></Home> */}
       <Outlet></Outlet>
       <Footer1></Footer1><br></br>
      
    
    </>
    
    )

}
export default App;