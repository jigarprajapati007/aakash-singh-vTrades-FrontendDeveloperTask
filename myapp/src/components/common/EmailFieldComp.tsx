import React from "react";
import danger from "../../../src/assets/danger.svg";
import { TextField } from "@mui/material";
type Props = {
  showErrorMsg: boolean;
  emailVal: string;
  setemailVal: React.Dispatch<React.SetStateAction<string>>;
  setShowBtnDisablity: React.Dispatch<React.SetStateAction<boolean>>;
};
export const EmailFieldComp: React.FC<Props> = ({
  showErrorMsg,
  emailVal,
  setemailVal,
  setShowBtnDisablity,
}) => {
  return (
    <React.Fragment>
      <TextField
        fullWidth
        name="email"
        type="email"
        autoComplete="new-password"
        value={emailVal}
        style={{ marginBottom: showErrorMsg ? 20 : 0 }}
        onChange={(event) => {
          console.log("jigar", event.target.value);
          setemailVal(event.target.value);
          if (event.target.value) {
            setShowBtnDisablity(false);
          }
        }}
        placeholder={"Enter your email "}
        className="input-box"
        sx={{
          "& .MuiInputLabel-root": {
            paddingTop: 0.3,
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "#3C66FA", // Dynamic focus color
            },
          },
        }}
      />
      {!showErrorMsg && (
        <div className="set-div-valid" style={{ marginTop: -12 }}>
          <img src={danger} alt="" width={16} />
          <p className="p-tag-msg" style={{ marginBottom: 20, marginTop: 22 }}>
            {"Please enter a valid email."}
          </p>
        </div>
      )}
    </React.Fragment>
  );
};
