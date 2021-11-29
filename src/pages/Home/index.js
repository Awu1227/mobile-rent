import React from "react";

// 导入TabBar
import { TabBar } from "antd-mobile";

import "./index.css";
import { Route } from "react-router-dom";
import News from "../News";
import Index from "../Index";
import HouseList from "../HouseList";
import Profile from "../Profile";

// TabBar数据
const tabItems = [
  {
    title: "首页",
    icon: "icon-ind",
    path: "/home/index",
  },
  {
    title: "找房",
    icon: "icon-findHouse",
    path: "/home/list",
  },
  {
    title: "资讯",
    icon: "icon-infom",
    path: "/home/news",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "/home/profile",
  },
];
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的TabBar菜单
      selectedTab: this.props.location.pathname,
    };
  }
  // 渲染TabBar.Item
  renderTabBarItem() {
    return tabItems.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`}></i>}
        selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path,
          });
          // 路由切换
          this.props.history.push(item.path);
        }}
      ></TabBar.Item>
    ));
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
          {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}
