import Section from "../Section/Section";
import LandingText from "@/components/design/tipography/LandingText";
import LandingSubtitle from "@/components/design/tipography/LandingSubtitle";
import Social from "@/components/Social/Social";

const Footer = () => {
  return (
    <Section
      id="footer"
      className="min-h-100 z-0 border-t-1 border-white/20"
      bgColor="0c0500"
    >
      <footer className="text-white dark:text-gray-300 py-20 px-8 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 z-0">
          {/* <!-- Logo & About --> */}
          <div>
            <LandingSubtitle>Peperoni Coin</LandingSubtitle>
            <LandingText>
              The tastiest cryptocurrency on the market. Built for the
              community, powered by blockchain, topped with extra flavor.
            </LandingText>
          </div>

          {/* <!-- Navigation --> */}
          <div className="flex flex-col gap-2">
            <LandingSubtitle>Navigation</LandingSubtitle>
            <a href="#hero" className="hover:underline text-sm">
              <LandingText>Home</LandingText>
            </a>
            <a href="#about" className="hover:underline text-sm">
              <LandingText>About</LandingText>
            </a>
            <a href="#missionvibes" className="hover:underline text-sm">
              <LandingText>Mission & Vibes</LandingText>
            </a>
            <a href="#sliceofutility" className="hover:underline text-sm">
              <LandingText>The Slice of Utility</LandingText>
            </a>
            <a href="#slicenomics" className="hover:underline text-sm">
              <LandingText>Slicenomics</LandingText>
            </a>
            <a href="#roadmap" className="hover:underline text-sm">
              <LandingText>Roadmap</LandingText>
            </a>
            <a href="#join" className="hover:underline text-sm">
              <LandingText>Join Us</LandingText>
            </a>
          </div>

          {/* <!-- Social Media --> */}
          <div>
            <LandingText className="font-2xl mb-3">Follow Us</LandingText>
            <Social mode="footer" />
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
