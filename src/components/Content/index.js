import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import SearchPage from "../SearchPage";
import CreatePage from "../CreatePage";
import UpdatePage from "../UpdatePage";
import DeletePage from "../DeletePage";
import HistoryPage from "../HistoryPage";

const Content = (props) => {
  const { Header } = Layout;
  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route path="/update">
          <UpdatePage />
        </Route>
        <Route path="/delete">
          <DeletePage />
        </Route>
        <Route path="/history">
          <HistoryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
