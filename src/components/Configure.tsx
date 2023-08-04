import { Switch } from '@nextui-org/react';
import React, { useState } from 'react'
import Select from './Select';
import Image from 'next/image';

const Configure = ({ handleTabClick, formData, setFormData }) => {

    const { title = '', description = '', image = '', customURL = '', fields = [], hideFromSearchEnginer = false, automaticSave = false, reqCaptcha = false, incentive = '', submissionLimit = 0, noOfResponses = 0 } = formData || {};

    const token = [{
        label: 'Token',
    }, {
        label: 'Token 1',
    }, {
        label: 'Token 2',
    }
    ]

    const handleFormData = (e: { target: { name: any; value: any } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className='flex items-start justify-center mb-5'>
                <div className=" flex flex-col w-1/2 bg-[#DED4F2] rounded-[6px] mr-10 py-[24px] px-[20px]">
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='title' className='mr-2'>Title</label>
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-0 w-full'
                        />
                    </div>
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='description' className='mr-2'>Description</label>
                        <input
                            type='text'
                            name='description'
                            value={description}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-none w-full'
                        />
                    </div>
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='image' className='mr-2'>Image</label>
                        <input
                            type='file'
                            name='file'
                            value={image}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-none w-full'
                        />
                    </div>
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='customURL' className='mr-2'>Custom URL</label>
                        <input
                            type='text'
                            name='customURL'
                            value={customURL}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-none w-full'
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-[#fff] max-w-1/2 min-h-[400px] border border-[#00000033] relative mb-3 overflow-hidden rounded-[8px]">
                        <div className='absolute w-full h-full object-center object-cover rounded-[4px]'>
                            <Image
                                layout='fill'
                                width={400}
                                height={400}
                                src={image} alt="" />
                        </div>
                        <div className="absolute bottom-[15px] right-[10px]"><button type="button" className="bg-[#EAEAEA] text-[#131313e5] rounded-[4px] px-[12px] py-[8px] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                        </button></div>
                    </div>
                </div>
            </div>
            <div className='flex items-start justify-center mb-5'>
                <div className=" flex flex-col w-1/2 bg-[#DED4F2] rounded-[6px] mr-10 py-[24px] px-[20px]">
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='submissionLimit' className='mr-2'>Title</label>
                        <input
                            type='text'
                            name='submissionLimit'
                            value={submissionLimit}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-0 w-full'
                        />
                    </div>
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='startDate' className='mr-2'>Start Date</label>
                        <input
                            type='date'
                            name='startDate'
                            value={noOfResponses}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-0 w-full'
                        />
                    </div>
                    <div className='mb-4 flex items-start flex-col'>
                        <label htmlFor='endDate' className='mr-2'>End Date</label>
                        <input
                            type='date'
                            name='endDate'
                            value={noOfResponses}
                            onChange={handleFormData}
                            className='mt-1 shadow-none border-0 w-full'
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="bg-[#ded4f2] rounded-[5px]">
                        <div className="flex items-center justify-between flex-col px-[20px] py-[24px]">
                            <div className="flex items-center justify-between flex-1 mb-4 w-full">
                                <h4 className="text-[#131313] font-medium text-[15px]">
                                    Hide From Search Engines
                                </h4>
                                <div className="flex items-center justify-end">
                                    <Switch
                                        id="hideFromSearch"
                                        checked={hideFromSearchEnginer}
                                        size="sm"
                                        className='mb-1'
                                        onChange={() => setFormData({ ...formData, hideFromSearchEnginer: !hideFromSearchEnginer })}
                                    />
                                    <span className='ml-4 mb-0'>
                                        {hideFromSearchEnginer ? 'Yes' : 'No'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-1 mb-4 w-full">
                                <h4 className="text-[#131313] font-medium text-[15px]">
                                    Automatic Save
                                </h4>
                                <div className="flex items-center justify-end">
                                    <Switch
                                        id="automaticSave"
                                        checked={automaticSave}
                                        size="sm"
                                        className='mb-1'
                                        onChange={() => setFormData({ ...formData, automaticSave: !automaticSave })}
                                    />
                                    <span className='ml-4 mb-0'>
                                        {automaticSave ? 'Yes' : 'No'}
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-1 mb-0 w-full">
                                <h4 className="text-[#131313] font-medium text-[15px]">
                                    Require Captcha
                                </h4>
                                <div className="flex items-center justify-end">
                                    <Switch
                                        id="reqCaptcha"
                                        checked={reqCaptcha}
                                        size="sm"
                                        className='mb-1'
                                        onChange={() => setFormData({ ...formData, reqCaptcha: !reqCaptcha })}
                                    />
                                    <span className='ml-4 mb-0'>
                                        {reqCaptcha ? 'Yes' : 'No'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5">
                <div className="w-1/2 flex flex-col">
                    <div className='mb-4 mr-2 flex items-start justify-between'>
                        <label htmlFor='incentive' className='mr-2 my-1 font-medium'>Incentive</label>
                        <Switch
                            id="incentive"
                            checked={incentive}
                            size="sm"
                            className='mb-0'
                            onChange={() => setFormData({ ...formData, incentive: !incentive })}
                        />
                    </div>
                </div>
                <div className="flex items-start">
                    <div className=" flex flex-col w-1/2 bg-[#DED4F2] rounded-[6px] mr-10 py-[24px] px-[20px]">
                        <div className='mb-4 flex items-start flex-col'>
                            <Select
                                options={token}
                                onSelectChange={(selected: any) => setFormData({ ...formData, token: selected })}
                            />
                        </div>

                        <div className='mb-4 flex items-start flex-col'>
                            <label htmlFor='noOfResponses' className='mr-2'>No Of Responses</label>
                            <input
                                type='text'
                                placeholder='Enter token'
                                name='noOfResponses'
                                value={noOfResponses}
                                onChange={handleFormData}
                                className='mt-1 shadow-none border-0 w-full'
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <h4
                            className='text-[#131313] font-medium text-[15px] mb-2'
                        >
                            Total Responses
                        </h4>
                        <p>
                            {noOfResponses * submissionLimit}
                        </p>
                    </div>
                </div>
            </div>
        </div>)
}

export default Configure