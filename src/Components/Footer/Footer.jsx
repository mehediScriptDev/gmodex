import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-5 text-gray-600 text-sm border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4 text-center">
          <a  className="underline">
            PGP Key
          </a>
          <a  className="underline">
            .onion Mirrors
          </a>
          <a  className="underline">
            Security Guide
          </a>
          <a  className="underline">
            FAQ
          </a>
          <a  className="underline">
            Vendor Onboarding
          </a>
          <a  className="underline">
            Contact (Secure)
          </a>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 text-center">
          <a  className="underline">
            Privacy Policy
          </a>
          <a  className="underline">
            Conditions of Use
          </a>
          <span>© 1999–2025 gModex</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
