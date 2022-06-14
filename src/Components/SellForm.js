import React from 'react';
import '../SellForm.css'
import { Divider } from 'antd';
import { Select } from 'antd';
import { Card, Typography } from 'antd';
import { Input, Radio, Space } from 'antd';
import { Button } from 'antd';
import { Steps } from 'antd';
import { useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';



const { Step } = Steps;

const { Title } = Typography;

const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

function SellForm() {
  
  let navigate = useNavigate(); 
  const publish = () =>{ 
    let path = `/publish`; 
    navigate(path);
  }
  const cancel = () =>{ 
    let path = `/website`; 
    navigate(path);
  }
  
  return (
  <div className="site-card-border-less-wrapper">
    
    <Card
    
      title={<Title level={3}>Please fill out the form with correct information</Title>}
      bordered={false}
      style={{
        width: 600,
      }}
    >
    <p>Main information</p>
    <Divider />
    <div className="left">Brand</div>
    <div className="center">Model</div>
    <br></br>
    <Select
      defaultValue=""
      style={{
        width: 250,
        float:'left'
      }}
      onChange={handleChange}
    >
        <option value="Volvo">Volvo</option>
        <option value="Saab">Saab</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Audi">Audi</option>
        <option value="Toyota">Toyota</option>
    </Select>
    <Select
      defaultValue=""
      style={{
        width: 255,
        float:'right'
      }}
      onChange={handleChange}
    >
        <option value="V40">V40</option>
        <option value="9-3">9-3</option>
        <option value="Benz">Benz</option>
        <option value="A4">A4</option>
        <option value="R8">R8</option>
        <option value="Corolla">Corolla</option>
    </Select>
    
    <br />
    <br />
    <br />

    <div className="left2">First Registration</div>

    <br />
    <br />

    <div className="left">Year</div>
    <div className="center">Month</div>
    <br></br>
    <Select
      defaultValue=""
      style={{
        width: 250,
        float:'left'
      }}
      onChange={handleChange}
    >
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
    <Select
      defaultValue=""
      style={{
        width: 255,
        float:'right'
      }}
      onChange={handleChange}
    >
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>

        </Select>

        <br />
        <br />
        <br />

        <div className="left">Fuel</div>
        <div className="center">&nbsp; Mileage</div>
        <br></br>
        <Select
          defaultValue=""
          style={{
            width: 250,
            float:'left'
          }}
          onChange={handleChange}
        >
            <option value="Diesel">Diesel</option>
            <option value="Petrol">Petrol</option>
            <option value="Electric">Electric</option>
        </Select>
        <Input style={{
            width: 255,
            float:'right'
          }} placeholder="km" />

        <br />
        <br />
        <br />

        <Divider />
        <p>Additional information</p>
        <Divider />
        
        <div className="left2">Is the car registered?</div>

        <br />
        <br />
        
        <Radio.Group style={{
              float:'left'
            }} >
          
            <Space direction="vertical">
              <Radio value={1}>Yes</Radio>
              <Radio value={2}>No</Radio>
            </Space>
          </Radio.Group>
        
          <br />
          <br />
          <br />
          <br />

        <div className="left2">Number of seats</div>
        
        <br />
        <br />

        <Input style={{
          width: 255,
          float:'left'
        }} />

      <br />
      <br />
      <br />

      <div className="left2">Location of the Seller</div>

      <br />
      <br />

      <div className="left">Country</div>
      <div className="center">City</div>
      <br></br>
        <Select
          defaultValue=""
          style={{
            width: 250,
            float:'left'
          }}
          onChange={handleChange}
        >
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="AD">Andorra</option>
            <option value="AT">Austria</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BG">Bulgaria</option>
            <option value="HR">Croatia</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="EE">Estonia</option>
            <option value="FO">Faroe Islands</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GG">Guernsey</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IT">Italy</option>
            <option value="JE">Jersey</option>
            <option value="XK">Kosovo</option>
            <option value="LV">Latvia</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
            <option value="MT">Malta</option>
            <option value="MD">Moldova, Republic of</option>
            <option value="MC">Monaco</option>
            <option value="ME">Montenegro</option>
            <option value="NL">Netherlands</option>
            <option value="NO">Norway</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="SM">San Marino</option>
            <option value="RS">Serbia</option>
            <option value="CS">Serbia and Montenegro</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="ES">Spain</option>
            <option value="SJ">Svalbard and Jan Mayen</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
            <option value="UA">Ukraine</option>
            <option value="GB">United Kingdom</option>
        </Select>
        <Select
          defaultValue=""
          style={{
            width: 255,
            float:'right'
          }}
          onChange={handleChange}
        >
            <option value="Água Longa">Água Longa</option>
            <option value="Águas Santas">Águas Santas</option>
            <option value="Aguçadoura">Aguçadoura</option>
            <option value="Alfena">Alfena</option>
            <option value="Alpendurada">Alpendurada</option>
            <option value="Amarante">Amarante</option>
            <option value="Amorim">Amorim</option>
            <option value="Anta">Anta</option>
            <option value="Arcozelo">Arcozelo</option>
            <option value="Argivai">Argivai</option>
            <option value="Árvore">Árvore</option>
            <option value="Aver-o-Mar">Aver-o-Mar</option>
            <option value="Aves">Aves</option>
            <option value="Avintes">Avintes</option>
            <option value="Azenha">Azenha</option>
            <option value="Baguim do Monte">Baguim do Monte</option>
            <option value="Baião">Baião</option>
            <option value="Balazar">Balazar</option>
            <option value="Baltar">Baltar</option>
            <option value="Barrosas">Barrosas</option>
            <option value="Beiriz de Baixo">Beiriz de Baixo</option>
            <option value="Bougado">Bougado</option>
            <option value="Campo">Campo</option>
            <option value="Canelas">Canelas</option>
            <option value="Canidelo">Canidelo</option>
            <option value="Carvalhosa">Carvalhosa</option>
            <option value="Castelões de Cepeda">Castelões de Cepeda</option>
            <option value="Ermesinde">Ermesinde</option>
            <option value="Estela">Estela</option>
            <option value="Fânzeres">Fânzeres</option>
            <option value="Felgueiras">Felgueiras</option>
            <option value="Ferreira">Ferreira</option>
            <option value="Figueiró">Figueiró</option>
            <option value="Foz do Douro">Foz do Douro</option>
            <option value="Foz do Sousa">Foz do Sousa</option>
            <option value="Frazão">Frazão</option>
            <option value="Freamunde">Freamunde</option>
            <option value="Gandra">Gandra</option>
            <option value="Gemunde">Gemunde</option>
            <option value="Gondomar">Gondomar</option>
            <option value="Grijó">Grijó</option>
            <option value="Guifões">Guifões</option>
            <option value="Gulpilhares">Gulpilhares</option>
            <option value="Jovim">Jovim</option>
            <option value="Lavra">Lavra</option>
            <option value="Leça da Palmeira">Leça da Palmeira</option>
            <option value="Leça do Bailio">Leça do Bailio</option>
            <option value="Lordelo">Lordelo</option>
            <option value="Lousada">Lousada</option>
            <option value="Lustosa">Lustosa</option>
            <option value="Madalena">Madalena</option>
            <option value="Maia">Maia</option>
            <option value="Marco de Canaveses">Marco de Canaveses</option>
            <option value="Marco de Canavezes">Marco de Canavezes</option>
            <option value="Margaride">Margaride</option>
            <option value="Matosinhos">Matosinhos</option>
            <option value="Meinedo">Meinedo</option>
            <option value="Melres">Melres</option>
            <option value="Milheirós">Milheirós</option>
            <option value="Mindelo">Mindelo</option>
            <option value="Moreira">Moreira</option>
            <option value="Negrelos">Negrelos</option>
            <option value="Nogueira">Nogueira</option>
            <option value="Olival">Olival</option>
            <option value="Oliveira do Douro">Oliveira do Douro</option>
            <option value="Paços de Ferreira">Paços de Ferreira</option>
            <option value="Paredes">Paredes</option>
            <option value="Pedroso">Pedroso</option>
            <option value="Pedrouços">Pedrouços</option>
            <option value="Penafiel">Penafiel</option>
            <option value="Perafita">Perafita</option>
            <option value="Perozinho">Perozinho</option>
            <option value="Porto">Porto</option>
            <option value="Póvoa de Varzim">Póvoa de Varzim</option>
            <option value="Rebordões">Rebordões</option>
            <option value="Rebordosa">Rebordosa</option>
            <option value="Recarei">Recarei</option>
            <option value="Rio Mau">Rio Mau</option>
            <option value="Rio Tinto">Rio Tinto</option>
            <option value="Sandim">Sandim</option>
            <option value="Santa Cruz do Bispo">Santa Cruz do Bispo</option>
            <option value="Santo Izidoro">Santo Izidoro</option>
            <option value="Santo Tirso">Santo Tirso</option>
            <option value="São Félix da Marinha">São Félix da Marinha</option>
            <option value="São Mamede de Infesta">São Mamede de Infesta</option>
            <option value="São Miguel do Couto">São Miguel do Couto</option>
            <option value="São Pedro da Cova">São Pedro da Cova</option>
            <option value="São Romão do Coronado">São Romão do Coronado</option>
            <option value="Senhora da Hora">Senhora da Hora</option>
            <option value="Sermonde">Sermonde</option>
            <option value="Seroa">Seroa</option>
            <option value="Serzedo">Serzedo</option>
            <option value="Sobrado">Sobrado</option>
            <option value="Telões">Telões</option>
            <option value="Trofa">Trofa</option>
            <option value="Vairão">Vairão</option>
            <option value="Valadares">Valadares</option>
            <option value="Valbom">Valbom</option>
            <option value="Valongo">Valongo</option>
            <option value="Vila do Conde">Vila do Conde</option>
            <option value="Vila Meã">Vila Meã</option>
            <option value="Vila Nova da Telha">Vila Nova da Telha</option>
            <option value="Vila Nova de Gaia">Vila Nova de Gaia</option>
            <option value="Vilar de Andorinho">Vilar de Andorinho</option>
            <option value="Vilar do Paraíso">Vilar do Paraíso</option>
            <option value="Vilarinho">Vilarinho</option>
            <option value="Vizela">Vizela</option>
        </Select>

        <br />
        <br />
        <br />

        <Button onClick={cancel} style={{
            float:'left'
          }} danger>Cancel</Button>
        <Button onClick={publish} style={{
            float:'right'
          }} type="primary">Next Step</Button>

    </Card>

  </div>
)};

export default SellForm;
