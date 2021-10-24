import "./topbar.scss";
import {
  PhoneCallbackOutlined,
  MailOutline,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <a href="#home" className="logo">
            Odhiambo Cuttice.
          </a>
          <div className="topbar-contacts">
            <MailOutline className="icon" />
            <span>odhiambocuttice@gmail.com</span>
          </div>
          <div className="topbar-contacts">
            <PhoneCallbackOutlined className="icon" /> <span>0704195820</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbar-right-social-icons">
            <a
              href="https://github.com/odhiambocuttice"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icons" />
            </a>
          </div>
          <div className="topbar-right-social-icons">
            <a
              href="https://www.linkedin.com/in/cuttice-omondi/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
