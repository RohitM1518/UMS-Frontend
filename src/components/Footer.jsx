import React from 'react';
// import './Footer.css'; // Tailwind CSS will be included globally

const Footer = () => (
  <footer className="py-16 bg-gray-200 text-sm text-center" id="footer">
    <div className="flex flex-wrap justify-center gap-8">
      <div className="w-full sm:w-1/3">
        <h4 className="font-bold mb-4">Contact</h4>
        <p>Questions? Go ahead.</p>
        <form action="/action_page.php" target="_blank" className="space-y-4">
          <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Name" name="Name" required />
          <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Email" name="Email" required />
          <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Subject" name="Subject" required />
          <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Message" name="Message" required></textarea>
          <button type="submit" className="w-full py-2 bg-black text-white rounded">Send</button>
        </form>
      </div>

      <div className="w-full sm:w-1/3">
        <h4 className="font-bold mb-4">About</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">About us</a></li>
          <li><a href="#" className="hover:underline">We're hiring</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
          <li><a href="#" className="hover:underline">Find store</a></li>
          <li><a href="#" className="hover:underline">Shipment</a></li>
          <li><a href="#" className="hover:underline">Payment</a></li>
          <li><a href="#" className="hover:underline">Gift card</a></li>
          <li><a href="#" className="hover:underline">Return</a></li>
          <li><a href="#" className="hover:underline">Help</a></li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 text-left sm:text-justify">
        <h4 className="font-bold mb-4">Store</h4>
        <p><i className="fa fa-fw fa-map-marker mr-2"></i>Presidency University</p>
        <p><i className="fa fa-fw fa-phone mr-2"></i>+00 151515</p>
        <p><i className="fa fa-fw fa-envelope mr-2"></i>presidency@university.com</p>
        <h4 className="font-bold mt-4 mb-2">We accept</h4>
        <p><i className="fa fa-fw fa-cc-amex mr-2"></i>Amex</p>
        <p><i className="fa fa-fw fa-cc-mastercard mr-2"></i>MasterCard</p>
        <p><i className="fa fa-fw fa-cc-paypal mr-2"></i>PayPal</p>
        <p><i className="fa fa-fw fa-cc-visa mr-2"></i>Visa</p>
      </div>
    </div>
  </footer>
);

export default Footer;
