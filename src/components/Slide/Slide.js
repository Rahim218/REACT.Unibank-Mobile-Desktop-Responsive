import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import SlideItem from './SlideItem';


function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const items = [

    {
      p_url: "	https://unibank.az/uploads/banners/1681193995200-azn-dovriyye.png",
      title: "Ləğv olundu",
      description: " Artıq UCard-la dünyanın istənilən yanacaqdoldurma, kafe-restoran və marketlərində 5% keşbek qazanmaq üçün 200 AZN dövriyyə tələbi yoxdur!",

    },
    {
      p_url: "https://unibank.az/uploads/banners/16708419491664282439Toplabanner.lastpng.png",
      title: "Topla",
      description: "İstənilən arzunu reallaşdır! Hədəfinə ad ver və daxılına pul köçürməyə başla!",

    },
    {
      p_url: "https://unibank.az/uploads/banners/1673854081cover-ne.png",
      title: "Sənin kartın, sənin “art”ın!",
      description: "UBank-a daxil ol, Apple Wallet / Google Wallet™dakı Unibank kartlarını istədiyin dizayna dəyiş və hamıdan fərqli ol!",

    },
    {
      p_url: "https://unibank.az/uploads/banners/16703977791661845566digerbank.gif",
      title: "Kartdan karta - pulsuzdur!",
      description: " Unibank kartlarına limitsiz, ölkədaxili digər bank kartlarına isə 2000 AZN-dək köçürmələri 0% ilə et!",

    },
  ]




  return (

    <div className="container">
      <Carousel nextIcon={<span className="custom-next-icon" ></span>}
        prevIcon={<span className="custom-prev-icon"></span>}
        interval={null} activeIndex={index} onSelect={handleSelect} indicators={true} className='my-carousel' >
        {
          items.map((item, index) => {

            return (
              <Carousel.Item key={index}>
                <SlideItem item={item} />
              </Carousel.Item>
            )

          })

        }
      </Carousel>
    </div>


  );
}

export default Slide
