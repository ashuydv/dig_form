import React, { lazy, Suspense } from 'react';
import { Listbox } from '@headlessui/react';

interface QuestionTypeProps {
  questionType: string;
  setQuestionType: (newQuestionType: string) => void;
  questionOptions: string[]; // If you need to pass question options, add them here
}

const handleFileChange = (file: File | null) => {
  console.log(file);
};

const questionComponents: Record<string, React.FC<{}>> = {
  'Multiple Choice': lazy(() => import('./MultipleChoice')),
  'Short Answer': lazy(() => import('./ShortAnswer')),
  'Long Answer': lazy(() => import('./LongAnswer')),
  'Slider': lazy(() => import('./Slider')),
  'File Upload': lazy(() => import('./FileUpload')),
  'Currency': lazy(() => import('./Currency')),
};

const QuestionType: React.FC<QuestionTypeProps> = ({ questionType, setQuestionType, questionOptions }) => {
  const handleQuestionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuestionType(e.target.value);
  };

  const QuestionComponent = questionComponents[questionType];

  return (
    <div className="relative">
      <Listbox value={questionType} onChange={setQuestionType}>
        <Listbox.Button className='w-full flex items-center justify-between'>
          <span className="block font-medium">{questionType}</span>
          <span className='text-sm'>
            i
          </span>
        </Listbox.Button>
        <Listbox.Options
          className="absolute z-10 w-full py-2 border-2 border-[#131313] mt-1 overflow-auto text-base bg-white rounded-[4px] max-h-36"
        >
          {Object.keys(questionComponents).map((name) => (
            <Listbox.Option key={name} value={name}>
              {({ selected }) => (
                <div
                  className={`${selected ? 'bg-[#AE86FF] text-gray-100' : 'bg-[#fff] text-black'
                    } cursor-pointer select-none flex items-center justify-between relative py-2 px-5 pr-4`}
                >
                  <span className="block font-medium">{name}</span>
                  <span className='text-sm'>I</span>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <Suspense fallback={<div>Loading...</div>}>
        <QuestionComponent />
      </Suspense>
    </div>
  );
};

export default QuestionType;
