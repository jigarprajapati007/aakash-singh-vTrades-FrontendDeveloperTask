import { InputAdornment, TextField, Button } from "@mui/material";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import alert from "../../../assets/Frame.svg";
import rightClick from "../../../assets/rightClick.svg";
import { Formik } from "formik";
import { object, string, ref } from "yup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import "../../../style/auth/passwordReset.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Cookies from "js-cookie";
import { ModalComp } from "../../common/ModalComp";

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export const PasswordResetScreen: React.FC<Props> = ({ setStep }) => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVal, setpasswordVal] = useState("");
  const [ConfirmpasswordVal, setConfirmpasswordVal] = useState("");

  const [showErrorMsg] = useState(false);
  

  const userSchema = object({
    password: string().required("Please enter a valid password"),
    confirmPassword: string()
      .oneOf([ref("password"), ""], "Oops! Passwords Don’t Match")
      .required("Confirm Password is required"),
  });

  return (
    <React.Fragment>
      <Card className="card-password-reset">
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={userSchema}
          onSubmit={(values, { setSubmitting }) => {
            setOpenModal(true)
          }}
        >
          {({ errors, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} className="form-reg">
              <div>
                <h4 className="h4-e-verify-title mb-6">Create New Password</h4>
                <p className="p-tag-e-verify mb-2">
                  Choose a strong and secure password to keep your account safe.
                  Make sure it’s easy for you to remember, but hard for others
                  to guess!
                </p>
                <label htmlFor="" className="label-login">
                  Password
                </label>
                <TextField
                  fullWidth
                  name="password"
                  type={showPassword ? "text" : "password"}
                  style={{ marginBottom: !errors.password ? 20 : 0 }}
                  autoComplete="new-password"
                  value={passwordVal}
                  onChange={(event) => {
                    setpasswordVal(event.target.value);
                    handleChange(event);
                  }}
                  placeholder={"Enter your new Password"}
                  className="input-box"
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityOffIcon
                          style={{
                            color: "#ffffff",
                            width: 21,
                            height: 21,
                            cursor: "pointer",
                          }}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <VisibilityIcon
                            style={{
                              width: 21,
                              height: 21,
                              color: "#ffffff",
                              cursor: "pointer",
                            }}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {errors.password && (
                  <div className="set-div-valid" style={{ marginTop: -12 }}>
                    <img src={alert} alt="" width={16} />
                    <p
                      className="p-tag-msg"
                      style={{ marginBottom: 20, marginTop: 22 }}
                    >
                      {errors.password}
                    </p>
                  </div>
                )}
                <label htmlFor="" className="label-login">
                  Re-enter your new password
                </label>
                <TextField
                  style={{ marginBottom: 10 }}
                  autoComplete="new-password"
                  sx={{
                    "& .MuiInputLabel-root": {
                      paddingTop: 0.3,
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#3C66FA",
                      },
                    },
                  }}
                  fullWidth
                  name="confirmPassword"
                  placeholder={"Enter your new password"}
                  className="input-box"
                  
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
                  type={showConfirmPassword ? "text" : "password"}
                  value={ConfirmpasswordVal}
                  onChange={(event) => {
                    setConfirmpasswordVal(event.target.value);
                    handleChange(event);
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showConfirmPassword ? (
                          <VisibilityOffIcon
                          style={{
                            color: "#ffffff",
                            width: 21,
                            height: 21,
                            cursor: "pointer",
                          }}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          />
                        ) : (
                          <VisibilityIcon
                            style={{
                              width: 21,
                              height: 21,
                              color: "#ffffff",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />{" "}
                {errors.confirmPassword && (
                  <div className="set-div-valid">
                    <img src={alert} alt="" width={16} />
                    <p className="p-tag-msg" style={{ marginTop: 16 }}>
                      {errors.confirmPassword}
                    </p>
                  </div>
                )}
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
                  className="btn-login"
                >
                  Update Password
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </Card>
      <ModalComp openModal={openModal}  title="Password Created!" desc={"Your password has been successfully updated. You can now use your new password to log in."} imgurl={rightClick}/>
    </React.Fragment>
  );
};
