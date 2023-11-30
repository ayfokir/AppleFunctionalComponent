
import logo1 from "../../commonResource/images/icons/logo-sm.png";
import logo2 from "../../commonResource/images/icons/search-icon-sm.png";
import logo3 from "../../commonResource/images/icons/cart-sm.png"
// import "../../commonResource/css/bootstrap.css";
// import "../../commonResource/css/styles.css"
// import "./Header.css"

 function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			☰
			</button>
			<a className="navbar-brand mx-auto" href="http://localhost:3000/"><img src={logo1}/></a>

			<div className="navbar-collapse collapse">
			<ul className="navbar-nav nav-justified w-100 nav-fill">
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="http://localhost:3000/">Mac</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="iphones">iphone</a></li>   
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">ipad</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">watch</a></li> 
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">tv</a></li>
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Music</a></li>    
						<li className="nav-item"><a className="nav-link js-scroll-trigger" href="#">Support</a></li>  
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search"><img src={logo2}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart"><img src={logo3}/></a></li>
    </ul>
    </div>
			</nav>
		</div>
	</div>
    </div>
  )
}

export default Header;