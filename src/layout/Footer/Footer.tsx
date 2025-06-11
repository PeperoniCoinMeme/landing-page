import { footerLinks, socialMedia } from "../../constants";
import Section from "../Section/Section";

const Footer = () => {
  return (
    <Section id="footer" className="">
      <footer className="bg-red-600 dark:bg-zinc-900 text-white dark:text-gray-300 py-12 px-6 w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* <!-- Logo & About --> */}
          <div>
            <h2 className="text-2xl font-bold mb-2">🍕 Peperoni Coin</h2>
            <p className="text-sm max-w-sm">
              The tastiest cryptocurrency on the market. Built for the
              community, powered by blockchain, topped with extra flavor.
            </p>
          </div>

          {/* <!-- Navigation --> */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Navigation</h3>
            <a href="#hero" className="hover:underline text-sm">
              Home
            </a>
            <a href="#about" className="hover:underline text-sm">
              About
            </a>
            <a href="#tokenomics" className="hover:underline text-sm">
              Tokenomics
            </a>
            <a href="#buy" className="hover:underline text-sm">
              Buy Now
            </a>
          </div>

          {/* <!-- Social Media --> */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
                className="hover:text-yellow-200 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.14 9.14 0 0 1-2.89 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.04A12.94 12.94 0 0 1 1.64 1.64a4.48 4.48 0 0 0-.61 2.28c0 1.57.8 2.96 2.02 3.78a4.52 4.52 0 0 1-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.45a4.51 4.51 0 0 1-2.04.08c.58 1.8 2.26 3.11 4.25 3.15A9.06 9.06 0 0 1 0 19.54 12.93 12.93 0 0 0 7.01 21c8.32 0 12.87-6.89 12.87-12.87 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener"
                aria-label="Discord"
                className="hover:text-yellow-200 transition"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037 13.932 13.932 0 0 0-.608 1.251 18.136 18.136 0 0 0-5.45 0 13.712 13.712 0 0 0-.617-1.251.077.077 0 0 0-.078-.037A19.736 19.736 0 0 0 3.682 4.369a.07.07 0 0 0-.032.027C.533 9.013-.32 13.532.099 18.01a.081.081 0 0 0 .031.053 19.911 19.911 0 0 0 5.993 2.954.078.078 0 0 0 .084-.027 13.82 13.82 0 0 0 1.19-1.927.075.075 0 0 0-.041-.106 13.113 13.113 0 0 1-1.882-.896.076.076 0 0 1-.008-.127c.127-.095.254-.192.377-.29a.076.076 0 0 1 .079-.01c3.927 1.796 8.18 1.796 12.061 0a.075.075 0 0 1 .08.01c.123.098.25.195.377.29a.076.076 0 0 1-.007.127 12.625 12.625 0 0 1-1.883.895.075.075 0 0 0-.04.107c.36.659.763 1.306 1.194 1.925a.078.078 0 0 0 .083.028 19.888 19.888 0 0 0 6.002-2.954.078.078 0 0 0 .03-.052c.5-5.177-.838-9.658-3.186-13.615a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Line --> */}
        <div className="border-t border-red-500 dark:border-zinc-700 mt-10 pt-6 text-center text-sm text-white dark:text-gray-500">
          © 2025 Peperoni Labs. All rights reserved. Made with love & cheese. 🧀
        </div>
      </footer>

      {/* <section className="flex justify-center items-center flex-col sm:py-16 py-6 w-full">
        <div className="flex justify-center items-start md:flex-row flex-col mb-8">
          <div>
            <img src={pepeLogo} alt="peperoni" />
          </div>

          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
            {footerLinks.map((footerlink) => (
              <div
                key={footerlink.title}
                className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerlink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                        index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
            Copyright Ⓒ 2025 Peperoni. All Rights Reserved.
          </p>

          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </section> */}
    </Section>
  );
};

export default Footer;
