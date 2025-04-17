import React, { useEffect, useState } from "react";
import danger from "../../../src/assets/Frame.svg";
import OTPInput from "react-otp-input";
import Timer from "../../../src/assets/Timer.svg";

type Props = {
  setotpNumberVal: React.Dispatch<React.SetStateAction<string>>;
  showErrorMsg: boolean;
  otpNumberVal: string;
};

export const OtpScreen: React.FC<Props> = ({
  otpNumberVal,
  setotpNumberVal,
  showErrorMsg,
}) => {
  const [showCodeMsg, setshowCodeMsg] = useState(false);
  let [showCounterMsg, setshowCounterMsg] = useState(30);

  useEffect(() => {
    counterMake();
    setTimeout(() => {
      setshowCodeMsg(true);
    }, 30000);
  }, []);

  //Conuter of 30 sec
  const counterMake = () => {
    let x = 30;
    setInterval(() => {
      if (showCounterMsg > 0) {
        x--;
        setshowCounterMsg(x);
      }
    }, 1000);
  };

  return (
    <React.Fragment>
      <OTPInput
        value={otpNumberVal}
        onChange={setotpNumberVal}
        numInputs={6}
        inputStyle={showErrorMsg ? "otp-input-error" : "otp-input"}
        placeholder="000000"
        renderInput={(props) => <input {...props} />}
      />
      {showErrorMsg && (
        <div className="set-div-valid" style={{ marginTop: -12 }}>
          <img src={danger} alt="" width={16} />
          <p
            className="p-tag-msg"
            style={{ marginBottom: 20, marginTop: 22, fontSize: 13 }}
          >
            {"The One Time Password was wrong. Try Again."}
          </p>
        </div>
      )}
      {showCodeMsg ? (
        <p className="p-tag-timer" style={{ color: "#8854c0" }}>
          Resend OTP
        </p>
      ) : (
        <p className="p-tag-timer">
          <img src={Timer} alt="" style={{ marginRight: 15 }} />
          {showCounterMsg} sec
        </p>
      )}
    </React.Fragment>
  );
};
