import { BElogo } from "../../../components/common/BElogo";
import LoginForm from "../../../components/sections/authentication/LoginForm";

export default function Register() {
  return (
    <div className="login-container">
      <BElogo />
      <div className="login-card">
        <LoginForm
          titletxt={"Sign Up"}
          linkTxt={"/"}
          textLine={"Already have an account?"}
        />
      </div>
    </div>
  );
}
