import React from "react";
import { Button, Typography } from "antd";
import BackButton from "../Shared/BackButton/BackButton";

type EmailVerifiedProps = {
  handleContinue: () => void;
  handlePrevious: () => void;
};

const EmailVerified: React.FC<EmailVerifiedProps> = ({
  handleContinue,
  handlePrevious,
}) => {
  const { Title, Text } = Typography;

  return (
    <div className="text-center">
      <img src="/imgs/verify.png" />
      <Title level={2} style={{ marginTop: "3px" }}>
        Email verified
      </Title>
      <Text>
        Your accounnt has been verified successfully.
        <br />
         Click below to setup your store.
      </Text>
      <br />
      <Button
        type="primary"
        htmlType="submit"
        style={{ width: "80%" }}
        onClick={handleContinue}
      >
        Continue
      </Button>
      <BackButton handlePrevious={handlePrevious} />
    </div>
  );
};

export default EmailVerified;
