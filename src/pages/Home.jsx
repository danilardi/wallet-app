import ProfileHero from '../assets/images/profile.png'

function Home() {

    return (
        <>
            <div className="flex-grow-1" style={{ backgroundColor: '#FAFBFD', padding: '48px 100px' }}>
                {/* Header */}
                <div className='d-flex justify-content-between align-items-center'>
                    {/* Welcome Greeting */}
                    <div className='d-flex flex-column justify-content-center' style={{ gap: '11px' }}>
                        <h1>Good Morning, Chelsea</h1>
                        <p>Check all your incoming and outgoing transactions here</p>
                    </div>
                    {/* Profile */}
                    <div className='d-flex' style={{ gap: '25px' }}>
                        <div className='d-flex flex-column justify-content-center'>
                            <h4>Chelsea Immanuela</h4>
                            <p>Personal Account</p>
                        </div>
                        <div style={{
                            height: '89px',
                            width: '89px',
                            border: '7px solid #0061FF',
                            borderRadius: '100px',
                            overflow: 'hidden'
                        }}>
                            <img src={ProfileHero} alt="profile" style={{ height: '100%', width: '100%' }} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                {/* Wallet */}
                <div className='d-flex flex' style={{ marginTop: '75px', gap: '50px' }}>
                    {/* Account Number */}
                    <div className='d-flex flex-column text-white p-' style={{ backgroundColor: '#0061FF', padding: '75px 45px', borderRadius: '20px', flexBasis: '30%' }}>
                        <p>Account No.</p>
                        <h3>100899</h3>
                    </div>
                    <div className='d-flex flex-column bg' style={{ borderRadius: '20px', padding: '70px 45px', flexBasis: '100%' }}>
                        <p>Balance</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex  align-items-center' style={{ gap: '75px' }}>
                                <h3>Rp 10.000.000,00</h3>
                                {/* <img src={IcEyeOpen} style={{ height: '38px', width: '38px' }} /> */}
                                <i class="bi bi-eye"></i>
                            </div>
                            <div className='d-flex' style={{ gap: '26px' }}>
                                {/* <button className='btn btn-primary' style={{ height: '64px', width: '64px' }}><img src={IcPlus} style={{ height: '35px' }} /></button> */}
                                {/* <button className='btn btn-primary' style={{ height: '64px', width: '64px' }}><img src={IcTransfer} style={{ height: '35px' }} /></button> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* feature table */}
                <div className='d-flex justify-content-between' style={{ marginTop: '45px' }}>
                    {/* Search Bar */}
                    <div>
                        <div className="input-group bg-white shadow-lg rounded-3">
                            {/* <div className="input-group-text"></div> */}
                            <button className='d-flex justify-content-center align-items-center btn'>
                                {/* <img src={IcSearch} style={{ height: '16px' }} /> */}
                            </button>
                            <input type="text" className="form-control border-0" placeholder="Search" />
                        </div>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <p>Show</p>
                            <div className=''>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home