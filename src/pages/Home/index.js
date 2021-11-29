import React from "react";

// 导入TabBar
import { TabBar } from "antd-mobile";

import "./index.css";
import { Route } from "react-router-dom";
import News from "../News";
import Index from "../Index";
import HouseList from "../HouseList";
import Profile from "../Profile";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的TabBar菜单
      selectedTab: this.props.location.pathname,
    };
  }

  render() {
    console.log(this.props.location.pathname);
    return (
      <div className="home">
        {/*渲染子路由 */}
        <Route path="/home/news" component={News} />
        <Route path="/home/index" component={Index} />
        <Route path="/home/list" component={HouseList} />
        <Route path="/home/profile" component={Profile} />

        <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white">
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.state.selectedTab === "/home/index"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/index",
              });
              // 路由切换
              this.props.history.push("/home/index");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="Koubei"
            selected={this.state.selectedTab === "/home/list"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/list",
              });
              // 路由切换
              this.props.history.push("/home/list");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="Friend"
            selected={this.state.selectedTab === "/home/news"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/news",
              });
              // 路由切换
              this.props.history.push("/home/news");
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "/home/profile"}
            onPress={() => {
              this.setState({
                selectedTab: "/home/profile",
              });
              // 路由切换
              this.props.history.push("/home/profile");
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
