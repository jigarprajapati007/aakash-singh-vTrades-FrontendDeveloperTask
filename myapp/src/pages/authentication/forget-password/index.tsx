import { BElogo } from "../../../components/common/BElogo";
import "../../../style/auth/emailVerificationAndPasswordRecovery.scss";
import { useState } from "react";
import "../../../style/auth/emailVerificationAndPasswordRecovery.scss";
import { PasswordRecoveryEmail } from "../../../components/sections/authentication/PasswordRecoveryEmail";
import { PasswordRecoveryOtp } from "../../../components/sections/authentication/PasswordRecoveryOtp";
import { PasswordResetScreen } from "../../../components/sections/authentication/PasswordResetScreen";
const ForgetPassword = () => {
  const [step, setStep] = useState<number>(1);
  const getPasswordScreens = () => {
    switch (step) {
      case 1:
        return <PasswordRecoveryEmail setStep={setStep} />;
      case 2:
        return <PasswordRecoveryOtp setStep={setStep} />;
      case 3:
        return <PasswordResetScreen setStep={setStep} />;
      default:
        break;
    }
  };

  return (
    <div className="emailPassword-container">
      <BElogo />
      {getPasswordScreens()}
    </div>
  );
};

export default ForgetPassword;
