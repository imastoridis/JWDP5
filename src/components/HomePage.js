import React from 'react';
import { ProductSpecs, Header, Footer } from '../components';
import FeaturedRooms from './FeaturedRooms'
import Room from './Room'


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
                    <FeaturedRooms />
                   
                </section>  
            </body>
        
    )
}

export default HomePage;