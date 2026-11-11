import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import ProductList from '../../components/productList/ProductList'
import ContactForm from '../../components/contactForm/ContactForm'
import About from '../../components/about/About'

function Home({addToCart}) {
    

    return (
        
        <div className="min-h-screen">
            <Hero/>
            <ProductList onAddToCart={addToCart} />
            <About/>
            <ContactForm />
            <Footer />
        
        </div>
    )
}

export default Home