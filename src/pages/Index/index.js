import React from "react";

// 导入组件
import { Carousel } from "antd-mobile";

// 导入axios
import axios from "axios";
export default class Index extends React.Component {
  state = {
    // 轮播图状态数据
    swipers: [],
    imgHeight: 212,
  };

  // 获取轮播图数据的方法
  async getSwipers() {
    const res = await axios.get("http://localhost:8080/home/swiper");
    this.setState({
      swipers: res.data.body,
    });
    console.log(res);
  }
  componentDidMount() {
    this.getSwipers();
  }
  // 渲染轮播图结构
  renderSwipers() {
    return this.state.swipers.map(item => (
      <a
        key={item.id}
        href="https://zh-hans.reactjs.org/"
        style={{
          display: "inline-block",
          width: "100%",
          height: this.state.imgHeight,
        }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
        />
      </a>
    ));
  }
  render() {
    return (
      <div className="index">
        <Carousel autoplay={true} infinite>
          {this.renderSwipers()}
        </Carousel>
      </div>
    );
  }
}
