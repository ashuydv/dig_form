import React, { useRef, useState } from 'react';
import {
    ArrowUpIcon,
    CheckCircleIcon,
    XCircleIcon
} from '@heroicons/react/outline';

type Props = {
    onFileChange: (file: File | null) => void;
};

const FileUpload: React.FC<Props> = ({ onFileChange }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setSelectedFile(file);
        onFileChange(file);
    };

    const handleClearFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset the input to allow selecting the same file again
        }
        onFileChange(null);
    };

    return (
        <div className="flex items-center">
            <label className="bg-white text-[#131313] font-medium border-2 border-[#131313] drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] py-2 px-4 rounded-[4px] cursor-pointer">
                {selectedFile ?
                    (
                        <div className='flex items-center
                            text-green-800
                        '
                        >
                            <span>
                                <CheckCircleIcon
                                    className='w-5 h-5' />
                            </span>
                            <span className='ml-2'>File Uploaded</span>
                        </div>
                    ) : (
                        <div className='flex items-center'>
                            <span>
                                <ArrowUpIcon className='w-4 h-4' />
                            </span>
                            <span className='ml-2'>Upload File</span>
                        </div>
                    )}
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                />
            </label>
            {selectedFile && (
                <div className=" flex items-center justify-start ml-3">
                    <span>{selectedFile.name}</span>
                    <button
                        className="ml-2 text-red-600 font-medium underline text-md"
                        onClick={handleClearFile}
                    >
                        <XCircleIcon
                            className='w-5 h-5'
                        />
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
