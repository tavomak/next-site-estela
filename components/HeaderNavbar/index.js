
const HeaderNavbar = () => {
    return (
        <nav className="px-4 py-0 d-flex justify-content-between w-100 navbar">
            <div className="hamburger-container">
                <button className="hamburger hamburger--emphatic">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                
            </div>
            <div className="mr-auto">
                <a href="#" >
                    <img src="../assets/img/primaryLogo.svg" alt="Estela Estudio Digital Logo" style={{height:"45px"}} />
                </a>
            </div>
            <ul className="d-flex mb-0 mr-4">
                <li className="mx-2">Enfoque</li>
                <li className="mx-2"> Servicios</li>
                <li className="mx-2">Cultura</li>
            </ul>
            <div >
                <a href="#">
                    {/* <img src="../assets/img/car.png" /> */}
                    <div className="cart-count"></div>
                </a>
            </div>
        </nav>
    )
}
 
export default HeaderNavbar;