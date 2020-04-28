import React from 'react';
//import { ProductSpecs, Header, Footer } from '../components';
import Header from './Header'
import ProductSpecs from './ProductSpecs'
import Footer from './Footer'
//import FeaturedRooms from './FeaturedRooms'


function HomePage() {
    return (
        
            <body className="App">
                <section id="main-container">
                    <Header />
                    <main>
                        <section id="product-list" className="">
                              <ProductSpecs />
                        </section>
                    </main>
                    <Footer />
                    {/*<FeaturedRooms />*/}
                   
                </section>  
            </body>
        
    )
}

export default HomePage;