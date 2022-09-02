import React, { useEffect, useState } from 'react';
import Form from './Form';
import { cardNumbFormat } from '../helpers';


function MainLayout() {
    // Destructuring array.
    const [name, setName] = useState('Jenny Doe');
    const [cardNumber, setCardNumber] = useState('');

    return (

        <main className="grid grid-cols-2 h-screen">
            <div className="relative">
                <div className="bg-midnight h-full w-3/5"></div>
                <div className="flex flex-col gap-10 items-center justify-center absolute w-full h-full z-10 top-0 p-10">
                    <div className="block bg-gray w-80 h-48 rounded ml-20">
                        <div className="flex flex-col justify-between h-full p-8">
                            <div><p>logo</p></div>
                            <p>{cardNumbFormat(cardNumber || '0000000000000000')}</p>
                            <div className="flex justify-between">
                                <p>{name}</p>
                                <p>00/00</p>
                            </div>
                        </div>
                    </div>
                    <div className="block z-10 bg-gray w-80 h-48 rounded ml-52">
                        <div className="h-10 w-full mt-7 bg-black"></div>
                            <div className="flex justify-end bg-silver mt-4 mx-5 p-1">
                                <p className="pr-2">000</p>
                            </div>
                    </div>
                </div>

                {/* <Cards/> */}
            </div>
            <div className="flex flex items-center">
                <Form updateName={setName} updateCardNumber={setCardNumber} />
            </div>

        </main>

    );
    
}

export default MainLayout;