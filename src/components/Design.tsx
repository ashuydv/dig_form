import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard';

const Design = ({ formData, setFormData }) => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (formData && formData.fields) {
            setQuestions(formData.fields.map((field: any) => ({ ...field, required: false })));
        } else {
            setQuestions([]);
        }
    }, [formData]);

    const handleAddQuestion = () => {
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            { question: '', questionType: 'Short Answer', options: [], required: false, questionId: Date.now() },
        ]);
    };

    const handleDuplicateQuestion = (index) => {
        setQuestions((prevQuestions) => {
            const newQuestion = { ...prevQuestions[index], questionId: Date.now() };
            return [...prevQuestions.slice(0, index + 1), newQuestion, ...prevQuestions.slice(index + 1)];
        });
    };

    const handleRemoveQuestion = (index) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions.splice(index, 1);
            return updatedQuestions;
        });
    };

    const handleQuestionChange = (index, field, value) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = prevQuestions.map((question, i) => {
                if (i === index) {
                    return field === 'options' ? { ...question, options: value } : { ...question, [field]: value };
                }
                return question;
            });
            return updatedQuestions;
        });
    };

    const handleQuestionTypeChange = (index, value) => {
        setQuestions((prevQuestions) => {
            const updatedQuestions = [...prevQuestions];
            updatedQuestions[index].questionType = value;
            return updatedQuestions;
        });
    };

    const handleSave = () => {
        const updatedFormData = {
            ...formData,
            fields: questions.map((question) => ({
                question: question.question,
                required: question.required,
                questionType: question.questionType,
                options: question.options,
            })),
        };
        console.log('Form data saved:', updatedFormData);

        setFormData(updatedFormData);
    };

    return (
        <div>
            {questions.map((question, index) => (
                <QuestionCard
                    key={question.questionId}
                    questionId={question.questionId}
                    question={question}
                    onCopy={() => handleDuplicateQuestion(index)}
                    onDelete={() => handleRemoveQuestion(index)}
                    onQuestionChange={(field: any, value: any) => handleQuestionChange(index, field, value)}
                    onQuestionTypeChange={(value: any) => handleQuestionTypeChange(index, value)}
                />
            ))}
            <div className="flex items-center">
                <button onClick={handleAddQuestion}>Add Question</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default Design;
