import { Steps } from "antd";
import Details from "../../Details/Details";
import Confirmation from "../../Confirmation";
import StoreInfo from "../../StoreInfo/StoreInfo";
import { useEffect, useState } from "react";

type FormStepsProps = {
  rightSideData: ({
    right_title,
    right_logo,
  }: {
    right_title: string;
    right_logo: string;
  }) => void;
};

const FormSteps: React.FC<FormStepsProps> = ({ rightSideData }) => {
  const Step = Steps.Step;

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prev) => ++prev);
  };

  const handlePrevious = () => {
    setActiveStep((prev) => --prev);
  };

  const steps = [
    {
      title: "Your details",
      description: "Provide your basic information",
      content: <Details handleNext={handleNext} />,
      right_title: "Start turning your ideas into reality.",
      right_logo: "ideas.png",
    },
    {
      title: "Confirmation",
      description: "Confirm your email",
      content: (
        <Confirmation handleNext={handleNext} handlePrevious={handlePrevious} />
      ),
      right_title: "Verify your account now",
      right_logo: "mail.png",
    },
    {
      title: "Store information",
      description: "Set your store main info",
      content: <StoreInfo handlePrevious={handlePrevious} />,
      right_title: "Setup your store the way you like",
      right_logo: "store.png",
    },
  ];

  useEffect(() => {
    rightSideData({
      right_title: steps[activeStep].right_title,
      right_logo: steps[activeStep].right_logo,
    });
  }, [activeStep]);

 

  return (
    <div>
      <Steps progressDot size='small' current={activeStep}>

        {steps.map((item) => (
          <Step
            key={item.title}
            description={item.description}
            title={item.title}
           
          />
        ))}
      </Steps>
      <div className="steps-content">{steps[activeStep].content}</div>
      <div >
        {/* {activeStep < steps.length - 1 && (
          <Button type="primary" onClick={handleNext} block>
            Next
          </Button>
        )} */}

        {/* {activeStep > 0 && (
          <Button
            type="link"
            style={{ display: "flex", justifyContent: "center" }}
            onClick={handlePrevious}
            block
          >
            <img src="/imgs/arrow-left.png" />{" "}
            <Typography> Back to log in</Typography>
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default FormSteps;
