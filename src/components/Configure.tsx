import React from 'react'

const Configure = ({ formData, setFormData }) => {

    const { title = '', description = '', image = '', customURL = '', fields = [], hideFromSearchEnginer = false, automaticSave = false, reqCaptcha = false, incentive = '', token = '', submissionLimit = 0, noOfResponses = 0 } = formData || {};

    const handleFormData = (e: { target: { name: any; value: any } }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='flex items-center justify-center'>
            <div className=" flex flex-col w-1/2">
                <div className='mb-4 flex items-start flex-col'>
                    <label htmlFor='title' className='mr-2'>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={handleFormData}
                        className='mt-1'
                    />
                </div>
                <div className='mb-4 flex items-start flex-col'>
                    <label htmlFor='description' className='mr-2'>Description</label>
                    <input
                        type='text'
                        name='description'
                        value={description}
                        onChange={handleFormData}
                        className='mt-1'
                    />
                </div>
                <div className='mb-4 flex items-start flex-col'>
                    <label htmlFor='image' className='mr-2'>Image</label>
                    <input
                        type='file'
                        name='file'
                        value={image}
                        onChange={handleFormData}
                        className='mt-1'
                    />
                </div>
                <div className='mb-4 flex items-start flex-col'>
                    <label htmlFor='customURL' className='mr-2'>Custom URL</label>
                    <input
                        type='text'
                        name='customURL'
                        value={customURL}
                        onChange={handleFormData}
                        className='mt-1'
                    />
                </div>
            </div>
            <div className="w-1/2">
                <img src="http://dummyimage.com/500x500" alt="" />
            </div>
        </div>
    )
}

export default Configure