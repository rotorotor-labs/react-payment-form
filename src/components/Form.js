import React, { useRef } from 'react';

function Form() {

    return(
        <form className="">
            <div>
                <label for="name">Cardholder Name</label>
                <input id="name" name="name" type="text" required placeholder="e.g Salty The Seal"></input>
                <label for="account">Card Number</label>
                <input id="account" name="account" type="number" required placeholder="e.g 1234 5678 9123 0000"></input>
            </div>
            <div>
                <fieldset>
                    <legend>Exp. Date (MM/YY)</legend>
                        <label className="sr-only" for="expiry-mm">MM</label>
                        <input id="expiry-mm" name="expiry-mm" type="number" required placeholder="MM"></input>
                        <label className="sr-only" for="expiry-yy">YY</label>
                        <input id="expiry-yy" name="expiry-yy" type="number" required placeholder="YY"></input>
                </fieldset>
     
                <label for="cvc">CVC</label>
                <input id="cvc" name="cvc" type="number" required placeholder="e.g 123" minlength="3"></input>
            </div>
            <button id="btn-submit" type="submit" name="submit">Confirm</button>
        </form>
    );

}

export default Form;