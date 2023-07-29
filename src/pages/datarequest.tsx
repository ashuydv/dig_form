import React, { useState, useEffect } from 'react'
import Layout from '@/components/Layout/Layout'
import Link from 'next/link'
import { Loading } from '@nextui-org/react'

type Props = {}

const DataRequest = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('api/getData')
            const data = await res.json()
            setData(data)
            setLoading(false);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
        const res = await fetch('api/forms/getData')
        const data = await res.json()
        setData(data)
    }

    return (
        <Layout>
            <Link
                className=''
                href="/createForm"
            >
                <a className="flex items-center justify-center px-4 py-[14px] h-[48px] text-[16px] mr-4 text-[#131313] font-medium bg-[#fff] border-[2px] border-[#131313] rounded-[4px] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] max-w-[200px]">
                    Create Form
                </a>
            </Link>

            {loading ? (
                <div 
                    className='my-8'
                >
                    <Loading
                        size='md'
                        color="secondary"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-evenly flex-wrap -m-4 my-2">
                    {
                        data.map((item) => ( 
                            <div
                                className='p-4 md:w-1/4 max-h-[220px]'
                                key={item.id}
                            >
                                <Link
                                    href={`/forms/${item._id}`}
                                    className='cursor-pointer'
                                >
                                    <div className='h-full border-2 border-black bg-[#eaeaea] rounded-[4px] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] overflow-hidden'>
                                        <div className='p-6 flex flex-col h-full'>
                                            <div className='min-h-[120px] max-h-[150px]'>
                                                <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                                                    {item.title}
                                                </h1>
                                                <p className='leading-relaxed mb-3'>
                                                    {item.description.slice(0, 120)}
                                                </p>
                                            </div>
                                            <div className='flex-grow'></div><div className='flex items-center'>
                                                <Link
                                                    href={`forms/${item._id}`}
                                                    onClick={() =>
                                                        window.open(`forms/${item._id}`, "_blank")
                                                    }
                                                    className='text-black inline-flex items-center text-sm md:mb-2 lg:mb-0'>
                                                    Learn More
                                                </Link>
                                                <span className='mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-400'>
                                                    <svg
                                                        className='w-4 h-4 mr-1'
                                                        stroke='currentColor'
                                                        stroke-width='2'
                                                        fill='none'
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                                                        <circle cx='12' cy='12' r='3'></circle>
                                                    </svg>
                                                    1.2K
                                                </span>
                                                <span className='inline-flex items-center leading-none text-sm'>
                                                    <svg
                                                        className='w-4 h-4 mr-1'
                                                        stroke='currentColor'
                                                        stroke-width='2'
                                                        fill='none'
                                                        stroke-linecap='round'
                                                        stroke-linejoin='round'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                                                    </svg>
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </div>
            )}
        </Layout>
    )
}

export default DataRequest