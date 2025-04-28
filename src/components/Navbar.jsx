import Logo from '../assets/images/logo.png'
import IcDarkMode from '../assets/icons/ic-dark-mode.png'
import { useRoute } from '../contexts/RouteContext';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const { logout } = useAuth();
    const { route, setRoute } = useRoute();

    return (
        <>
            <nav className="navbar bg-base-100 shadow-sm">
                <div className="container mx-auto flex justify-between items-center px-24 py-4">
                    {/* Logo */}
                    <a className="flex items-center gap-2">
                        <img src={Logo} alt="Logo" className="h-10" />
                    </a>

                    {/* Menu + Darkmode */}
                    <div className="flex items-center gap-9">
                        {/* Menu */}
                        <ul className="flex gap-16 text-16 font-medium cursor-pointer sans-400">
                            <li><a className={`hover:text-primary ${route == 'home' && 'text-primary sans-700'}`} onClick={() => setRoute('home')}>Dashboard</a></li>
                            <li><a className={`hover:text-primary ${route == 'transfer' && 'text-primary sans-700'}`} onClick={() => setRoute('transfer')}>Transfer</a></li>
                            <li><a className={`hover:text-primary`} href="#">Topup</a></li>
                            <li><a className={`hover:text-primary`} onClick={() => {
                                logout()
                            }}>Sign Out</a></li>
                        </ul>

                        {/* Divider */}
                        <div className="h-10 w-px bg-gray-300"></div>

                        {/* Darkmode Toggle */}
                        <div>
                            <img src={IcDarkMode} alt="Dark Mode" className="h-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar