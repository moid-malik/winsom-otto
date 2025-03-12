"use client";
import { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState({ signUp: false, talkToUs: false });

  return (
    <footer className="mt-12 bg-gray-100 text-gray-800 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-semibold">Winsom Otto</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Track Order</li>
            <li>Search</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div>
          <h3
            className="text-lg font-semibold cursor-pointer md:cursor-default"
            onClick={() => setOpen({ ...open, signUp: !open.signUp })}
          >
            SIGN UP AND SAVE
          </h3>
          <div className={`${open.signUp || "hidden md:block"} mt-4 text-sm`}>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="flex items-center mt-2 border-b pb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-2 outline-none bg-transparent"
              />
              <button className="p-2">📩</button>
            </div>
            <div className="flex space-x-4 mt-4">
              <FaInstagram size={20} />
              <FaFacebook size={20} />
              <FaYoutube size={20} />
              <FaTiktok size={20} />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3
            className="text-lg font-semibold cursor-pointer md:cursor-default"
            onClick={() => setOpen({ ...open, talkToUs: !open.talkToUs })}
          >
            TALK TO US
          </h3>
          <div className={`${open.talkToUs || "hidden md:block"} mt-4 text-sm`}>
            <p><strong>Chat With Us</strong></p>
            <p>Monday - Saturday: 10am-10pm PST</p>
            <p>Address: A219 block 3 KDA Market Gulshan e Iqbal Near Flourish Salon Karachi</p>
            <p>UAE Address: 248,0,LOOTAH BLDG 0 Diera DXB</p>
            <p>WhatsApp us: +92 3012546333</p>
            <p>Customer Support: <a href="mailto:helloelyscents@gmail.com" className="text-blue-600">helloelyscents@gmail.com</a></p>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10">
        © 2025 Winsom Otto
      </div>
    </footer>
  );
}
