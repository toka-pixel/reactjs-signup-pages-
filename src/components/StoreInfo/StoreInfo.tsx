import { Button, Input, Typography, Form, Select } from "antd";
import BackButton from "../Shared/BackButton/BackButton";

type StoreInfoProps = {
  handlePrevious: () => void;
};

const StoreInfo: React.FC<StoreInfoProps> = ({ handlePrevious }) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const style = {
    width: "10px",
    height: "10px",
    marginRight: "6px",
  };

  const languageOptions: any = [
    {
      value: "arabic",
      label: (
        <>
          <img src="/imgs/egypt.png" style={style} />
          Arabic
        </>
      ),
    },
    {
      value: "English",
      label: (
        <>
          <img src="/imgs/english.png" style={style} />
          English
        </>
      ),
    },
  ];

  const industryOptions: any = [
    { value: "Fashion", label: "Fashion" },
    { value: "Girls' fashion", label: "Girls' fashion" },
  ];

  return (
    <Form layout="vertical">
      <Form.Item label="Store name">
        <Input placeholder="Type your store name" />
      </Form.Item>

      <Form.Item label="Store URL ">
        <Input placeholder="mystore" suffix=".markatty.com" />
      </Form.Item>

      <Form.Item label="Store language">
        <Select
          defaultValue={languageOptions[0].value}
          style={{ width: "100%" }}
          onChange={handleChange}
          options={languageOptions}
        />
      </Form.Item>

      <Form.Item label="Store Industry">
        <Select
          defaultValue={industryOptions[0]}
          style={{ width: "100%" }}
          onChange={handleChange}
          options={industryOptions}
        />
      </Form.Item>
      <Typography>
        Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)
      </Typography>

      <Button type="primary" htmlType="submit" >
        Save
      </Button>

      <BackButton handlePrevious={handlePrevious} />
    </Form>
  );
};

export default StoreInfo;
