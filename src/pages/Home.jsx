import { useEffect, useState } from 'react'
import ProfileHero from '../assets/images/profile.png'
import { formatDate } from '../../utils/Helper';

function Home() {
    const [data, setData] = useState(null)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)

    const tableHeaders = [
        { key: 'no', label: 'No' },
        { key: 'date', label: 'Date & Time' },
        { key: 'type', label: 'Type' },
        { key: 'fromOrTo', label: 'From / To' },
        { key: 'desc', label: 'Description' },
        { key: 'amount', label: 'Amount' },
    ];

    useEffect(() => {
        setData([
            { id: 1, type: 'Transfer', fromOrTo: 'Chelsea Immanuela', amount: -1000000, desc: 'Transfer to Chelsea Immanuela', date: '2025-04-27T08:00:00.000Z' },
            { id: 2, type: 'Topup', fromOrTo: 'Bank BNI', amount: 2000000, desc: 'Top up from BNI', date: '2025-04-27T09:30:00.000Z' },
            { id: 3, type: 'Transfer', fromOrTo: 'John Doe', amount: -500000, desc: 'Transfer to John Doe', date: '2025-04-27T10:15:00.000Z' },
            { id: 4, type: 'Topup', fromOrTo: 'Bank Mandiri', amount: 1500000, desc: 'Top up from Mandiri', date: '2025-04-27T11:00:00.000Z' },
            { id: 5, type: 'Transfer', fromOrTo: 'Sarah Lee', amount: -750000, desc: 'Transfer to Sarah Lee', date: '2025-04-27T12:45:00.000Z' },
            { id: 6, type: 'Topup', fromOrTo: 'Bank BCA', amount: 1000000, desc: 'Top up from BCA', date: '2025-04-27T14:20:00.000Z' },
            { id: 7, type: 'Transfer', fromOrTo: 'Michael Chan', amount: -300000, desc: 'Transfer to Michael Chan', date: '2025-04-27T15:05:00.000Z' },
            { id: 8, type: 'Topup', fromOrTo: 'Bank BRI', amount: 2500000, desc: 'Top up from BRI', date: '2025-04-27T16:30:00.000Z' },
            { id: 9, type: 'Transfer', fromOrTo: 'Amanda Smith', amount: -600000, desc: 'Transfer to Amanda Smith', date: '2025-04-27T17:10:00.000Z' },
            { id: 10, type: 'Topup', fromOrTo: 'Bank CIMB', amount: 1800000, desc: 'Top up from CIMB', date: '2025-04-27T18:45:00.000Z' },
            { id: 11, type: 'Transfer', fromOrTo: 'Kevin Hart', amount: -400000, desc: 'Transfer to Kevin Hart', date: '2025-04-28T08:15:00.000Z' },
            { id: 12, type: 'Topup', fromOrTo: 'Bank BTN', amount: 2200000, desc: 'Top up from BTN', date: '2025-04-28T09:00:00.000Z' },
            { id: 13, type: 'Transfer', fromOrTo: 'Laura Palmer', amount: -550000, desc: 'Transfer to Laura Palmer', date: '2025-04-28T10:45:00.000Z' },
            { id: 14, type: 'Topup', fromOrTo: 'Bank Danamon', amount: 1700000, desc: 'Top up from Danamon', date: '2025-04-28T11:20:00.000Z' },
            { id: 15, type: 'Transfer', fromOrTo: 'Chris Evans', amount: -850000, desc: 'Transfer to Chris Evans', date: '2025-04-28T12:55:00.000Z' },
            { id: 16, type: 'Topup', fromOrTo: 'Bank Permata', amount: 2000000, desc: 'Top up from Permata', date: '2025-04-28T13:30:00.000Z' },
            { id: 17, type: 'Transfer', fromOrTo: 'Diana Prince', amount: -950000, desc: 'Transfer to Diana Prince', date: '2025-04-28T14:10:00.000Z' },
            { id: 18, type: 'Topup', fromOrTo: 'Bank Maybank', amount: 2100000, desc: 'Top up from Maybank', date: '2025-04-28T15:00:00.000Z' },
            { id: 19, type: 'Transfer', fromOrTo: 'Peter Parker', amount: -700000, desc: 'Transfer to Peter Parker', date: '2025-04-28T15:40:00.000Z' },
            { id: 20, type: 'Topup', fromOrTo: 'Bank HSBC', amount: 2300000, desc: 'Top up from HSBC', date: '2025-04-28T16:25:00.000Z' },
            { id: 21, type: 'Transfer', fromOrTo: 'Bruce Wayne', amount: -1200000, desc: 'Transfer to Bruce Wayne', date: '2025-04-28T17:15:00.000Z' },
            { id: 22, type: 'Topup', fromOrTo: 'Bank OCBC', amount: 1600000, desc: 'Top up from OCBC', date: '2025-04-28T18:00:00.000Z' },
            { id: 23, type: 'Transfer', fromOrTo: 'Clark Kent', amount: -650000, desc: 'Transfer to Clark Kent', date: '2025-04-28T18:45:00.000Z' },
            { id: 24, type: 'Topup', fromOrTo: 'Bank UOB', amount: 2400000, desc: 'Top up from UOB', date: '2025-04-28T19:30:00.000Z' },
            { id: 25, type: 'Transfer', fromOrTo: 'Natasha Romanoff', amount: -950000, desc: 'Transfer to Natasha Romanoff', date: '2025-04-28T20:00:00.000Z' },
            { id: 26, type: 'Topup', fromOrTo: 'Bank DBS', amount: 1900000, desc: 'Top up from DBS', date: '2025-04-28T20:45:00.000Z' },
            { id: 27, type: 'Transfer', fromOrTo: 'Steve Rogers', amount: -870000, desc: 'Transfer to Steve Rogers', date: '2025-04-28T21:20:00.000Z' },
            { id: 28, type: 'Topup', fromOrTo: 'Bank Mega', amount: 1500000, desc: 'Top up from Mega', date: '2025-04-28T22:00:00.000Z' },
            { id: 29, type: 'Transfer', fromOrTo: 'Tony Stark', amount: -1100000, desc: 'Transfer to Tony Stark', date: '2025-04-28T22:45:00.000Z' },
            { id: 30, type: 'Topup', fromOrTo: 'Bank Sinarmas', amount: 1800000, desc: 'Top up from Sinarmas', date: '2025-04-28T23:30:00.000Z' },
            { id: 31, type: 'Transfer', fromOrTo: 'Wanda Maximoff', amount: -780000, desc: 'Transfer to Wanda Maximoff', date: '2025-04-29T00:10:00.000Z' },
            { id: 32, type: 'Topup', fromOrTo: 'Bank Panin', amount: 1700000, desc: 'Top up from Panin', date: '2025-04-29T01:00:00.000Z' },
            { id: 33, type: 'Transfer', fromOrTo: 'Scott Lang', amount: -430000, desc: 'Transfer to Scott Lang', date: '2025-04-29T02:15:00.000Z' },
            { id: 34, type: 'Topup', fromOrTo: 'Bank Commonwealth', amount: 2200000, desc: 'Top up from Commonwealth', date: '2025-04-29T03:30:00.000Z' },
            { id: 35, type: 'Transfer', fromOrTo: 'Stephen Strange', amount: -880000, desc: 'Transfer to Stephen Strange', date: '2025-04-29T04:45:00.000Z' },
            { id: 36, type: 'Topup', fromOrTo: 'Bank Bukopin', amount: 2000000, desc: 'Top up from Bukopin', date: '2025-04-29T06:00:00.000Z' },
        ]);

    }, [])

    useEffect(() => {
        console.log(data?.length)
    }, [data]);

    return (
        <>
            <div className="flex-grow bg-[#FAFBFD] px-24 py-12">
                {/* Header */}
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

                {/* Content */}
                <div className="flex mt-16 gap-12">
                    {/* Account Number */}
                    <div className="flex flex-col text-white bg-primary rounded-2xl px-11 py-[40px_75px] flex-[0_0_20%]">
                        <p className="sans-400 text-24">Account No.</p>
                        <h3 className="sans-700 text-32 mt-3">100899</h3>
                    </div>

                    {/* Balance */}
                    <div className="flex flex-col bg-white rounded-2xl px-11 py-[40px_75px] flex-1 shadow">
                        <p className="sans-400 text-24">Balance</p>
                        <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-16">
                                <h3 className="sans-700 text-32">Rp 10.000.000,00</h3>
                                <i className="bi bi-eye text-38 text-gray"></i>
                            </div>
                            <div className="flex gap-6 text-white">
                                <button onClick={() => {
                                    console.log(Math.round(offset / limit))
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

                {/* Filter Table */}
                <div className="flex justify-between mt-12 items-center">

                    {/* Search Bar */}
                    <label className="input">
                        <i className="bi bi-search text-16 text-gray"></i>
                        <input type="search" required placeholder="Search" />
                    </label>

                    <div className='flex gap-12'>
                        {/* Dropdown Filter Show */}
                        <div className="flex items-center gap-4">
                            <p className="text-gray-600">Show</p>
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="dropdown-btn">
                                    Last 10 transactions
                                    <i className="bi bi-chevron-down text-14 ms-2.5"></i>
                                </button>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Dropdown Date */}
                        <div className="flex items-center gap-4">
                            <p className="text-gray-600">Sort By</p>
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="dropdown-btn">
                                    Data
                                    <i className="bi bi-chevron-down text-14 ms-2.5"></i>
                                </button>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                            <div className="dropdown">
                                <button tabIndex={0} role="button" className="dropdown-btn">
                                    Descending
                                    <i className="bi bi-chevron-down text-14 ms-2.5"></i>
                                </button>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-box border border-[#EDEDED] bg-[#F6F6F6] mt-10">
                    <table className="table text-16 text-[#252B42]">
                        {/* head */}
                        <thead className='bg-white montserrat-700'>
                            <tr>
                                {tableHeaders.map((header, index) => (
                                    <th key={index} className='border border-[#EDEDED]'>
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='sans-400'>
                            {data && data?.slice(offset, offset + limit).map((item, index) => (
                                <tr key={index} className={`${index % 2 === 1 && 'bg-white'}`}>
                                    <td className='border border-[#EDEDED]'>{offset + index + 1}</td>
                                    {tableHeaders.map((header, idx) => {
                                        if (header.key === 'no') return null;
                                        return (
                                            <td key={idx} className='border border-[#EDEDED]'>
                                                {header.key === 'date' ? formatDate(item[header.key]) : item[header.key]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="pagination mt-10">
                    <button
                        disabled={Math.round(offset / limit) < 1}
                        className={`join-item pagination-btn !rounded-s-[7px]`}
                        onClick={() => {
                            setOffset((prev) => prev - limit)
                        }}
                    >First</button>
                    {data && [...Array(Math.round(data?.length / limit))].map((_, index) => (
                        <button
                            key={index}
                            className={`join-item pagination-btn ${Math.round(offset / limit) == index && '!bg-primary !text-white'}`}
                            onClick={() => {
                                setOffset(index * limit)
                            }}
                        >{index + 1}</button>
                    ))}
                    <button 
                    disabled={Math.round(offset / limit) >= Math.round(data?.length / limit) - 1}
                    className={`join-item pagination-btn !rounded-e-[7px]`}
                    onClick={() => {
                        setOffset((prev) => prev + limit)
                    }}
                    >Next</button>
                </div>
            </div>
        </>
    )
}

export default Home