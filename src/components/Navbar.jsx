import Logo from '../assets/images/logo.png'
import IcDarkMode from '../assets/icons/ic-dark-mode.png'

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid" style={{padding: '0 100px'}}>
                    <a className="navbar-brand navbar-nav"><img src={Logo} alt="" style={{ height: '40px' }} /></a>
                    <div className='d-flex flex-row align-items-center' style={{gap: '35px'}}>
                        <ul className="navbar-nav flex-row mb-2 mb-lg-0" style={{ gap: "70px" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Transfer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Topup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Out</a>
                            </li>
                        </ul>
                        <div style={{ width: '1px', height: '40px', backgroundColor: "#B3B3B3"}}></div>
                        <div>
                            <img src={IcDarkMode} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar