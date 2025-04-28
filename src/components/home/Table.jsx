import { useState } from 'react';
import { formatCurrency, formatDate } from '../../../utils/Helper';

function Table({ data, offset, setOffset, limit, querySearch, setQuerySearch, handleSearch }) {
    const tableHeaders = [
        { key: 'no', label: 'No' },
        { key: 'date', label: 'Date & Time' },
        { key: 'type', label: 'Type' },
        { key: 'from', label: 'From / To' },
        { key: 'description', label: 'Description' },
        { key: 'amount', label: 'Amount' },
    ];

    return (
        <>
            {/* Filter Table */}
            < div className="flex justify-between mt-12 items-center" >

                {/* Search Bar */}
                <label label className="input" >
                    <i className="bi bi-search text-16 text-gray"></i>
                    <input
                        type="search"
                        required
                        placeholder="Search..."
                        value={querySearch}
                        onChange={(e) => {
                            setQuerySearch(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch()
                            }
                        }}
                    />
                </label >

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
            </div >

            {/* Table */}
            <div div className="overflow-x-auto rounded-box border border-[#EDEDED] bg-[#F6F6F6] mt-10" >
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
                                            {header.key === 'date' && formatDate(item[header.key])}
                                            {header.key === 'amount' && (
                                                <p className={item[header.key] > 0 ? 'text-success' : 'text-error'}>
                                                    {formatCurrency(item[header.key])}
                                                </p>
                                            )}
                                            {header.key !== 'date' && header.key !== 'amount' && (
                                                item[header.key]
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >

            {/* Pagination */}
            <div div className="pagination mt-10" >
                <button
                    disabled={Math.round(offset / limit) < 1}
                    className={`join-item pagination-btn !rounded-s-[7px]`}
                    onClick={() => {
                        setOffset((prev) => prev - limit)
                    }}
                >First</button>
                {
                    data && [...Array(Math.round(data?.length / limit))].map((_, index) => (
                        <button
                            key={index}
                            className={`join-item pagination-btn ${Math.round(offset / limit) == index && '!bg-primary !text-white'}`}
                            onClick={() => {
                                setOffset(index * limit)
                            }}
                        >{index + 1}</button>
                    ))
                }
                <button
                    disabled={Math.round(offset / limit) >= Math.round(data?.length / limit) - 1}
                    className={`join-item pagination-btn !rounded-e-[7px]`}
                    onClick={() => {
                        setOffset((prev) => prev + limit)
                    }}
                >Next</button>
            </div >
        </>
    )
}
export default Table