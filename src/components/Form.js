import React from 'react';

function Form(props) {
    return(
        <form className="flex flex-col max-w-md gap-5">
            <div className="flex flex-col">
                <label for="name" className="mb-1">Cardholder Name</label>
                <input onChange={ (e) => props.updateName(e.target.value) } className="border border-metal rounded p-1" id="name" name="name" type="text" required placeholder="e.g Salty The Seal"></input>
                
                <label for="account" className="mt-4 mb-1">Card Number</label>
                <input onChange={ (e) => props.updateCardNumber(e.currentTarget.value) }
                className="input-primary" id="account" name="account" type="text" required value={props.cardNumber} placeholder="e.g 1234 5678 9123 0000"></input>
            
            </div>
            <div className="flex gap-5">
                <fieldset className="flex gap-3 w-2/4 p-1">
                    <legend className="mb-1">Exp. Date (MM/YY)</legend>
                        <label className="sr-only" for="expiry-mm">MM</label>
                        <input className="border border-metal rounded  w-2/4 p-1" id="expiry-mm" name="expiry-mm" type="number" required placeholder="MM"></input>
                        <label className="sr-only" for="expiry-yy">YY</label>
                        <input className="border border-metal rounded  w-2/4 p-1" id="expiry-yy" name="expiry-yy" type="number" required placeholder="YY"></input>
                </fieldset>
                <div className="flex flex-col gap-0 w-2/4">
                    <label for="cvc" className="mb-1">CVC</label>
                    <input className="border border-metal rounded p-1" id="cvc" name="cvc" type="number" required placeholder="e.g 123" minlength="3"></input>
                </div>
            </div>
            <button className="bg-purple text-white p-3 w-full rounded" id="btn-submit" type="submit" name="submit">Confirm</button>
        </form>
    );

}

export default Form;