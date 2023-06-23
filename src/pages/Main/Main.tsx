import { Outlet } from "react-router-dom";

import { Layout } from "../../components/layout/Layout";

export const Main = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
