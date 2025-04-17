import Be from "../../assets/login/Mask group.svg";
import "../../style/common/beLogo.scss";
export const BElogo = () => {
  return (
    <div className="be-logo-div">
      <img src={Be} alt="" className="be-logo" />
      <div className="div-text">
        <h1>Welcome to WORKHIVE!</h1>
        <ul>
          <li>
            Employee Management: View detailed profiles, track performance, and
            manage attendanc
          </li>
          <li>
            Performance Insights: Analyze team goals, progress, and achievements
          </li>
          <li>
            Attendance & Leaves: Track attendance patterns and manage leave
            requests effortlessly.
          </li>
        </ul>
      </div>
    </div>
  );
};
