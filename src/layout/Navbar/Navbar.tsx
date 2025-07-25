import React, { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { logo } from "../../assets";
import MeltingCheese from "../../components/MeltingCheese/MeltingCheese";
import Dialog from "@mui/material/Dialog";
import NavbarMenu from "@/components/NavbarMenu/NavbarMenu";
import { useDispatch } from "react-redux";
import { toggleNavbarMenu } from "@/store/uiSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  //   const [menuOpen, setMenuOpen] = useState(false);
  //   const toggleMenu = () => setMenuOpen((prev) => !prev);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [open, setDialogOpen] = useState(false);

  const fontStyles: React.CSSProperties = {
    fontFamily: "Riffic",
  };

  // Effects
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    // Set redux value for navbar menu
    dispatch(toggleNavbarMenu());
  }, [open]);

  return (
    <>
      {/* <Headroom> */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex justify-between px-3 py-8 h-1 items-center max-w-[1920px]
    ${
      hasScrolled
        ? "backdrop-blur-sm border-b border-white/20"
        : "backdrop-blur-none border-0"
    }
    md:backdrop-blur-none md:border-0`}
      >
        <a
          href="#hero"
          id="logo"
          className="w-12 flex flex-row gap-3 items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="Peperoni Coin"
            className="hover:scale-120 transition-all"
          />
          <h4
            className="text-gray-100 text-2xl text-shadow-lg"
            style={fontStyles}
          >
            PEPERONI
          </h4>
        </a>

        <div className="flex justify-between w-6/12">
          {/* Deprecated | No nav links */}
          {/* <div className="flex flex-row">
            <FlyoutLink href="#" FlyoutContent={PricingContent}>
              Pricing
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={AboutContent}>
              About
            </FlyoutLink>
            <FlyoutLink href="#" FlyoutContent={TokenomicsContent}>
              Tokenomics
            </FlyoutLink>
          </div> */}
        </div>
        <button
          onClick={() => setDialogOpen(true)}
          className="text-white relative p-[14px] cursor-pointer"
        >
          <Bars3Icon className="h-7 w-7 absolute top-0 left-0" />
        </button>
        {/* Melting Cheese Images  */}
      </nav>
      <MeltingCheese />

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={() => setDialogOpen(false)}
        disableScrollLock
      >
        {open && <NavbarMenu setOpen={setDialogOpen} />}
      </Dialog>

      {/* </Headroom> */}
    </>
  );
};

export default Navbar;
