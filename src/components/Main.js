import React, { useState } from 'react';
import Form from './Form';
import Cards from './Cards';

function MainLayout() {


    const [name, setName] = useState('0000 0000 0000');
    
    

    return (
        <main className="grid grid-cols-2 h-screen">
            <div className="border-2">
                <p>cards here</p>
                <Cards/>
            </div>
            <div>
                <p>Form here</p>
                <Form/>
            </div>

        </main>

    );
    
}

export default MainLayout;