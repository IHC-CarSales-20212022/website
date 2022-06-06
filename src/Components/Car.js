import '../Car.css';
import { Typography } from 'antd';
import { Card } from 'antd';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Image } from 'antd';
import { Statistic,Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { PhoneOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const Car = ({ car , moreDetails}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
  <>
    {car.visible == 7 ? <div className="car" onClick={showDrawer}>
                          <Card
                          hoverable
                          style={{ width: 350 }}
                          cover={<img alt="imagem" src={car.photo} style={{height:270}} />}
                        >
                          <Meta/>
                          <div className="info">
                            <Title level={3}>{car.brand} {car.model}</Title> 
                              <h3>{car.price} €</h3>
                          </div>
                          <div className="info-2">
                            <h4>{car.mileage} km | {car.year} | {car.fuel} | {car.district}</h4>
                          </div>
                        </Card>
                             
                </div> : ''}
  
                <>  
      <Drawer  size="large" title="Details" placement="left" onClose={onClose} visible={visible} style={{}}>
      <div className="details">
        <div>
          <Image width={200} src={car.photo}/>
          <h1>{car.brand}    {car.model}</h1>
          <h1>{car.price} €</h1>
          <h6>&nbsp;</h6>
          <h2> Other Info </h2>
          <h3>{car.year}</h3>
          <h3>{car.mileage} km</h3>
          <h3>{car.fuel}</h3>
          <h3>{car.district}</h3>
        </div>
        
      <div className="stats">
        <div className="site-statistic-demo-card">
          <Row gutter={35}>
            <Col span={25}>
              <Card>
                <Statistic
                  title="Under Average Market Price"
                  value={9.31}
                  style={{ width: 330 }}
                  precision={2}
                  valueStyle={{ color: 'green' }}
                  prefix={<ArrowDownOutlined />}
                  suffix="%"/>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="site-statistic-demo-card">
          <Row gutter={35}>
            <Col span={25}>
              <Card>
                <Statistic
                  style={{ width: 330 }}
                  title="Above Our Average Website Price"
                  value={0.31}
                  precision={2}
                  valueStyle={{ color: 'red' }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"/>
                </Card>
              </Col>
            </Row>
          </div>
          
          <div className="description">
            <h2>Description:</h2>
            <p align="justify">Car works like new, with no damage to the interior or exterior, except for a few scratches. Car inspection and oil change was made two months ago.
              It might need a tire change soon.</p>
            <h2>Contact Information: <PhoneOutlined /> 965242111</h2>

          </div>
       </div>
      </div> 
    </Drawer>
    </>
  </>  
 
  )
}

export default Car