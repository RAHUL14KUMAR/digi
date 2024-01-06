
import Footer from './components/Footer/Footer'
import Action from './components/Action/Action'
import Testimonial from './components/testimonial/Testimonial'
import Component1 from './components/Component1/Component1'
import Features from './components/Features/Features'
import Feature from './components/Features/Feature'
import Logo from './components/Logo/Logo'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import GHeader from './components/Header/GHeader'

export default function Home() {
  return (
    <div className='w-screen'>
      <GHeader/>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Feature/>
      <Features/>
      <Component1/>
      <Testimonial/>
      <Action/>
      <Footer/>
    </div>
  )
}
