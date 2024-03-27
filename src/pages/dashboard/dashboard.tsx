import React from "react";

import Heading from "components/heading/heading";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const Dashboard: React.FC = () => (
  <DefaultLayout>
    <Heading size="s">Pull Requests</Heading>
  </DefaultLayout>
);

export default Dashboard;
