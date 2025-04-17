import { InputAdornment, TextField, Link, Button } from "@mui/material";
import { Card } from "@mui/material";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import google from "../../../assets/google.svg";
import microsoft from "../../../assets/microsoft.svg";
import danger from "../../../assets/Frame.svg";
import Separator from "../../../assets/Separator.svg";
import rectangle from "../../../assets/rectanglewhite.svg";
import { Formik } from "formik";
import { object, string, ref } from "yup";
import Checkbox from "@mui/material/Checkbox";
import Cookies from "js-cookie";
import { useGoogleLogin } from "@react-oauth/google";
type Props = {
  textLine: string;
  linkTxt: string;
  titletxt: string;
};
const LoginForm: React.FC<Props> = ({ textLine, linkTxt, titletxt }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailVal, setemailVal] = useState("");
  const [passwordVal, setpasswordVal] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ConfirmpasswordVal, setConfirmpasswordVal] = useState("");

  const loginFunc = useGoogleLogin({
    onSuccess: (codeResponse) => {
      alert("Sign in successful.");
      console.log("creds", codeResponse);
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  const userSchema = object({
    email: string()
      .required("Enter a valid email.")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email"),
    password: string().required("Enter a valid password."),
    confirmPassword: string()
      .oneOf([ref("password"), ""], "Oops! Passwords Don’t Match")
      .required("Confirm Password is required"),
  });

  return (
    <React.Fragment>
      <Card className="card-login">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={userSchema}
          onSubmit={(values) => {
            const data = { username: values.email, password: values.password };
            Cookies.set("email", values.email);
            alert("successful.");
          }}
        >
          {({
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit} className="form-reg">
              <div>
                <h4 className="h4-login-title mb-8">{titletxt}</h4>
                <p className="p-tag-login mb-2">
                  Manage your workspace seamlessly. {titletxt} to continue.
                </p>
                <label htmlFor="" className="label-login">
                  Email Address
                </label>
                <TextField
                  fullWidth
                  name="email"
                  style={{ marginBottom: !errors.email ? 20 : 0 }}
                  autoComplete="new-password"
                  value={emailVal}
                  onChange={(event) => {
                    setemailVal(event.target.value);
                    handleChange(event);
                  }}
                  placeholder={"Enter your email"}
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
                        borderColor: !errors.email ? "#3C66FA" : "#c80a15", // Dynamic focus color
                      },
                    },
                  }}
                />
                {errors.email && (
                  <div className="set-div-valid" style={{ marginTop: -12 }}>
                    <img width={16} src={danger} alt="" />
                    <p
                      className="p-tag-msg"
                      style={{ marginBottom: 20, marginTop: 22 }}
                    >
                      {errors.email}
                    </p>
                  </div>
                )}
                <label htmlFor="" className="label-login">
                  Password
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
                        borderColor: !errors.password ? "#3C66FA" : "#c80a15",
                      },
                    },
                  }}
                  fullWidth
                  name="password"
                  placeholder={"Enter your password"}
                  className="input-box"
                  onBlur={(e) => {
                    handleBlur(e);
                  }}
                  type={showPassword ? "text" : "password"}
                  value={passwordVal}
                  onChange={(event) => {
                    setpasswordVal(event.target.value);
                    if (titletxt !== "Sign Up") {
                      setFieldValue("confirmPassword", event.target.value);
                    }
                    handleChange(event);
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
                />{" "}
                {errors.password && (
                  <div className="set-div-valid">
                    <img width={16} src={danger} alt="" />
                    <p className="p-tag-msg" style={{ marginTop: 16 }}>
                      {errors.password}
                    </p>
                  </div>
                )}
                {titletxt === "Sign Up" && (
                  <div style={{marginTop:10}}>
                    <label htmlFor="" className="label-login">
                      Confirm password
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
                        <img src={danger} alt="" width={16} />
                        <p className="p-tag-msg" style={{ marginTop: 16 }}>
                          {errors.confirmPassword}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {titletxt !== "Sign Up"&&<div className="login-forget-set">
                  <div style={{ display: "flex" }}>
                    <Checkbox
                      className="check-remember"
                      icon={<img src={rectangle} width={12} height={12} />}
                    />
                    <h3 className="rember-txt mt-[6px]">Remember me</h3>
                  </div>
                  <Link
                    href="/forget-pass"
                    variant="subtitle2"
                    underline="hover"
                    className="forget-txt"
                  >
                    Forgot password?
                  </Link>
                </div>}
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#8854c0",
                    color: "#FFFFFF",
                    borderRadius: 10,
                    height: 50,
                    marginTop: 20,
                    textTransform: "capitalize",
                  }}
                  className="btn-login"
                >
                  {titletxt === "Sign Up" ? titletxt : "Login"}
                </Button>
              </div>
            </form>
          )}
        </Formik>
        <img
          src={Separator}
          alt=""
          style={{ margin: "inherit", marginLeft: 8 }}
        />

        <Button
          onClick={() => loginFunc()}
          fullWidth
          type="submit"
          variant="contained"
          className="btn-login login-google-btn"
          // disabled={showBtnDisablity}
        >
          <img src={google} alt="" style={{ marginRight: 15 }} /> Sign In with
          Google
        </Button>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          className="btn-login login-google-btn"
          // disabled={showBtnDisablity}
        >
          <img src={microsoft} alt="" style={{ marginRight: 15 }} /> Sign In
          with Microsoft
        </Button>
      </Card>
      <div className="reg-dont-txt-div">
        <h4 className="dont-acc-txt mt-[20px]">{textLine}</h4>
        <Link
          href={linkTxt}
          variant="subtitle2"
          underline="hover"
          className="reg-txt"
        >
          {titletxt === "Sign In" ? "Sign Up" : "Sign In"}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
