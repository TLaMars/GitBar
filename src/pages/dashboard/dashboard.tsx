import React from "react";
import { FlatList, View } from "react-native";

import Heading from "components/heading/heading";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import usePullRequests from "hooks/use-pull-requests";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "src/layouts/default-layout/default-layout";

import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const { pullRequests } = usePullRequests();

  return (
    <DefaultLayout>
      <View style={$.container}>
        <Heading size="s">Pull Requests</Heading>
        <FlatList
          contentContainerStyle={$.list}
          data={pullRequests}
          renderItem={({ item }) => (
            <PullRequestCard
              title={item.title}
              author={item.author}
              repoName={item.repoName}
              reviewers={item.reviewers}
              createdAt={item.createdAt}
              url={item.url}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
