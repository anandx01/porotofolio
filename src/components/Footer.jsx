import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons with Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/anand-rastogi-wq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://github.com/anandx01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:your-anandrastogi200@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
              >
                <FaEnvelope size={24} />
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 ANAND RASTOGI. All rights reserved.
              </p>
              <p className="text-sm"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
