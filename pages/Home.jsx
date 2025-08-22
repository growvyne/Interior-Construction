import React from 'react'
import Slider from '../src/components/slider'
import Services from '../src/components/Service'
import Welcome from '../src/components/Welcome'
import Ourinfo from '../src/components/Ourinfo'
import ServiceCard from '../src/components/ServiceCard'
import CounterSection from '../src/components/counter'
import Clients from '../src/components/clients'
import OurService2 from '../src/components/ourService2'
import Bgvideo from '../src/components/bgvideo'
import Experts from '../src/components/experts'
import Experts2 from '../src/components/experts2'
import Prefers from '../src/components/Prefer'
import ContactUs from '../src/components/Contactusform'
import Footer from '../src/components/Footer'
const Home = () => {
  return (
    <div>
      <Slider/>

      <Services/>
      
      <Welcome/>
      <br />
      <Ourinfo/>
      <ServiceCard/>

     <CounterSection/>
      <Clients/>

      <br />
      <br />
      &nbsp;&nbsp;
      <OurService2/>
      {/* <Experts/> */}
      <Experts2/>
      <Prefers/>
      <Bgvideo/>
      <ContactUs/>
      <Footer/>



    </div>
  )
}

export default Home