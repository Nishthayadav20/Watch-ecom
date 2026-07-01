const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 w-full">
      
      {/* This is the key fix */}
      <div className="w-full flex justify-center">
        
        <div className="w-full max-w-4xl px-6 text-center">
          
          <h2 className="text-xl font-semibold mb-4">
            Zenith Watches
          </h2>

          <p className="text-gray-400 mb-6">
            Luxury crafted for timeless elegance.
          </p>

          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Zenith. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;