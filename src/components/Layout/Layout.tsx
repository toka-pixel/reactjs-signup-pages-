import { Col, Row } from "antd";
import { ReactNode } from "react";

type LayoutProps={
    Children:ReactNode
}

const Layout:React.FC<LayoutProps> = ({Children}) => {
  return (
    <Row>
      <Col xs={24} sm={12}>{Children}</Col>
      <Col xs={0} sm={12}></Col>
    </Row>
  );
};

export default Layout;
