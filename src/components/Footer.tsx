import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <Shield className="w-10 h-10 text-red-500" />
              <span className="text-3xl font-bold">NeverLeaked</span>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The world's most aggressive anti-piracy service for online course creators
            </p>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-right">
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center lg:justify-end">
                <Mail className="w-6 h-6 mr-3 text-red-500" />
                <span className="text-lg font-semibold text-white">protect@neverleaked.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Phone className="w-6 h-6 mr-3 text-red-500" />
                <span className="text-lg font-semibold text-white">+1 (831) 263-6018</span>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-500/50 rounded-lg p-6 inline-block">
              <div className="text-red-300 font-semibold text-lg">Emergency Piracy Hotline</div>
              <div className="text-white font-bold text-xl">Available 24/7</div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 NeverLeaked. All rights reserved. We take piracy as seriously as you do.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Trusted by 10,000+ creators</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;