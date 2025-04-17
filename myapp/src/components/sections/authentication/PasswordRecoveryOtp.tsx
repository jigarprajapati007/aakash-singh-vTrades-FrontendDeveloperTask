import { Button } from "@mui/material";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { OtpScreen } from "../../common/OtpScreen";
type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PasswordRecoveryOtp: React.FC<Props> = ({ setStep }) => {
  const [otpNumberVal, setotpNumberVal] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState(false);


  return (
    <React.Fragment>
      <Card className="card-email-verify">
        <div>
          <h4 className="h4-e-verify-title mb-6">Enter OTP</h4>
          <p className="p-tag-e-password mb-2">
            Enter the OTP that we have sent to your email address{" "}
            {Cookies.get("userEmail")}.
          </p>
          <h4 className="h4-change-email" onClick={() => setStep(1)}>
            Change Email Address
          </h4>
          <OtpScreen
            otpNumberVal={otpNumberVal}
            setotpNumberVal={setotpNumberVal}
            showErrorMsg={showErrorMsg}
          />
        </div>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{
            backgroundColor: "#8854c0",
            color: "#FFFFFF",
            borderRadius: 10,
            height: 50,
            marginTop: 30,
            textTransform: "capitalize",
          }}
          onClick={() => {
            const regex = /^\d+$/;
            if (!regex.test(otpNumberVal)) {
              setshowErrorMsg(true);
            }else{
              setStep(3)
              setshowErrorMsg(false);
            }
          }}
          className="btn-login"
        >
          Continue
        </Button>
      </Card>
    </React.Fragment>
  );
};
