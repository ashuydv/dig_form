import Layout from '@/components/Layout/Layout'
import React from 'react'
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
        image:'',
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

    const tabs = [{
        label: 'Design',
        content: <Design
            formData={formData}
            setFormData={setFormData}
        />
    }, {
        label: 'Configure',
        content: <Configure
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
                <a
                    className='text-[#131313] underline mb-5'
                >
                    Back to Dashboard
                </a>
            </Link>
            <Tabs tabs={tabs} />
        </Layout>
    )
}

export default createForm