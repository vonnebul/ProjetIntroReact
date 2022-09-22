import "../style/Footer.css"
function Footer(){
    var numero1 = 10;
    var numero2 = 50;
    const numero = "06.12.34.56.78";
    const site = "https://ecole-ipssi.com";
    const site2 = "https://rickrolled.fr/";
    return <footer>
        <div className="siteFooter">
            <h4>
                Compléments d'informations
            </h4>
            <ul className="liste">
                <li> numéro : {numero}</li>
                <li> site officiel: <a href={site}>IPSSI</a></li>
                <li> all right reserved</li>
            </ul>
        </div>
    </footer>
}
export default Footer
