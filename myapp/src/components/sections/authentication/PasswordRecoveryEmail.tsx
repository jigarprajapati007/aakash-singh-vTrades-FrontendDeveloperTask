import { Button } from "@mui/material";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import Group from "../../../assets/Group.svg";
import Cookies from "js-cookie";
import { EmailFieldComp } from "../../../components/common/EmailFieldComp";
import { ModalComp } from "../../common/ModalComp";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
export const PasswordRecoveryEmail: React.FC<Props> = ({ setStep }) => {
  const [showBtnDisablity, setShowBtnDisablity] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [emailVal, setemailVal] = useState("");
  const [showErrorMsg, setshowErrorMsg] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (emailVal) {
      setShowBtnDisablity(false);
    } else {
      setShowBtnDisablity(true);
    }
  }, [emailVal]);

  return (
    <React.Fragment>
      <Card className="card-email-verify">
        <div>
          <h4 className="h4-e-verify-title mb-8 ">Forgot Your Password?</h4>
          <>
            <p className="p-tag-e-password">
              Don’t worry! Enter your email address, and we’ll send you a link
              to reset it.
            </p>
            <label htmlFor="" className="label-login">
              Email Address
            </label>
            <EmailFieldComp
              showErrorMsg={showErrorMsg}
              emailVal={emailVal}
              setemailVal={setemailVal}
              setShowBtnDisablity={setShowBtnDisablity}
            />
          </>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "#8854c0",
              borderRadius: 10,
              height: 50,
              marginTop: 20,
              color: showBtnDisablity ? "grey" : "#FFFFFF",
              textTransform: "capitalize",
            }}
            className="btn-login"
            onClick={() => {
              if (emailRegex.test(emailVal)) {
                Cookies.set("userEmail", emailVal);
                setOpenModal(true);
              } else {
                setshowErrorMsg(false);
              }
            }}
            disabled={showBtnDisablity}
          >
            Submit
          </Button>
        </div>
      </Card>
      <ModalComp openModal={openModal} setStep={setStep} title="Link Sent Successfully!" desc={"Check your inbox! We’ve sent you an email with instructions to reset your password."} imgurl={Group}/>
    </React.Fragment>
  );
};
