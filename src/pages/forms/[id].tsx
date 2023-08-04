// pages/forms/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import ResponseCard from '@/components/ResponseCard';
import Link from 'next/link';   

const FormId = () => {
    const router = useRouter();
    const { id } = router.query;
    const [formData, setFormData] = useState<any>(null); // Replace 'any' with your actual form data type

    useEffect(() => {
        fetchFormData();
    }, [id]);

    const fetchFormData = async () => {
        try {
            const res = await fetch(`/api/forms/${id}`);
            const data = await res.json();
            console.log('formData:', data); // Log the formData to inspect the data
            setFormData(data);
        } catch (error) {
            console.error('Error fetching form data:', error);
        }
    };

    return (
        <Layout>
            <Link href="/datarequest">
                <a className=' text-black underline underline-offset-8'>Back to Home</a>
            </Link>
            <div className="w-5/6 mx-auto py-10">
                <div className="flex flex-wrap p-4 mb-8 w-full">
                    <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
                        <h4 className="text-2xl font-medium mb-2 text-[#131313]">
                            {formData?.title}
                        </h4>
                        <div className="h-1 w-20 bg-[#131313] rounded"></div>
                    </div>
                    <p className="lg:w-2/3 text-[18px] w-full leading-relaxed text-[#131313]">
                        {formData?.description}
                    </p>
                </div>
                {/* Iterate over the form fields and pass the question data to ResponseCard */}
                {formData?.fields.map((field: any) => (
                    <div key={field.id}>
                        {/* Pass the entire field object to ResponseCard */}
                        <ResponseCard field={field} />
                    </div>
                ))}

                <button
                    onClick={() => {
                        console.log('Form submitted!');
                    }}
                    className='text-black'
                >
                    Save Response
                </button>
            </div>
        </Layout>
    );
};

export default FormId;
