import React from 'react';
import Product from './Product';

import './Home.css';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=""
            />
            <div className="home__row">
                <Product 
                    id="111"
                    title="Book"
                    price={89.99}
                    rating={5}
                    image="https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/106464388o.jpg"
                />
                <Product 
                    id="111"
                    title="Book"
                    price={89.99}
                    rating={5}
                    image="https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/106464388o.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="111"
                    title="Book"
                    price={89.99}
                    rating={5}
                    image="https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/106464388o.jpg"
                />
                <Product 
                    id="111"
                    title="Book"
                    price={89.99}
                    rating={5}
                    image="https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/106464388o.jpg"
                />
                <Product 
                    id="111"
                    title="Book"
                    price={89.99}
                    rating={5}
                    image="https://emp-scs-uat.img-osdw.pl/img-p/1/kipwn/c0aac775/std/e6-172/106464388o.jpg"
                />
            </div>
            
        </div>
    )
}

export default Home
