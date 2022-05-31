import '../Home.css';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { Space } from 'antd';
import Icon, { SearchOutlined } from '@ant-design/icons';

const Home = () => {
  
  return (
    <div className="Home">
    <Link to='/shop'>
      <Button style={{background: "gold", borderColor: "white" , width: "400px"}} shape="round" size='large' type="text" icon={<SearchOutlined />} >
        Browse Cars
      </Button>
    </Link>
    </div>

  )
}

export default Home