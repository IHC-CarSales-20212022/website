import React from 'react';
import '../Shop.css';
import { useState } from 'react';
import Cars from './Cars';
import { Select } from 'antd';

const Shop = () => {

    const carlist = [{
        id: '1',
        brand: 'Saab',
        model: '9-3',
        price: 3500,
        fuel: 'Diesel',
        district:'Aveiro',
        mileage: 124000,
        year: 2001,
        visible: 7,
        photo:"https://www.carsinvasion.com/gallery/2006-saab-93-sportcombi/2006-saab-93-sportcombi-05.jpg",
    },
    {
        id: '2',
        brand: 'Mercedes',
        model: 'Benz',
        price: 15000,
        fuel: 'Diesel',
        district:'Viseu',
        mileage: 121211,
        year: 2007,
        visible: 7,
        photo:"https://www.carsinvasion.com/gallery/2007-mercedes-benz-s-63-amg/2007-mercedes-benz-s-63-amg-04.jpg",
    },
    {
        id: '3',
        brand: 'Audi',
        model: 'R8',
        price: 75000,
        fuel: 'Petrol',
        district:'Porto',
        mileage: 101293,
        year: 2011,
        visible: 7,
        photo:"https://www.hdcarwallpapers.com/walls/2010_audi_r8_5_2_fsi_quattro_3-wide.jpg",
    },
    {
       id: '4',
       brand: 'Audi',
       model: 'A4',
       price: 17500,
       fuel: 'Petrol',
       district:'Aveiro',
       mileage: 56523,
       year: 2017,
       visible: 7,
       photo:"https://wallpapersdsc.net/wp-content/uploads/2016/10/Audi-A4-2017-Images.jpg",
    },
    {
        id: '5',
        brand: 'Toyota',
        model: 'Corolla',
        price: 14000,
        fuel: 'Diesel',
        district:'Braga',
        mileage: 50000,
        year: 2018,
        visible: 7,
        photo:"https://bordalo.observador.pt/v2/q:85/rs:fill:1920:1080/c:1920:1080:nowe:0:0/plain/https://s3.observador.pt/wp-content/uploads/sites/6/2020/02/08084606/toyota-corolla-hatchback-review.jpg",
    },
    {
        id: '6',
        brand: 'Saab',
        model: '9-3',
        price: 3500,
        fuel: 'Diesel',
        district:'Aveiro',
        mileage: 124000,
        year: 2001,
        visible: 7,
        photo:"https://www.razaoautomovel.com/wp-content/uploads/2021/08/saab_9-3_coupe-1.jpeg",
    },
    {
        id: '7',
        brand: 'Mercedes',
        model: 'Benz',
        price: 15000,
        fuel: 'Diesel',
        district:'Viseu',
        mileage: 121211,
        year: 2007,
        visible: 7,
        photo:"https://www.razaoautomovel.com/wp-content/uploads/2018/02/2018_Mercedes-Benz-Classe-A_10-1400x788.jpg",
    },
    {
        id: '8',
        brand: 'Audi',
        model: 'R8',
        price: 75000,
        fuel: 'Petrol',
        district:'Lisboa',
        mileage: 101293,
        year: 2011,
        visible: 7,
        photo:"https://cdn.motor1.com/images/mgl/NR1vY/s1/2020-audi-r8-coupe.jpg",
    },
    {
        id: '9',
        brand: 'Audi',
        model: 'A4',
        price: 2500,
        fuel: 'Diesel',
        district:'Porto',
        mileage: 152132,
        year: 2001,
        visible: 7,
        photo:"https://www.razaoautomovel.com/wp-content/uploads/2019/05/Audi-A4-B5-1440x960.jpg",
    },
    {
        id: '10',
        brand: 'Toyota',
        model: 'Corolla',
        price: 7300,
        fuel: 'Diesel',
        district:'Braga',
        mileage: 221971,
        year: 2009,
        visible: 7,
        photo:"https://pictures.topspeed.com/IMG/jpg/200710/2009-toyota-corolla-10.jpg",
    }];
    
    const [cars, setCars] = useState(carlist)

    const getBrandStatus = () => {
        var Elem = document.getElementsByClassName("brand-drop")[0]
        var value = Elem.value
        return value;
    }
    
    const updateSearchBrand = () => {
        var Elem = document.getElementsByClassName("brand-drop")[0]
        var value = Elem.value
        if (value !== "Any") {
            setCars(cars.map((car) => ((car.brand !== value)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
    }
    
    const updateSearchModel = () => {
        var Elem = document.getElementsByClassName("model-drop")[0]
        var value = Elem.value
        if (value !== "Any") {
            setCars(cars.map((car) => ((car.model !== value)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
    }

    const updateFuel = () => {
        var Elem = document.getElementsByClassName("fuel-drop")[0]
        var value = Elem.value
        if (value !== "Any") {
            setCars(cars.map((car) => ((car.fuel !== value)) ? { ...car, visible: (car.visible - 1)} : car))  
        }
    }

    const updateRegion = () => {
        var Elem = document.getElementsByClassName("local-drop")[0]
        var value = Elem.value
        if (value !== "Any") {
            setCars(cars.map((car) => ((car.district !== value)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
    }

    const updateValue = () => {
        var ElemMin = document.getElementsByClassName("min-price-drop")[0]
        var ElemMax = document.getElementsByClassName("max-price-drop")[0]
        var minvalue = ElemMin.value
        var maxvalue = ElemMax.value
        if(minvalue !== "0" && maxvalue !== "0"){
            setCars(cars.map((car) => (!(car.price >= minvalue && car.price <= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))
        }
        else if (minvalue !== "0") {
            setCars(cars.map((car) => ((car.price <= minvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
        else if (maxvalue !== "0") {
            setCars(cars.map((car) => ((car.price >= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
    }

    const updateMileage = () => {
        var ElemMin = document.getElementsByClassName("min-mileage-drop")[0]
        var ElemMax = document.getElementsByClassName("max-mileage-drop")[0]
        var minvalue = ElemMin.value
        var maxvalue = ElemMax.value
        if(minvalue !== "0" && maxvalue !== "0"){
            setCars(cars.map((car) => (!(car.mileage >= minvalue && car.mileage <= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))
        }
        else if (minvalue !== "0") {
            setCars(cars.map((car) => ((car.mileage <= minvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
        else if (maxvalue !== "0") {
            setCars(cars.map((car) => ((car.mileage >= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
        
    }

    const updateYear = () => {
        var ElemMin = document.getElementsByClassName("min-year-drop")[0]
        var ElemMax = document.getElementsByClassName("max-year-drop")[0]
        var minvalue = ElemMin.value
        var maxvalue = ElemMax.value
        if(minvalue !== "Any" && maxvalue !== "Any"){
            setCars(cars.map((car) => (!(car.year >= minvalue && car.year <= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))
        }
        else if (minvalue !== "Any") {
            setCars(cars.map((car) => ((car.year <= minvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }
        else if (maxvalue !== "Any") {
            setCars(cars.map((car) => ((car.year >= maxvalue)) ? { ...car, visible: (car.visible - 1)} : car))   
        }

    }

    const updateSearch = async () => {
        setCars(cars.map((car) => car.visible = 7)) 
        setCars(carlist)
        updateSearchBrand(); updateSearchModel(); updateFuel(); 
                updateRegion(); updateValue(); updateMileage(); updateYear();

    }
     
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
       
  
  return (

<>
    <div className="flexbox-container">
         <div className="left">
            <label for="cars">Brand </label>
            <select className='brand-drop' name="cars" id="cars">
                <option value="Any">Any</option>
                <option value="Volvo">Volvo</option>
                <option value="Saab">Saab</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Audi">Audi</option>
                <option value="Toyota">Toyota</option>
            </select>
            <label for="cars">Model </label>
            <select className='model-drop' name="cars" id="cars">
                <option value="Any">Any</option>
                <option value="V40">V40</option>
                <option value="9-3">9-3</option>
                <option value="Benz">Benz</option>
                <option value="A4">A4</option>
                <option value="R8">R8</option>
                <option value="Corolla">Corolla</option>
            </select>
        </div>
        <div className='second'>
            <label for="cars">Fuel</label>
            <select className='fuel-drop' name="cars" id="cars">
                <option value="Any">Any</option>
                <option value="Diesel">Diesel</option>
                <option value="Petrol">Petrol</option>
                <option value="Electric">Electric</option>
            </select>
            <label for="cars">Region</label> 
            <select className='local-drop' name="cars" id="cars">
                <option value="Any">Any</option>
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
            </select>
        </div>
        <div className='third'>
        <label for="cars">Price from</label> 
            <select className='min-price-drop' name="cars" id="cars">
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
            </select>
            <label for="cars">Price to</label> 
            <select className='max-price-drop' name="cars" id="cars">
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
                    
            </select>
        </div>
        <div className='fourth'>
        <label for="cars">Mileage from </label> 
            <select className='min-mileage-drop' name="cars" id="cars">
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
            </select>
            <label for="cars">Mileage to</label> 
            <select className='max-mileage-drop' name="cars" id="cars">
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
            </select>
        </div>
        <div className='fifth'>
        <label for="cars">Year from </label> 
            <select className='min-year-drop' name="cars" id="cars">
                <option value="Any">Any</option>
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
            </select>
            <label for="cars">Year to</label> 
            <select className='max-year-drop' name="cars" id="cars">
                <option value="Any">Any</option>
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
            </select>
        </div>
        <div className='right'> 
            <button className='button' onClick={() => { updateSearch();}} ><span>Search!</span></button>
        </div>
    </div>
    <div class="label2">
       Most Recent
    </div>
    <div class="grid" style = {{height:"100%", width:"100%"}}>
        <Cars cars = {cars}></Cars>
    </div>
    <div class="flexbox-container">
        
    </div>
    
</>
    
  )
}

export default Shop




