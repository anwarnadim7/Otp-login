import { useState } from "react"
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setshowOtpInput] = useState(false)

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handlePhoneSubmit = (event) => {
        event.preventDefault();
        //Phone Validations
        const regex = /[^0-9]/g;
        if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
            alert("Please enter a valid 10 digit phone number.");
            return;
        }
        //Call Backend Api
        //Show Otp Field
        setshowOtpInput(true);
    }
    const onOtpSubmit = (otp) => {
        console.log("Login Success", otp)
    }

    return (
        <div>
            {!showOtpInput ? <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder="Enter Phone Number"
                />
                <button type="submit">Submit</button>
            </form> : <div>
                <p>Enter OTP sent to {phoneNumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>
            }
        </div>
    )
}

export default PhoneOtpForm