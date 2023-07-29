import React, { useState } from 'react'
import Dropdown from '../Dropdown1'
import sidebarLinks from '../sidebarLink'
import Link from 'next/link'

type Props = {
}

const Sidebar = (props: Props) => {
    return (
        <div
            className="flex flex-col w-72 bg-[#131313] text-white px-4 py-5 overflow-hidden overflow-y-scroll"
        >
            <Dropdown
                options={[
                    { label: 'Option 1', image: 'https://picsum.photos/200/300', value: 'option1' },
                    { label: 'Option 2', image: 'https://dummyimage.com/200/300', value: 'option2' },
                ]}

                defaultValue={{ label: 'Option 1', image: 'https://picsum.photos/200/300', value: 'option1' }}
                onSelect={(option) => {
                    console.log(option)
                }
                }
            />
            <div className="flex flex-col space-y-2 mt-4">
                {sidebarLinks.slice(0, 3).map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                    >
                        <a
                            className="flex items-center text-sm text-[16px] px-[12px] py-[18px] rounded-[4px] hover:bg-[#AE86FF] hover:text-black hover:drop-shadow-[4px_4px_0px_rgba(234,234,234,0.25)] cursor-pointer bg-[#131313] text-[#eaeaea] active"
                        >           <span className=" w-5">
                                {link.svgIcon}
                            </span>
                            <span className="mx-5 font-medium text-[16px]">
                                {link.name}
                            </span>
                        </a>
                    </Link>
                ))}
            </div>
            <div className="flex flex-col space-y-1 max-w-[250px] w-full mb-4 fixed bottom-0">
                {sidebarLinks.slice(3, 6).map((link) => (
                    <Link
                        key={link.name}
                        className="flex items-center text-sm text-[16px] px-[12px] py-[18px] rounded-[4px] mb-2 hover:bg-[#AE86FF] hover:text-black hover:drop-shadow-[4px_4px_0px_rgba(234,234,234,0.25)] cursor-pointer bg-[#131313] text-[#eaeaea] active"
                        href={link.path}
                    >
                        <a
                            className="flex items-center text-sm text-[16px] px-[12px] py-[18px] rounded-[4px] mb-2 hover:bg-[#AE86FF] hover:text-black hover:drop-shadow-[4px_4px_0px_rgba(234,234,234,0.25)] cursor-pointer bg-[#131313] text-[#eaeaea] active"
                        >           <span className=" w-5">
                                {link.svgIcon}
                            </span>
                            <span className="mx-5 font-medium text-[16px]">
                                {link.name}
                            </span>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar