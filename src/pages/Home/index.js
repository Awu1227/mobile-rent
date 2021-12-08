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
    path: "/home",
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
/*
  问题：点击首页导航菜单，导航到 找房列表页面时， 找房菜单没有高亮

  原因：原来我们实现该功能的时候，只考虑了点击以及第一次加载Home组件的情况，但是我们没有考虑不重新加载Home组件的路由切换

  解决：
  思路：在路由切换时，也执行菜单高亮的逻辑代码
  1. 添加componentDidUpdate钩子函数
  2. 在钩子函数中判断路由地址是否切换（因为路由信息通过props传递给组件的，所以，通过比较更新前后的两个props）
  3. 在路由地址切换时，让菜单高亮
*/
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 默认选中的TabBar菜单
      selectedTab: this.props.location.pathname,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      // 此时，就说明路由发生切换le
      this.setState({
        selectedTab: this.props.location.pathname,
      });
    }
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
    return (
      <div className="home">
        {/*渲染子路由 */}
        <Route path="/home/news" component={News} />
        <Route exact path="/home" component={Index} />
        <Route path="/home/list" component={HouseList} />
        <Route path="/home/profile" component={Profile} />

        <TabBar tintColor="#21b97a" noRenderContent={true} barTintColor="white">
          {this.renderTabBarItem()}
        </TabBar>
      </div>
    );
  }
}
