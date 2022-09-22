import "../style/Banner.css";
import Logo from "../assets/ipssi-logo.png";

function Banniere(){
	return<div className="banner">
        <img src={Logo} className="logo" alt="logo Ipssi"/>
        <h1>Bienvenue classe BTS SIO MLV 2 sur Blogeo</h1>
    </div> 
}

export default Banniere
