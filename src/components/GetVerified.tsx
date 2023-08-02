import React from 'react'

type Props = {}

const GetVerified = (props: Props) => {
    return (
        <button type="button" className="flex items-center justify-center text-sm mr-4 bg-[#131313] text-[#EAEAEA] px-[16px] py-[12.5px] shadow-none rounded-full">
            <div className="mr-2"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#7569FF"></path></svg></div><div className="text-xs my-0">Get Verified Now</div>
        </button>
    )
}

export default GetVerified