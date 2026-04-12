import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-black text-text-primary mb-6">About Us</h1>
      
      <div className="prose max-w-none text-text-muted space-y-6">
        <p>
          Welcome to <strong>PriceWise</strong>, your ultimate destination for finding the best deals across India's top e-commerce platforms. 
          We built this platform with a simple mission: to empower consumers to make smarter purchasing decisions by providing transparent, 
          real-time price comparisons.
        </p>

        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">What We Do</h2>
        <p>
          Navigating multiple retail websites to find the lowest price can be time-consuming and frustrating. PriceWise aggregates product 
          information from various trusted retailers—such as Amazon, Flipkart, Myntra, Snapdeal, and more—so you can easily see who is offering 
          the best price for the exact product you want, all in one place.
        </p>

        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">Why Choose PriceWise?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Real-Time Comparisons:</strong> We strive to bring you the most accurate and up-to-date pricing data.</li>
          <li><strong>Wide Selection:</strong> Discover deals across categories including electronics, fashion, home appliance, and more.</li>
          <li><strong>Free to Use:</strong> Our service is entirely free for consumers. We may earn a small commission from retailers if you click through and make a purchase, which helps keep our servers running.</li>
        </ul>

        <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">Our Commitment</h2>
        <p>
          We are committed to putting the consumer first. We don't favor any specific retailer. Instead, our algorithms simply look for 
          the best price available and present it to you clearly. We are constantly evolving and adding new platforms to our comparison engine 
          to ensure you never overpay again.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
