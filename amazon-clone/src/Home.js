import React from 'react';
import './Home.css';
import amazonHome from './amazonHome.jpg';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className="bg-image" src={amazonHome} alt="amazon homepage"/>
        <div className='home-row'>
          {/* 2 products*/}
          <Product title='OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking, 5ATM+Water & Dust Resistant( Android & iOS Compatible)' 
          price={1699} 
          image="https://m.media-amazon.com/images/I/61XPTRJZcCL._AC_UL480_QL65_.jpg" 
          rating={5}/>
          <Product title='Vaseline Healthy Bright Sun Protection Body Lotion SPF 30 400 ml, Daily Moisturizer for Dry Skin, Gives Non-Greasy Glowing Skin - For Men & Women'
          price={298}
          image='https://m.media-amazon.com/images/I/31tQ2BoB1vL.jpg'
          rating={3}/>
        </div>
        <div className='home-row'>
          {/* 3 products*/}
          <Product title='boAt Rockerz 255 Pro in-Ear Earphones with 10 Hours Battery, ASAP Charge, IPX5, Bluetooth V5.0 and Voice Assistant(Raging Red)'
          price={1077}
          image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
          rating={4}/>
          <Product title="HP Pavilion Gaming 10th Gen Intel Core i5 15.6-inch (39.6 cms) FHD Gaming Laptop (8GB/256GB SSD + 1TB HDD/144Hz/GTX 1650Ti 4GB Graphics/Windows 10/MS Office/2.28 kg), 15-dk1514TX, Black"
          price={64990}
          image="https://images-eu.ssl-images-amazon.com/images/I/41OdlwlaEeS._AC_SX184_.jpg"
          rating={4}/>
          <Product title='Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor (Dark Blue Gray) 75 Hz'
          price={13999}
          image='https://images-eu.ssl-images-amazon.com/images/I/41ui6ON5ULL._AC_SX184_.jpg'
          rating={5}/>
          

        </div>
        <div className='home-row'>
          {/* 4 product*/}
          <Product title='OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)'
          price={24999}
          image='https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UL480_QL65_.jpg'
          rating={4}/>
          <Product title='Samsung Galaxy M32 5G (Sky Blue, 6GB RAM, 128GB Storage)'
          price={20,999}
          image='https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UL480_QL65_.jpg'
          rating={5}/>
          <Product title='Redmi 9A Sport (Metallic Blue, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery'
          price={7499}
          image='https://m.media-amazon.com/images/I/81p+EkIvUUL._AC_UL480_QL65_.jpg'
          rating={4}/>
          <Product title='Apple iPhone XR (64GB) - White'
          price={34999}
          image='https://m.media-amazon.com/images/I/51PuFBgBK4L._AC_UY327_FMwebp_QL65_.jpg'
          rating={5}/>
        </div>
      </div>
    </div>

  )
}

export default Home