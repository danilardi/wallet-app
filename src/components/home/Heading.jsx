import ProfileHero from '../../assets/images/profile.png'

function Heading() {
    return (
        <div className="flex justify-between items-center">
            {/* Welcome Greeting */}
            <div className="flex flex-col gap-3">
                <h1 className="sans-700 text-60">Good Morning, Chelsea</h1>
                <p className="sans-400 text-24 text">Check all your incoming and outgoing transactions here</p>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-6">
                <div className="flex flex-col text-end text-16">
                    <h4 className="sans-700">Chelsea Immanuela</h4>
                    <p className="sans-400">Personal Account</p>
                </div>
                <div className="h-24 w-24 border-4 border-primary rounded-full overflow-hidden">
                    <img src={ProfileHero} alt="profile" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Heading