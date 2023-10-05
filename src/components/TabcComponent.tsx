import "../style/Tienda.css"
import React, { useState } from 'react';
import Contador from '../components/Contador';

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
        <div className='Pestañas'>
                <button className='Btn1' onClick={() => handleTabClick(0)}>Todo</button>
                <button className='Btn2' onClick={() => handleTabClick(1)}>Novelas</button>
                <button className='Btn3' onClick={() => handleTabClick(2)}>Manhwas</button>
        </div>

      <div>
        {activeTab === 0 && (
          <div>
            <h2>Todos</h2>
            <h3>The beginning after the end</h3>
            <img className='Tbate' src="Tbate.png" alt="" />
            <h3>Novelas</h3>
            <div className='Novelas'>
              <div className='L1'>
                <a href="https://www.amazon.com.mx/Early-Years-Beginning-After-English-ebook/dp/B01B1DNB3C/ref=sr_1_9?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484721&sprefix=tbate%2Caps%2C133&sr=8-9"><img className='L1' src="Portada1.jpg" alt=""/></a>
                <Contador title='Early Years' />
              </div>

              <div className='L2'>
                <a href="https://www.amazon.com.mx/Heights-Beginning-After-Book-English-ebook/dp/B01B1W53XO/ref=sr_1_13?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-13"><img className='L2' src="Portada2.jpg" alt="" /></a>
                <Contador title='New Heights' />
              </div>
              
              <div className='L3'>
                <a href="https://www.amazon.com.mx/Beckoning-Fates-Beginning-After-English-ebook/dp/B01DSEZTZA/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-8"><img className='L3' src="Portada3.jpg" alt="" /></a>
                <Contador title='Beckoning Fates' />
              </div >

              <div className='L4'>
                <a href="https://www.amazon.com.mx/Horizons-Edge-Beginning-After-English-ebook/dp/B01M5IL7VJ/ref=sr_1_12?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-12"><img className='L4' src="Portada4.jpg" alt="" /></a>
                <Contador title="Horizon's Edge" />
              </div>

              <div className='L5'>
                <a href="https://www.amazon.com.mx/Convergence-Beginning-After-Book-English-ebook/dp/B075C62FJL/ref=sr_1_11?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-11"><img className='L5' src="Portada5.jpg" alt="" /></a>
                <Contador title="Convergence" />
              </div>

              <div className='L6'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Transcendence-English-ebook/dp/B08X45WS8Y/ref=sr_1_14?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-14"><img className='L6' src="Portada6.jpg" alt="" /></a>
                <Contador title="Transcendence" />
              </div>

              <div className='L7'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Divergence-English-ebook/dp/B084NVSR2H/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-3"><img className='L7' src="Portada7.jpg" alt="" /></a>
                <Contador title="Divergence" />
              </div>

              <div className='L8'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Ascension-English-ebook/dp/B08YY23PH6/ref=sr_1_10?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-10"><img className='L8' src="Portada8.jpg" alt="" /></a>
                <Contador title="Ascension" />
              </div>

              <div className='L9'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Reckoning-English-ebook/dp/B0B1QP3CDC/ref=sr_1_6?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-6"><img className='L9' src="Portada9.jpg" alt="" /></a>
                <Contador title="Reckoning" />
              </div>

              <div className='L10'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Retribution-English-ebook/dp/B0C7XG69LB/ref=sr_1_7?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-7"><img className='L10' src="Portada10.jpg" alt="" /></a>
                <Contador title="Retribution" />
              </div>
                
            </div>
            <h3>Novelas</h3>
            <div className='Manhwas'>
              <div className='M1'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Vol-Comic/dp/1975345630/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"><img className='M1' src="Manhwa1.jpg" alt="" /></a>
                <Contador title="Tomo 1" />
              </div>

              <div className='M2'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Vol-Comic/dp/1975345649/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-4&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"><img className='M2' src="Manhwa2.jpg" alt="" /></a>
                <Contador title="Tomo 2" />
              </div>

              <div className='M3'>
                <a href=""><img className='M3' src="Manhwa3.jpg" alt="" /></a>
                <Contador title="Tomo 3" />
              </div>  
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h2>Novelas</h2>
            <img className='Tbate' src="Tbate.png" alt="" />
            <h3>The beginning after the end</h3>
            <div className='Novelas'>
            <div className='L1'>
                <a href="https://www.amazon.com.mx/Early-Years-Beginning-After-English-ebook/dp/B01B1DNB3C/ref=sr_1_9?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484721&sprefix=tbate%2Caps%2C133&sr=8-9"><img className='L1' src="Portada1.jpg" alt=""/></a>
                <Contador title='Early Years' />
              </div>

              <div className='L2'>
                <a href="https://www.amazon.com.mx/Heights-Beginning-After-Book-English-ebook/dp/B01B1W53XO/ref=sr_1_13?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-13"><img className='L2' src="Portada2.jpg" alt="" /></a>
                <Contador title='New Heights' />
              </div>
              
              <div className='L3'>
                <a href="https://www.amazon.com.mx/Beckoning-Fates-Beginning-After-English-ebook/dp/B01DSEZTZA/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-8"><img className='L3' src="Portada3.jpg" alt="" /></a>
                <Contador title='Beckoning Fates' />
              </div >

              <div className='L4'>
                <a href="https://www.amazon.com.mx/Horizons-Edge-Beginning-After-English-ebook/dp/B01M5IL7VJ/ref=sr_1_12?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-12"><img className='L4' src="Portada4.jpg" alt="" /></a>
                <Contador title="Horizon's Edge" />
              </div>

              <div className='L5'>
                <a href="https://www.amazon.com.mx/Convergence-Beginning-After-Book-English-ebook/dp/B075C62FJL/ref=sr_1_11?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-11"><img className='L5' src="Portada5.jpg" alt="" /></a>
                <Contador title="Convergence" />
              </div>

              <div className='L6'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Transcendence-English-ebook/dp/B08X45WS8Y/ref=sr_1_14?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-14"><img className='L6' src="Portada6.jpg" alt="" /></a>
                <Contador title="Transcendence" />
              </div>

              <div className='L7'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Divergence-English-ebook/dp/B084NVSR2H/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-3"><img className='L7' src="Portada7.jpg" alt="" /></a>
                <Contador title="Divergence" />
              </div>

              <div className='L8'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Ascension-English-ebook/dp/B08YY23PH6/ref=sr_1_10?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-10"><img className='L8' src="Portada8.jpg" alt="" /></a>
                <Contador title="Ascension" />
              </div>

              <div className='L9'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Reckoning-English-ebook/dp/B0B1QP3CDC/ref=sr_1_6?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-6"><img className='L9' src="Portada9.jpg" alt="" /></a>
                <Contador title="Reckoning" />
              </div>

              <div className='L10'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Retribution-English-ebook/dp/B0C7XG69LB/ref=sr_1_7?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-7"><img className='L10' src="Portada10.jpg" alt="" /></a>
                <Contador title="Retribution" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2>Manhwas</h2>
            <img className='Tbate' src="Tbate.png" alt="" />
            <h3>The beginning after the end</h3>
            <div className='Manhwas'>
            <div className='M1'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Vol-Comic/dp/1975345630/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-1&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"><img className='M1' src="Manhwa1.jpg" alt="" /></a>
                <Contador title="Tomo 1" />
              </div>

              <div className='M2'>
                <a href="https://www.amazon.com.mx/Beginning-After-End-Vol-Comic/dp/1975345649/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=10RLJC1UEDVVW&keywords=tbate&qid=1696484984&sprefix=tbate%2Caps%2C133&sr=8-4&ufe=app_do%3Aamzn1.fos.4e545b5e-1d45-498b-8193-a253464ffa47"><img className='M2' src="Manhwa2.jpg" alt="" /></a>
                <Contador title="Tomo 2" />
              </div>

              <div className='M3'>
                <a href=""><img className='M3' src="Manhwa3.jpg" alt="" /></a>
                <Contador title="Tomo 3" />
              </div>  
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
