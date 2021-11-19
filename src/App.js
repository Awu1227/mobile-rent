// 导入路由
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
import CityList from './pages/ListCity'

// 导入要使用的组件
import { Button } from 'antd-mobile';

function App() {
  return (
    <Router>
      <div className="App">
        项目的根组件<Button>start</Button>

        {/* 配置导航菜单 */}

        <Link to="/home">首页</Link>
        <Link to="/citylist">城市选择页</Link>
        {/*配置路由*/}
        <Route path="/home" component={Home}></Route>
        <Route path="/citylist" component={CityList}></Route>
      </div>
    </Router>
  );
}

export default App;
