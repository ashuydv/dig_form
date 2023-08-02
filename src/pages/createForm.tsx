import Layout from '@/components/Layout/Layout'
import React, { useState } from 'react'
import Tabs from '@/components/Tabs'
import Design from '@/components/Design'
import Configure from '@/components/Configure'
import Deploy from '@/components/Deploy'
import Share from '@/components/Share'
import Link from 'next/link'

const createForm = () => {
    const [formData, setFormData] = React.useState({
        title: '',
        description: '',
        image: '',
        customURL: '',
        fields: [],
        hideFromSearchEnginer: false,
        automaticSave: false,
        reqCaptcha: false,
        incentive: false,
        token: '',
        submissionLimit: 0,
        noOfResponses: 0,
    })

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: any) => {
        setActiveTab(index);
    }

    const tabs = [{
        label: 'Design',
        content: <Design
            handleTabClick={handleTabClick}
            formData={formData}
            setFormData={setFormData}
        />
    }, {
        label: 'Configure',
        content: <Configure
            handleTabClick={handleTabClick}
            formData={formData}
            setFormData={setFormData}
        />
    }, {
        label: 'Deploy',
        content: <Deploy
            formData={formData}
        />
    }, {
        label: 'Share',
        content: <Share
            formData={formData}
        />
    }]

    return (
        <Layout>
            <Link
                href="/datarequest"
                as="/datarequest"
                className='text-[#131313] underline'
            >
                <a className='text-[#131313] underline flex items-center'>
                    <span
                        className='inline-flex'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                        </svg>
                    </span> Back to Dashboard
                </a>
            </Link>
            <Tabs tabs={tabs}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
            />
        </Layout>
    )
}

export default createForm