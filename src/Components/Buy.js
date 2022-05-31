import { Layout } from 'antd';

import React, { useState } from 'react';
import { Drawer, Button } from 'antd';

const Buy = () => {
const [visible, setVisible] = useState(false);

const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
return (
    <div >
       
    </div>
  )
}

export default Buy