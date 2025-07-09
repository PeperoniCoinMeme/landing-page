import {
  pepeCop,
  pepeDavinci,
  pepeMiner,
  //   pepeGamer,
  pepeMilitary,
  pepeGifted,
  pepeHonors,
  pepeJumproper,
  pepeLanding,
  pepeLibrary,
  //   pepePeperoni,
  pepePig,
  pepeCar,
  pepeCivilian,
  pepeClimbing,
  pepeFitStrong,
  pepeFitSkinny,
  pepePets,
  pepePresident,
  pepeSpy,
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
import GalleryCard from "../Gallery/GalleryCard";

// interface CarouselItemProps {
//   name?: string;
//   imgPath?: string;
// }

// const CarouselItem: React.FC<CarouselItemProps> = ({ name, imgPath }) => {
//   return (
//     <div className="flex-none flex-center marquee-item">
//       <img src={imgPath} alt={name} className="rounded-2xl" />
//     </div>
//   );
// };

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
// <CarouselItem key={index} name={icon.name} imgPath={icon.imgPath} />
const Carousel = () => (
  <div className="relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="overflow-hidden relative h-80 md:h-100">
      <div className="marquee-box">
        {images.map((icon, index) => (
          <GalleryCard
            key={index}
            imageUrl={icon.imgPath}
            className={`my-2 mx-1 md:my-4 rounded-lg min-w-40 gallery-card border-1 border-white/40 hover:scale-105 hover:mx-2`}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Carousel;
