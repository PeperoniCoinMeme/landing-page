import {
  pepeCop,
  pepeDavinci,
  pepeMiner,
  pepeGamer,
  pepeMilitary,
  pepeGifted,
  pepeHonors,
  pepeJumproper,
  pepeLanding,
  pepeLibrary,
  pepePeperoni,
  pepePig,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitStrong,
  pepeFitSkinny,
  pepePets,
  pepePresident,
  pepeSpy,
  pepeSurf,
  pepeWarrior,
  pepeAviator,
  pepeBaseball,
  pepeBoxer,
  pepeCatPizza,
  pepeCook,
  pepeWelder,
  pepeSamurai,
  pepeWar,
} from "@/assets";
import { logoIconsList } from "../../constants";

interface CarouselItemProps {
  name?: string;
  imgPath?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ name, imgPath }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={imgPath} alt={name} className="rounded-2xl" />
    </div>
  );
};

const images = [
  { name: "pepeCop", imgPath: pepeCop },
  { name: "pepeDavinci", imgPath: pepeDavinci },
  { name: "pepeMiner", imgPath: pepeMiner },
  //   { name: "pepeGamer", imgPath: pepeGamer },
  { name: "pepeMilitary", imgPath: pepeMilitary },
  { name: "pepeGifted", imgPath: pepeGifted },
  { name: "pepeHonors", imgPath: pepeHonors },
  { name: "pepeJumproper", imgPath: pepeJumproper },
  { name: "pepeLanding", imgPath: pepeLanding },
  { name: "pepeLibrary", imgPath: pepeLibrary },
  //   { name: "pepePeperoni", imgPath: pepePeperoni },
  { name: "pepePig", imgPath: pepePig },
  { name: "pepeCar", imgPath: pepeCar },
  { name: "pepeCivilian", imgPath: pepeCivilian },
  { name: "pepeClimbing", imgPath: pepeClimbing },
  { name: "pepeFitStrong", imgPath: pepeFitStrong },
  { name: "pepeFitSkinny", imgPath: pepeFitSkinny },
  { name: "pepePets", imgPath: pepePets },
  { name: "pepePresident", imgPath: pepePresident },
  { name: "pepeSpy", imgPath: pepeSpy },
  { name: "pepeSurf", imgPath: pepeSurf },
  { name: "pepeWarrior", imgPath: pepeWarrior },
  { name: "pepeAviator", imgPath: pepeAviator },
  { name: "pepeBaseball", imgPath: pepeBaseball },
  { name: "pepeBoxer", imgPath: pepeBoxer },
  { name: "pepeCatPizza", imgPath: pepeCatPizza },
  { name: "pepeCook", imgPath: pepeCook },
  { name: "pepeWelder", imgPath: pepeWelder },
  { name: "pepeSamurai", imgPath: pepeSamurai },
  { name: "pepeWar", imgPath: pepeWar },
];

const Carousel = () => (
  <div className="relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="overflow-hidden relative h-50 md:h-100">
      <div className="marquee-box md:gap-12 gap-5">
        {images.map((icon, index) => (
          <CarouselItem key={index} name={icon.name} imgPath={icon.imgPath} />
        ))}

        {logoIconsList.map((icon, index) => (
          <CarouselItem key={index} name={icon.name} imgPath={icon.imgPath} />
        ))}
      </div>
    </div>
  </div>
);

export default Carousel;
