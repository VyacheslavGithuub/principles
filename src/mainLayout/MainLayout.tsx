import { Button } from "antd";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";

const MainLayout = () => {
  return (
    <Layout>
      <Header>header</Header>

      <Content>
        <Button onClick={() => console.log("TestAnt-Disign")}>
          TestAnt-Disign
        </Button>
      </Content>

      <Footer>footer</Footer>
    </Layout>
  );
};

export default MainLayout;
