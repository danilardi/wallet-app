import { useEffect, useState } from 'react'
import Heading from '../components/home/Heading';
import AccountDetails from '../components/home/AccountDetails';
import { getTransaction } from '../../utils/api/transaction';
import Table from '../components/home/Table';

function Home() {
    const [data, setData] = useState(null)
    const [offset, setOffset] = useState(0)
    const [limit, setLimit] = useState(10)
    const [querySearch, setQuerySearch] = useState('')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        getTransaction({query: querySearch})
            .then((res) => {
                setData(res.data)
            }).finally(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data]);

    const handleSearch = () => {
        setLoading(true)
        getTransaction({query: querySearch})
            .then((res) => {
                setData(res.data)
            }).finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            {loading && (
                <div className="relative flex justify-center items-center h-screen">
                    <div className="loading loading-spinner loading-lg"></div>
                </div>
            )}
            <div className="flex-grow bg-[#FAFBFD] px-24 py-12">
                {/* Heading */}
                <Heading />
                {/* Content */}
                <AccountDetails />

                <Table data={data} offset={offset} setOffset={setOffset} limit={limit} querySearch={querySearch} setQuerySearch={setQuerySearch} handleSearch={handleSearch} />
            </div>
        </>
    )
}

export default Home