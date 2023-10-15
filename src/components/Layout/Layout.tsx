import { Col, Row } from "antd";
import FormSteps from "../Shared/Steps/Steps";
import { useState } from "react";
import "./Layout.scss";

const Layout = () => {
  type rightSideData = {
    right_title: string;
    right_logo: string;
  };

  const [rightSide, setRightSide] = useState<rightSideData>({
    right_title: "",
    right_logo: "",
  });

  const rightSideData = (data: rightSideData) => {
    setRightSide(data);
  };

  return (
    <Row className="layout">
      <Col xs={24} lg={12} className="leftSide">
        <img className="logo" src="/imgs/logo.png" />
        <FormSteps rightSideData={rightSideData} />
        <footer>
          <p>© Markatty 2022</p>
          <p>support@markatty.com</p>
        </footer>
      </Col>
      <Col xs={0} lg={12} className="rightSide">
        <div>
          <img src={`/imgs/${rightSide.right_logo}`} alt='logo' />
          <p className="title">{rightSide.right_title}</p>
          <p className="description">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>
        
        </div>
        <img src="/imgs/hand-drawn-arrow.png" alt="hand-drawn-arrow" className="handDrawn" />
      </Col>
    </Row>
  );
};

export default Layout;
