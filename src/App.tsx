import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

function App() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:0xLcrgs@proton.me';
  };

  const handleTelegramClick = () => {
    window.location.href = 'https://t.me/xLcrgsPharma';
  };

  const handlePricesClick = () => {
    window.location.href = '/prices.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#2A1A3F] relative overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470')] bg-cover bg-center filter grayscale"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-red-600/20">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-wider text-center">0xlcrgs</h2>
        </div>

        {/* Title and Tagline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 tracking-tight shadow-red-500/20 drop-shadow-lg">
          0xlcrgs Pharmacy
        </h1>
        <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl mb-12">
          Your Trusted Source for Performance Enhancement – Available in EU
        </p>

        {/* Contact Information */}
        <div className="text-center mb-8">
          <p className="text-red-500 font-bold text-lg mb-2">Order at: 0xLcrgs@proton.me</p>
          <p className="text-gray-400 text-sm mb-6">(Proton Mail Only)</p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <button 
              onClick={handleEmailClick}
              className="p-3 bg-red-600/10 rounded-full hover:bg-red-600/20 transition-colors"
            >
              <Mail className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={handleTelegramClick}
              className="p-3 bg-red-600/10 rounded-full hover:bg-red-600/20 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button 
              onClick={handlePricesClick}
              className="px-8 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
            >
              PRICES
            </button>
          </div>
        </div>
      </div>

      {/* Side Images */}
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-3/4 opacity-80">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1470')] bg-cover bg-center filter grayscale"></div>
      </div>
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-3/4 opacity-80">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470')] bg-cover bg-center filter grayscale"></div>
      </div>
    </div>
  );
}

export default App;