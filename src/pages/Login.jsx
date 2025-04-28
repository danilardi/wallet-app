import Logo from '../assets/images/logo.png'
import HeroLogin from '../assets/images/hero-login.png'
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const { login } = useAuth()
    const [data, setData] = useState({
        username: 'chelsea',
        password: 'password123'
    });

    const handleLogin = () => {
        login({
            username: data.username,
            password: data.password
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <>
            <div className="flex w-full h-screen">
                <div className='flex-1 flex flex-col w-full justify-center items-center'>
                    <form className='flex flex-col' onSubmit={(e) => {
                        e.preventDefault();
                        console.log('Login form submitted', data);
                        handleLogin()
                    }}>
                        <img src={Logo} alt="Logo" className="h-20" />
                        <input type="text" placeholder="Email" className="input-clear mt-20" value={data.username} onChange={(e) => {
                            setData({ ...data, username: e.target.value })
                        }} />
                        <input type="text" placeholder="Password" className="input-clear mt-5" value={data.password} onChange={(e) => {
                            setData({ ...data, password: e.target.value })
                        }}/>
                        <button className="btn btn-primary text-white mt-12">Login</button>
                        <p className='sans-400 text-18 mt-9'>Belum punya akun? <span className='text-primary cursor-pointer'>Daftar di sini</span></p>
                    </form>
                </div>
                <div className='flex-1'>
                    <img src={HeroLogin} className='h-full' />
                </div>
            </div>
        </>
    )
}

export default Login;