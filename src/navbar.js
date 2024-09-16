import image from "./images/image.png"

function Navbar(){
    return(
        <nav class="navbar ">
        <a class="navbar-brand" href="#">
          <img src={image} width="250" height="50" class="d-inline-block align-top" alt=""/>
        </a>
      </nav>
    )}
export default Navbar;