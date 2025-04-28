import { useEffect, useState } from "react";
import { getDetailUser } from "../../../utils/api/auth";
import { formatCurrency2 } from "../../../utils/Helper";

function AccountDetails() {
    const [accountDetails, setAccountDetails] = useState(null);
    const [showDetailAccount, setShowDetailAccount] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getDetailUser().then((res) => {
            if (res) {
                setAccountDetails(res.data);
            }
        }).finally(() => {
            setLoading(false);
        })
    }, [])

    return (
        <div className="flex mt-16 gap-12">
            {/* Account Number */}
            <div className="flex flex-col text-white bg-primary rounded-2xl px-11 py-[40px_75px] flex-[0_0_20%]">
                <p className="sans-400 text-24">Account No.</p>
                <h3 className="sans-700 text-32 mt-3">{showDetailAccount ? accountDetails?.accountNumber : "******"}</h3>
            </div>

            {/* Balance */}
            <div className="flex flex-col bg-white rounded-2xl px-11 py-[40px_75px] flex-1 shadow">
                <p className="sans-400 text-24">Balance</p>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-16">
                        <h3 className="sans-700 text-32">{showDetailAccount ? formatCurrency2(accountDetails ? accountDetails?.balance : 0) : "Rp **********"}</h3>
                        <i className={`bi ${showDetailAccount ? 'bi-eye' : 'bi-eye-slash'} text-38 text-gray cursor-pointer`} onClick={() => {
                            setShowDetailAccount(!showDetailAccount)
                        }}></i>
                    </div>
                    <div className="flex gap-6 text-white">
                        <button onClick={() => {
                        }} className="btn btn-square btn-primary size-16">
                            <i className="bi bi-plus-lg text-35"></i>
                        </button>
                        <button className="btn btn-square btn-primary size-16">
                            <i className="bi bi-send text-32"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountDetails