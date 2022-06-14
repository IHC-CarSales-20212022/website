import React from 'react';
import '../Stats.css';  
import { Tabs } from 'antd';
import { Card } from 'antd';
import { Select } from 'antd';
import { Badge, Descriptions } from 'antd';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const Stats = () => {

const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (

<>
   
    <div class="cards">
        <Tabs defaultActiveKey="1" onChange={onChange} style={{ color: "#FFFFFF", marginLeft: "15px", fontWeight: "bold"}}>
            <TabPane tab="General Market Statistics" key="1">
                <Card style={{ width: 1200}}>
                <Descriptions title="General Market Statistics" bordered>
                    <Descriptions.Item label="Total Number of Cars Sold">8192</Descriptions.Item>
                    <Descriptions.Item label="Average Price Paid">3420 €</Descriptions.Item>
                    <Descriptions.Item label="Average Car Mileage">211980 km</Descriptions.Item>
                    <Descriptions.Item label="Most Sold Year of Production">2004</Descriptions.Item>
                    <Descriptions.Item label="Most Sold Number of Seats">5</Descriptions.Item>
                    <Descriptions.Item label="Most Sold Brand">Toyota</Descriptions.Item>
                    <Descriptions.Item label="Most Sold Model">Civic (Honda)</Descriptions.Item>
                    <Descriptions.Item label="Most Sold Type of Fuel">Petrol</Descriptions.Item>
                    <Descriptions.Item label="Most Usual Seller Area">Porto (Portugal)</Descriptions.Item>
                </Descriptions>
                </Card>
            </TabPane>
            <TabPane tab="Advanced Statistics" key="2">
                <Card style={{ width: 1200 }}>
                <div className="flexbox-container">
                    <div className="left">
                        <label for="cars"> <span>Brand </span>:</label>
                        <Select className='brand-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="Volvo">Volvo</option>
                            <option value="Saab">Saab</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Audi">Audi</option>
                            <option value="Toyota">Toyota</option>
                        </Select>
                        <label for="cars"> <span>Model </span>: </label>
                        <Select className='model-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="V40">V40</option>
                            <option value="9-3">9-3</option>
                            <option value="Benz">Benz</option>
                            <option value="A4">A4</option>
                            <option value="R8">R8</option>
                            <option value="Corolla">Corolla</option>
                        </Select>
                    </div>
                    <div className='second'>
                        <label for="cars"><span>Fuel </span>:</label>
                        <Select className='fuel-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="Diesel">Diesel</option>
                            <option value="Petrol">Petrol</option>
                            <option value="Electric">Electric</option>
                        </Select>
                        <label for="cars"><span>Region </span>:</label> 
                        <Select className='local-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="Aveiro">Aveiro</option>
                            <option value="Beja">Beja</option>
                            <option value="Braga">Braga</option>
                            <option value="Bragança">Bragança</option>
                            <option value="Castelo Branco">Castelo</option>
                            <option value="Coimbra">Coimbra</option>
                            <option value="Guarda">Guarda</option>
                            <option value="Leiria">Leiria</option>
                            <option value="Lisboa">Lisboa</option>
                            <option value="Portalegre">Portalegre</option>
                            <option value="Porto">Porto</option>
                            <option value="Santarém">Santarém</option>
                            <option value="Setúbal">Setúbal</option>
                            <option value="Viana do Castelo">Viana do Castelo</option>
                            <option value="Vila Real">Vila Real</option>
                            <option value="Viseu">Viseu</option>
                            <option value="Açores">Açores</option>
                            <option value="Madeira">Madeira</option>
                        </Select>
                    </div>
                    <div className='third'>
                    <label for="cars"><span>Price from </span>:</label> 
                        <Select className='min-price-drop' name="cars" id="cars" allowClear="true">
                            <option value="0">0</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                            <option value="1500">1500</option>
                            <option value="2500">2500</option>
                            <option value="3000">3000</option>
                            <option value="3500">3500</option>
                            <option value="4000">4000</option>
                            <option value="4500">4500</option>
                            <option value="5000">5000</option>
                            <option value="7500">7500</option>
                            <option value="10000">10000</option>
                            <option value="12500">12500</option>
                            <option value="15000">15000</option>
                            <option value="20000">20000</option>
                            <option value="25000">25000</option>
                            <option value="30000">30000</option>
                            <option value="35000">35000</option>
                            <option value="40000">40000</option>
                            <option value="45000">45000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="100000">100000+</option>
                        </Select>
                        <label for="cars"><span>Price to </span>:</label> 
                        <Select className='max-price-drop' name="cars" id="cars" allowClear="true">
                        <option value="0">0</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                            <option value="1500">1500</option>
                            <option value="2500">2500</option>
                            <option value="3000">3000</option>
                            <option value="3500">3500</option>
                            <option value="4000">4000</option>
                            <option value="4500">4500</option>
                            <option value="5000">5000</option>
                            <option value="7500">7500</option>
                            <option value="10000">10000</option>
                            <option value="12500">12500</option>
                            <option value="15000">15000</option>
                            <option value="20000">20000</option>
                            <option value="25000">25000</option>
                            <option value="30000">30000</option>
                            <option value="35000">35000</option>
                            <option value="40000">40000</option>
                            <option value="45000">45000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="100000">100000+</option>
                                
                        </Select>
                    </div>
                    <div className='fourth'>
                    <label for="cars"><span>Mileage from </span>: </label> 
                        <Select className='min-mileage-drop' name="cars" id="cars" allowClear="true">
                        <option value="0">0</option>
                            <option value="2500">2500</option>
                            <option value="5000">5000</option>
                            <option value="10000">10000</option>
                            <option value="25000">25000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="125000">125000</option>
                            <option value="150000">150000</option>
                            <option value="175000">175000</option>
                            <option value="200000">200000</option>
                            <option value="2500000">250000</option>
                            <option value="300000">300000</option>
                            <option value="350000">350000</option>
                        </Select>
                        <label for="cars"><span>Mileage to </span>:</label> 
                        <Select className='max-mileage-drop' name="cars" id="cars" allowClear="true">
                            <option value="0">0</option>
                            <option value="2500">2500</option>
                            <option value="5000">5000</option>
                            <option value="10000">10000</option>
                            <option value="25000">25000</option>
                            <option value="50000">50000</option>
                            <option value="75000">75000</option>
                            <option value="125000">125000</option>
                            <option value="150000">150000</option>
                            <option value="175000">175000</option>
                            <option value="200000">200000</option>
                            <option value="250000">250000</option>
                            <option value="300000">300000</option>
                            <option value="350000">350000</option>
                        </Select>
                    </div>
                    <div className='fifth'>
                    <label for="cars"><span>Year from </span>:</label> 
                        <Select className='min-year-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                        </Select>
                        <label for="cars"><span>Year to </span>:</label> 
                        <Select className='max-year-drop' name="cars" id="cars" allowClear="true">
                            
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                            <option value="1989">1989</option>
                            <option value="1988">1988</option>
                            <option value="1987">1987</option>
                            <option value="1986">1986</option>
                            <option value="1985">1985</option>
                            <option value="1984">1984</option>
                            <option value="1983">1983</option>
                            <option value="1982">1982</option>
                            <option value="1981">1981</option>
                            <option value="1980">1980</option>
                            <option value="1979">1979</option>
                            <option value="1978">1978</option>
                            <option value="1977">1977</option>
                            <option value="1976">1976</option>
                            <option value="1975">1975</option>
                            <option value="1974">1974</option>
                            <option value="1973">1973</option>
                            <option value="1972">1972</option>
                            <option value="1971">1971</option>
                            <option value="1970">1970</option>
                            <option value="1969">1969</option>
                            <option value="1968">1968</option>
                            <option value="1967">1967</option>
                            <option value="1966">1966</option>
                            <option value="1965">1965</option>
                            <option value="1964">1964</option>
                            <option value="1963">1963</option>
                            <option value="1962">1962</option>
                            <option value="1961">1961</option>
                            <option value="1960">1960</option>
                            <option value="1959">1959</option>
                            <option value="1958">1958</option>
                            <option value="1957">1957</option>
                            <option value="1956">1956</option>
                            <option value="1955">1955</option>
                            <option value="1954">1954</option>
                            <option value="1953">1953</option>
                            <option value="1952">1952</option>
                            <option value="1951">1951</option>
                            <option value="1950">1950</option>
                            <option value="1949">1949</option>
                            <option value="1948">1948</option>
                            <option value="1947">1947</option>
                            <option value="1946">1946</option>
                            <option value="1945">1945</option>
                            <option value="1944">1944</option>
                            <option value="1943">1943</option>
                            <option value="1942">1942</option>
                            <option value="1941">1941</option>
                            <option value="1940">1940</option>
                        </Select>
                    </div>
                    <div className='right'> 
                        <button className='button' onClick={onClick} ><span>Get Statistics!</span></button> 
                    </div>
                </div>
                <div> 
                { showResults ? <Results /> : null }
                </div>
                </Card>
                
            </TabPane>
        </Tabs>
    </div>
    
    <div class="flexbox-container">
        
    </div>
    
</>
    
  )
}

const Results = () => (
  <div id="results" className="search-results">
    <Descriptions title="Advanced Statistics" bordered>
        <Descriptions.Item label="Total Number of Cars Sold">256</Descriptions.Item>
        <Descriptions.Item label="Average Price Paid">5500 €</Descriptions.Item>
        <Descriptions.Item label="Average Car Mileage">178940 km</Descriptions.Item>
        <Descriptions.Item label="Most Sold Year of Production">2001</Descriptions.Item>
        <Descriptions.Item label="Most Sold Brand">Audi</Descriptions.Item>
        <Descriptions.Item label="Most Sold Model">A4 (Audi)</Descriptions.Item>
        <Descriptions.Item label="Most Sold Number of Seats">5</Descriptions.Item>
        <Descriptions.Item label="Most Sold Type of Fuel">Petrol</Descriptions.Item>
        <Descriptions.Item label="Most Usual Seller Area">Berlin (Germany)</Descriptions.Item>
    </Descriptions>
  </div>
)

export default Stats




