import action from "../assets/action.png";
import strategy from "../assets/strategy.png";
import rpg from "../assets/rpg.png";

///// import icons
import { RiGamepadLine } from "react-icons/ri";
import { MdOutlineStorefront } from "react-icons/md";
import { BsCollectionFill } from "react-icons/bs";
import { MdOutlineReviews } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { SiSpringCreators } from "react-icons/si";
import { AiOutlineTag } from "react-icons/ai";
import { SiGamedeveloper } from "react-icons/si";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { BsPlaystation } from "react-icons/bs";
import { TbBrandXbox } from "react-icons/tb";
import { BsNintendoSwitch } from "react-icons/bs";
import { LiaAppStoreIos } from "react-icons/lia";
import { AiOutlineAndroid } from "react-icons/ai";

export const menu = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/games",
    label: "All games",
  },
  {
    href: "/browse",
    label: "Browse",
    children: [
      {
        href: "/platforms",
        label: "Platforms",
        icon: RiGamepadLine,
      },
      {
        href: "/stores",
        label: "Store",
        icon: MdOutlineStorefront,
      },
      {
        href: "/collections",
        label: "Collections",
        icon: BsCollectionFill,
      },
      {
        href: "/reviews",
        label: "Reviews",
        icon: MdOutlineReviews,
      },
      {
        href: "/genres",
        label: "Genres",
        icon: BiCategory,
      },
      {
        href: "/creators",
        label: "Creators",
        icon: SiSpringCreators,
      },
      {
        href: "/tags",
        label: "Tags",
        icon: AiOutlineTag,
      },
      {
        href: "/developers",
        label: "Developers",
        icon: SiGamedeveloper,
      },
      {
        href: "/publishers",
        label: "Publishers",
        icon: MdOutlinePublishedWithChanges,
      },
    ],
  },
  {
    href: "/platforms",
    label: "Platforms",
    children: [
      {
        href: "/platforms/pc",
        label: "PC",
        icon: MdOutlinePersonalVideo,
      },
      {
        href: "/platforms/ps4",
        label: "Playstation 4",
        icon: BsPlaystation,
      },
      {
        href: "/platforms/xbox-one",
        label: "XBox One",
        icon: TbBrandXbox,
      },
      {
        href: "/platforms/nintendo-switch",
        label: "Nintendo Switch",
        icon: BsNintendoSwitch,
      },
      {
        href: "/platforms/ios",
        label: "iOS",
        icon: LiaAppStoreIos,
      },
      {
        href: "/platforms/android",
        label: "Android",
        icon: AiOutlineAndroid,
      },
    ],
  },
  {
    href: "/genres",
    label: "Genres",
    children: [
      {
        href: "/genres/action",
        label: "Action",
        icon: action,
      },
      {
        href: "/genres/strategy",
        label: "Strategy",
        icon: strategy,
      },
      {
        href: "/genres/rpg",
        label: "RPG",
        icon: rpg,
      },
      {
        href: "/genres/shooter",
        label: "Shooter",
        icon: "https://media.rawg.io/media/crop/600/400/games/120/1201a40e4364557b124392ee50317b99.jpg",
      },
      {
        href: "/genres/adventure",
        label: "Adventure",
        icon: "https://media.rawg.io/media/crop/600/400/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
      },
      {
        href: "/genres/puzzle",
        label: "Puzzle",
        icon: "https://media.rawg.io/media/crop/600/400/games/328/3283617cb7d75d67257fc58339188742.jpg",
      },
      {
        href: "/genres/racing",
        label: "Racing",
        icon: "https://media.rawg.io/media/crop/600/400/games/082/082365507ff04d456c700157072d35db.jpg",
      },
      {
        href: "/genres/sport",
        label: "Sport",
        icon: "https://media.rawg.io/media/crop/600/400/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
      },
    ],
  },
];
