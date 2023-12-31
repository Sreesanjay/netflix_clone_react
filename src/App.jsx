import NavBar from "./components/NavBar/NavBar"
import "./App.css" 
import Banner from "./components/Banner/Banner"
import RowPost from "./components/RowPost/RowPost"
import {originals,actions,popular} from "./constants/postUrls"
export default function App() {
  return (
    <div className="container">
      <NavBar/>
      <Banner/>
      <RowPost title= "Netflix Originals" url = {originals}/>
      <RowPost title= "Popular Movies" url = {popular}/>
      <RowPost title= 'Action' url = {actions} isSmall/>
    </div>
  )
}
