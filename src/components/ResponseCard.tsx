import React from 'react';
import ShortAnswer from './ShortAnswer';
import LongAnswer from './LongAnswer';
import MultipleChoice from './MultipleChoice';
import Checkboxes from './Checkboxes';
import FileUpload from './FileUpload';
import Slider from './Slider';

type Props = {
    field: {
        question: string;
        questionType: string;
        options: string[];
        required: boolean;
    };
};

const responseComponents: { [key: string]: React.ReactNode } = {
    'Short Answer': <ShortAnswer />,
    'Long Answer': <LongAnswer />,
    'Multiple Choice': <MultipleChoice
        options={['Option 1', 'Option 2', 'Option 3']}
        setOptions={(options) => console.log(options)}
    />,
    'Checkboxes': <Checkboxes />,
    'File Upload': <FileUpload
        onFileChange={(file: any) => {
            console.log('File changed:', file);
        }}
    />,
    'Slider': <Slider />,
};

const ResponseCard = ({ field: { question, questionType, options, required } }: Props) => {
    return (
        <div className="mx-1 border-b-2 border-[#AE86FF40] pb-[30px] my-[25px] relative">
            <div className="bg-[#F7F7F7] p-[24px] py-[30px] border-[2px] border-[#131313] rounded-[10px] drop-shadow-[5px_5px_0px_#131313] relative z-0">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col w-4/5">
                        <h4 className="text-[#131313] text-[20px] font-medium mb-2">
                            {question}
                            <span>{required ? '*' : ''}</span>
                        </h4>
                        <p>{
                            questionType
                        }</p>
                        <div
                            className='mt-[10px]'
                        >{responseComponents[questionType]}</div>
                    </div>
                    <div className="flex flex-wrap">
                        {options &&
                            options.map((option: string) => (
                                <div key={option} className="flex items-center mr-[20px] mb-[10px]">
                                    <div className="w-[20px] h-[20px] border-[2px] border-[#131313] rounded-[50%] mr-[10px]"></div>
                                    <p className="text-[#131313] text-[18px]">{option}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponseCard;
