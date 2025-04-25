import ProfileHero from '../assets/images/profile.png'
import IcEyeOpen from '../assets/icons/ic-eye-open.png'
import IcPlus from '../assets/icons/ic-plus.png'
import IcTransfer from '../assets/icons/ic-transfer.png'


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
                <div className='row' style={{ marginTop: '75px', gap: '50px' }}>
                    {/* Account Number */}
                    <div className='col-2 d-flex flex-column text-white' style={{ backgroundColor: '#0061FF', padding: '75px 45px', borderRadius: '20px' }}>
                        <p>Account No.</p>
                        <h3>100899</h3>
                    </div>
                    <div className='col-8 d-flex flex-column bg-white flex-grow-1' style={{ borderRadius: '20px', padding: '70px 45px' }}>
                        <p>Balance</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div className='d-flex  align-items-center' style={{gap:'75px'}}>
                                <h3>Rp 10.000.000,00</h3>
                                <img src={IcEyeOpen} style={{ height: '38px', width: '38px' }} />
                            </div>
                            <div className='d-flex' style={{gap: '26px'}}>
                                <button className='btn btn-primary' style={{ height: '64px', width: '64px' }}><img src={IcPlus} style={{ height: '35px' }} /></button>
                                <button className='btn btn-primary' style={{ height: '64px', width: '64px' }}><img src={IcTransfer} style={{ height: '35px' }} /></button>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Home