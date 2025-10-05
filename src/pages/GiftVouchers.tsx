import scubaMan from "@/components/icons/scubaMan";
import discover_scuba from "@/components/icons/discover_scuba";
import DryOpenWater from "@/components/icons/dry_open_water";
import DrySuit from "@/components/icons/dry_suit";
import Enriched from "@/components/icons/enriched";
import { Heart, Group, Calendar, Users } from "lucide-react";

export const specialOffers = [
  {
    id: "sharm-trip",
    title: "Dive Trip to Sharm El Sheikh",
    location: "Sharm El Sheikh | Oct 24, 2026",
    price: "",
    description:
      "Fly from London Gatwick to the Red Sea’s diving paradise, Sharm El Sheikh, for an unforgettable 5-day adventure.",
    color: "turquoise",
    icon: scubaMan,
    features: [
      "Return flights from London Gatwick",
      "Hotel accommodation with airport transfers",
      "5-day diving package (10 dives)",
      "Guided visit to the Old Market",
    ],
  },
  {
    id: "hurghada-trip",
    title: "Scuba Diving Holiday to Hurghada",
    location: "Hurghada | Mar 21, 2026",
    price: "",
    description:
      "Escape to the Red Sea for an unforgettable diving adventure! Week-long holiday from Belfast to Hurghada.",
    color: "coral",
    icon: scubaMan,
    features: [
      "Return flights from Belfast",
      "7 nights stay at 4* All-Inclusive Resort",
      "5-day scuba diving package",
      "1 day activity (quad biking or boat trip)",
    ],
  },
  {
    id: "open-water-drysuit",
    title: "Open Water + Drysuit Package",
    location: "Complete Course",
    price: "£775",
    description:
      "Get certified with your Open Water Diver qualification and learn how to safely use a drysuit.",
    color: "seaweed",
    icon: DryOpenWater,
    features: [
      "Open Water certification",
      "Drysuit training",
      "Year-round diving",
      "Northern Ireland ready",
    ],
  },
  {
    id: "nitrox-course",
    title: "Enriched Air (Nitrox) Course",
    location: "Specialty Course",
    price: "£225",
    description:
      "Boost your bottom time and reduce fatigue with our Nitrox Course.",
    color: "sunny",
    icon: Enriched,
    features: [
      "Extended bottom time",
      "Reduced fatigue",
      "One free Nitrox tank fill",
      "Advanced diving skills",
    ],
  },
  {
    id: "drysuit-course",
    title: "Drysuit Course",
    location: "Specialty Course",
    price: "£225",
    description:
      "Learn the skills to dive comfortably and safely in a drysuit — essential for cold water diving.",
    color: "turquoise",
    icon: DrySuit,
    features: [
      "Drysuit certification",
      "Cold water diving",
      "Extended dive times",
      "Professional training",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: Heart,
    title: "Experienced, passionate instructors",
    description:
      "Learn from certified professionals who love what they do.",
  },
  {
    icon: Group,
    title: "Small groups for personal attention",
    description:
      "Maximum 4 students per instructor for focused learning.",
  },
  {
    icon: Calendar,
    title: "Flexible scheduling around you",
    description:
      "We work around your schedule, not the other way around.",
  },
  {
    icon: Users,
    title: "Courses for local & international diving",
    description:
      "Prepare for both Northern Ireland waters and global destinations.",
  },
];
export default GiftVouchers;
