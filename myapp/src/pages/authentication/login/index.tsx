import "../../../style/auth/login.scss";
import LoginForm from "../../../components/sections/authentication/LoginForm";
import { BElogo } from "../../../components/common/BElogo";

const LoginPage = () => {
  return (
    <div className="login-container">
      <BElogo />
      <div className="login-card">
        <LoginForm
          titletxt={"Sign In"}
          linkTxt={"/signup"}
          textLine={"Don't have an account?"}
        />
      </div>
    </div>
  );
};

export default LoginPage;
