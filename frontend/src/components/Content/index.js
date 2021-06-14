import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";

import AppointmentPage from "../AppointmentPage";
import CreatePage from "../CreatePage";
import DeletePage from "../DeletePage";
import LoginPage from "../LoginPage";
import HistoryPage from "../HistoryPage";
import HealthPlansPage from "../HealthPlansPage";
import SearchPage from "../SearchPage";
import UpdatePage from "../UpdatePage";
import PaymentPage from "../PaymentPage";

const Content = () => {
  const { Header } = Layout;
  return (
    <div>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
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
        <Route path="/health-plans">
          <HealthPlansPage />
        </Route>
        <Route path="/payment">
          <PaymentPage />
        </Route>
        <Route path="/appointment">
          <AppointmentPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
