import React, { useState } from 'react';
import QuestionType from './QuestionType';
import MultipleChoice from './MultipleChoice';
import ShortAnswer from './ShortAnswer';
import LongAnswer from './LongAnswer';
import Slider from './Slider';
import FileUpload from './FileUpload';
import Currency from './Currency';
import RadioComponent from './RadioComponent';
import {
    ClipboardCopyIcon, TrashIcon,
    ClipboardIcon
} from '@heroicons/react/outline';
import { Switch } from '@nextui-org/react';

const QuestionCard = ({ onCopy, onDelete, questionId, question, onQuestionChange, onQuestionTypeChange }) => {
    const [selectedValue, setSelectedValue] = useState("primary");
    const [isRequired, setIsRequired] = useState(false);

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

    const handleDeleteQuestion = () => {
        onDelete(questionId);
    }

    const handleCopyClick = () => {
        onCopy(questionId);
    };

    const handleFileChange = (file: File | null) => {
        console.log(file);
    } 

    const questionTypes = [
        {
            name: 'Multiple Choice',
            value: 'Multiple Choice',
            component: <MultipleChoice
                options={question.options}
                setOptions={(options) => onQuestionChange('options', options)}
            />,
        },
        {
            name: 'Short Answer',
            value: 'Short Answer',
            component: <ShortAnswer />,
        },
        {
            name: 'Long Answer',
            value: 'Long Answer',
            component: <LongAnswer />,
        },
        {
            name: 'Slider',
            value: 'Slider',
            component: <Slider />
        },
        {
            name: 'File Upload',
            value: 'File Upload',
            component: <FileUpload
                onFileChange={handleFileChange}
            />,
        },
        {
            name: 'Currency',
            value: 'Currency',
            component: <Currency />,
        },
    ];

    const selectedComponent = questionTypes.find((type) => type.name === question.questionType)?.component;

    return (
        <div className="mx-1 border-b-2 border-[#AE86FF40] pb-[30px] my-[25px] relative">
            <div className="bg-[#F7F7F7] p-[24px] py-[30px] border-[2px] border-[#131313] rounded-[10px] drop-shadow-[5px_5px_0px_#131313] relative z-0">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col w-4/5">
                        <input
                            type="text"
                            name="question"
                            placeholder="Type your question here"
                            value={question.question}
                            onChange={(e) => onQuestionChange('question', e.target.value)}
                        />
                        <div className="flex items-center my-3 max-w-[720px]">
                            {selectedComponent}
                        </div>
                    </div>
                    <div className="flex flex-col items-end ml-5 w-1/5">
                        <div className="w-full">
                            <QuestionType
                                questionType={question.questionType}
                                setQuestionType={(newQuestionType) => onQuestionChange('questionType', newQuestionType)}
                                questionOptions={question.options}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4 mb-0">
                    <p className="text-sm text-[#00000080] font-medium">Additional Settings</p>
                    <div className="flex item-center space-x-4">
                        <button onClick={handleDeleteQuestion}>
                            <TrashIcon className="w-[20px] h-[20px]" />
                        </button>
                        <button onClick={handleCopyClick}>
                            <ClipboardIcon className="w-[20px] h-[20px]" />
                        </button>
                        <div className="px-2 text-sm flex items-center">
                            <Switch
                                size="sm"
                                name="required"
                                css={{
                                    '.nextui-c-itiWTf': {
                                        border: '2px solid #131313',
                                        backgroundColor: '#ffffff',
                                    },
                                    '.nextui-c-itiWTf-bDUxer-checked-true': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '.nextui-c-itiWTf-bDUxer-checked-true:hover:not(.nextui-c-itiWTf-bDUxer-checked-true:active)': {
                                        backgroundColor: '#ffffff',
                                    },
                                    '.nextui-c-jjKPqy:checked + .nextui-c-itiWTf:where(.nextui-c-huiNHE) > .nextui-c-eJPKci': {
                                        transform: 'translateX(calc(2.5rem - 2.5rem / 7 - 1.5rem * 0.7))'
                                    },
                                    '.nextui-switch-circle': {
                                        border: '2px solid #131313',
                                        backgroundColor: '#131313',
                                    },
                                }}
                                checked={question.required}
                                onChange={() => onQuestionChange('required', !question.required)}
                            />
                            <span className="ml-2 mt-1 text-[15px]">
                                {question.required ? 'Mandatory' : 'Optional'}
                            </span>
                        </div>
                        <button className="p-0 drop-shadow-none shadow-none border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
