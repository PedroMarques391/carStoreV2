import React, { ReactNode, useState, useRef, useEffect } from 'react';
import { IconDown, IconUp } from './Icons';

interface IFaqProps {
    children: ReactNode;
    question: string;
}

const FAQ = ({ children, question }: IFaqProps): React.JSX.Element => {
    const [showQuestion, setShowQuestion] = useState<boolean>(false)
    const [height, setHeight] = useState<string>('0px')
    const divRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function fetchData() {
            if (showQuestion && divRef.current) {
                setHeight(`${divRef.current.scrollHeight}px`)
            } else {
                setHeight('0px')
            }
        }
        fetchData()
    }, [showQuestion])

    const handleQuestion = (): void => {
        setShowQuestion(!showQuestion);
    }

    return (
        <section className='flex flex-col w-[94%] md:w-4/5'>
            <button onClick={handleQuestion} className='shadow-xl rounded-lg mb-5 hover:bg-gray-100/95 transition-all duration-500'>
                <div className='flex justify-between p-5 gap-x-1'>
                    <p className='text-base sm:text-lg text-left'>{question}</p>
                    <div>{!showQuestion ? IconDown : IconUp}</div>
                </div>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden`}
                style={{ maxHeight: height, opacity: showQuestion ? 1 : 0 }}
            >
                <div ref={divRef} className='text-left pl-5 pb-5'>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
