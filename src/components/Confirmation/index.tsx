import React, { useState } from "react";
import CheckEmail from "./CheckEmail";
import EmailVerified from "./EmailVerified";

type ConfirmationProps = {
  handleNext: () => void;
  handlePrevious: () => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({
  handleNext,
  handlePrevious,
}) => {
  const [verifyStatus, setVerifyStatus] = useState<boolean>(true);

  const handleCheckEmail = () => {
    setVerifyStatus(false);
  };

  const handleContinue = () => {
    handleNext();
  };

  const BackToCheckEmail = () => {
    setVerifyStatus(true);
  };

  return verifyStatus ? (
    <CheckEmail
      handleCheckEmail={handleCheckEmail}
      handlePrevious={handlePrevious}
    />
  ) : (
    <EmailVerified
      handleContinue={handleContinue}
      handlePrevious={BackToCheckEmail}
    />
  );
};

export default Confirmation;
