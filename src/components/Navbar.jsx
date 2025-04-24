import Logo from '../assets/images/logo.png'

function Navbar() {

    return (
        <>
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand navbar-nav"><img src={Logo} alt="" style={{height: '40px'}} /></a>
                    <div>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar