import React from 'react';
import AboutC1 from '../About/AboutCloth1.png';
import AboutC2 from '../About/AboutCloth2.png';

function About() {
  return (
    <div className="w-full p-4 space-y-10 bg-white">
      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-xl lg:text-2xl font-bold mb-4">Elevate Your Style with Our Exclusive Clothing Line</h1>
          <p className="text-base lg:text-lg leading-7 text-gray-700 mb-4">
            Elevate Your Style with Our Exclusive Clothing Line. Our clothing line is designed for those who believe in expressing their unique style with confidence and grace. Each piece in our collection is carefully curated to blend contemporary trends with timeless elegance, ensuring you always look your best, no matter the occasion. From casual wear that embodies comfort and chic, to sophisticated evening attire that turns heads, our range offers something for everyone. Dive into our latest collection and discover how our passion for fashion can elevate your wardrobe, helping you embrace every moment with unparalleled style.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:h-96">
          <img src={AboutC1} alt="Elevate Your Style" className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-10">
        <div className="w-full lg:w-1/2 p-4 bg-white">
          <h1 className="text-xl lg:text-2xl font-bold mb-4">Unleash Your Fashion Potential with Our Signature Clothing Line</h1>
          <p className="text-base lg:text-lg leading-7 text-gray-700 mb-4">
            Step into a realm where your style knows no bounds. Our clothing line is more than just apparel; its a celebration of individuality, a blend of modern chic and timeless sophistication crafted to make you stand out. Every piece is a masterpiece, designed to accentuate your personality and elevate your wardrobe. From effortlessly stylish casual wear to breathtaking evening outfits, our collection empowers you to express yourself with confidence and flair. Embrace the allure of high fashion, redefine your look, and make every day a runway moment with our exclusive selection.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:h-96">
          <img src={AboutC2} alt="Unleash Your Fashion Potential" className="rounded-lg object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
