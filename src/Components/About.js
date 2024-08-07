import React, { useRef } from 'react';
import ContactTitleImage from '../Images/Contact/Contact.png';

export default function Contact() {
    const formRef = useRef(null);

    const submitForm = (e) => {
        e.preventDefault();
        formRef.current.reset();
        alert('Thank you for your message. We will get back to you shortly.');
    };

    return (
        <div class="Contact-Container">
            <img src={ContactTitleImage} alt="Contact Title" className="Contact-Form-Title" />
            <div class="Contact-Form-Container">
                <form class="Contact-Form" ref={formRef}>
                    <input
                        type="text"
                        placeholder="First Name*"
                    />
                    <input
                        type="text"
                        placeholder="Last Name*"
                    />
                    <input
                        type="text"
                        placeholder="Company Name*"
                    />
                    <input
                        type="text"
                        placeholder="Title*"
                    />
                    <input
                        type="text"
                        placeholder="Email*"
                    />
                    <textarea style={{ resize: 'none' }} type="text"
                        placeholder="Message*"
                    />
                    <div className="CheckBoxContainer">
                        <input type="checkbox" id="TermsAndConditions" name="TermsAndConditions" />
                        <label for="TermsAndConditions"> I agree to the terms and conditions.</label>
                    </div>
                    <button class="Contact-Form-Button" onClick={submitForm}>
                        Excepteur
                    </button>
                </form>
            </div>
        </div>
    );
}
