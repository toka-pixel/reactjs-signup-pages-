import { Button, Typography } from "antd";

type BackButtonProps = {
  handlePrevious: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ handlePrevious }) => {
  return (
    <Button
      type="link"
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        alignItems: "end",
      }}
      onClick={handlePrevious}
      
    >
      <img src="/imgs/arrow-left.png" alt='arrow-left' style={{marginRight:'5px'}} />
      <Typography> Back to log in</Typography>
    </Button>
  );
};

export default BackButton;
