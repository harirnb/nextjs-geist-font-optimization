export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Agro Nepal</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering Nepali farmers with modern technology, real-time weather updates, 
              market prices, and expert farming advice to improve agricultural productivity.
            </p>
            <p className="text-sm text-gray-400">
              Supporting sustainable farming practices across Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#weather" className="text-gray-300 hover:text-green-400 transition-colors">
                  Weather Updates
                </a>
              </li>
              <li>
                <a href="#market" className="text-gray-300 hover:text-green-400 transition-colors">
                  Market Prices
                </a>
              </li>
              <li>
                <a href="#tips" className="text-gray-300 hover:text-green-400 transition-colors">
                  Farming Tips
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: ranabhathari0@gmail.com</p>
              <p>Phone: +977-9827592407</p>
              <p>Address: Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Agro Nepal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
