import { useState } from "react"
import "./NavBar.css"
export default function NavBar() {
  const [isSearch,setIsSearch] = useState(false);
  const [searchKey,setSearchKey] = useState("");
  const handleSearchClick = ()=>{
    if(!isSearch) return setIsSearch(true)
    if(searchKey.length > 0){
      console.log(searchKey)
    }  
    setIsSearch(false)
  }
  const handleSearchInput = (e)=>{
    setSearchKey(e.target.value);
  }
  return (
    <div className="navbar">
      <div className="left-section">
        <img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        <ul className="nav-items">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My Lists</li>
        </ul>
      </div>
      <div className="right-section">
        <ul className="nav-items">
          {isSearch ?
            <li className="nav-search-container"><input className="nav-search-inp" onChange={(e)=>handleSearchInput(e)} type="text" />
              <button className="nav-search-button" onClick={handleSearchClick}><img class=' icon-img' src="\search.png" alt=""/></button></li>
          :
            <li>
              <button className="nav-search-button" onClick={handleSearchClick}><img class=' icon-img' src="\search.png" alt=""/></button></li>
          }
          <li>Kids</li>
          <li>DVD</li>
          <li><img class='nav-search-icon icon-img' src="\notification.png" alt="" /></li>
        </ul>
        <img className="nav-avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
    </div>
  )
}
