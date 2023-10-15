import React from "react";
import { Typography, Button } from "antd";
import BackButton from "../Shared/BackButton/BackButton";
import InputVerificationCode from "../Shared/InputVerificationCode/InputCode";

type CheckEmailProps = {
  handleCheckEmail: () => void;
  handlePrevious: () => void;
};

const CheckEmail: React.FC<CheckEmailProps> = ({
  handleCheckEmail,
  handlePrevious,
}) => {
  const { Title, Text } = Typography;

  return (
    <div className="text-center">
      <img src="/imgs/purple_mail.png" />
      <Title level={2} style={{ marginTop: "3px" }}>
        Check your email
      </Title>
      <Text>We sent a verification code to</Text>
      <br />
      <p style={{ marginTop: "18px" }}> gmail@gmail.com</p>
      <InputVerificationCode />
      <Button
        type="primary"
        htmlType="submit"
        onClick={handleCheckEmail}
      >
        Verify email
      </Button>

      <Typography>
        Didn’t receive the email? <a>Click to resend</a>
      </Typography>

      <BackButton handlePrevious={handlePrevious} />
    </div>
  );
};

export default CheckEmail;
