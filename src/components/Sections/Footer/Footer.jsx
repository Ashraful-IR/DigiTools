import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer mx-auto flex flex-col  sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="mx-auto gap-4 mt-5 flex flex-col justify-between items-start">
            <h6 className="text-4xl font-bold">DigiTools</h6>
            <p className="text-4 text-white opacity-50">
              YPremium digital tools for creators,
              <br /> professionals, and businesses. Work smarter <br /> with our
              suite of powerful tools.
            </p>
          </div>
          <div className="mx-auto gap-4 mt-20 flex flex-col justify-between items-start">
            <h6 className="footer-title">Product</h6>
            <a className="link link-hover">Features</a>
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">Templates</a>
            <a className="link link-hover">Integrations</a>
          </div>
          <div className="mx-auto gap-4 mt-20 flex flex-col justify-between items-start">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
          </div>
          <div className="mx-auto gap-4 mt-20 flex flex-col justify-between items-start ">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Community</a>
            <a className="link link-hover">Contact</a>
          </div>
          <div className="mx-auto gap-4 flex flex-col justify-between items-start">
            <h6 className="footer-title">Social Links</h6>
            <div className="flex justify-between items-center gap-5 text-4xl">
              <a className="link link-hover">
                <FaTwitter />
              </a>
              <a className="link link-hover">
                <FaFacebook />
              </a>
              <a className="link link-hover">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-full h-0.5 bg-gray-600"></div>
        <div className="container mx-auto flex justify-between items-center text-center text-sm text-gray-500 w-full ">
          <div>
            &copy; {new Date().getFullYear()} DigiTools. All rights reserved.
          </div>

          <div className="flex justify-end items-center gap-3">
            <a className="link link-hover">Terms of Service</a> |
            <a className="link link-hover">Privacy Policy</a> |
            <a className="link link-hover">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
