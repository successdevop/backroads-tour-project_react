import tourImg1 from "../images/tour-1.jpeg";
import tourImg2 from "../images/tour-2.jpeg";
import tourImg3 from "../images/tour-3.jpeg";
import tourImg4 from "../images/tour-4.jpeg";
import tourImg5 from "../images/tour-5.jpeg";
import tourImg6 from "../images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#featured", text: "featured" },
  { id: 5, href: "#gallery", text: "gallery" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const servicesInfo = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribuscupiditate, tempore reiciendis sit ipsum consequatur!",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless biking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribuscupiditate, tempore reiciendis sit ipsum consequatur!",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribuscupiditate, tempore reiciendis sit ipsum consequatur!",
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    date: "august 26th, 2020",
    title: "tibet adventure",
    days: "6 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.",
    icon: "fas fa-map",
    country: "china",
    price: "2100",
  },
  {
    id: 2,
    img: tourImg2,
    date: "october 1th, 2020",
    title: "best of java",
    days: "11 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.",
    icon: "fas fa-map",
    country: "indonesia",
    price: "1400",
  },
  {
    id: 3,
    img: tourImg3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    days: "8 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.",
    icon: "fas fa-map",
    country: "hong kong",
    price: "5000",
  },
  {
    id: 4,
    img: tourImg4,
    date: "december 5th, 2020",
    title: "kenya highlights",
    days: "20 days",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sapiente earum recusandae laborum ab eligendi repellat commodi dolore doloremque.",
    icon: "fas fa-map",
    country: "kenya",
    price: "3300",
  },
];

export const gallery = [
  { id: 1, img: tourImg1 },
  { id: 2, img: tourImg2 },
  { id: 3, img: tourImg3 },
  { id: 4, img: tourImg4 },
  { id: 5, img: tourImg5 },
  { id: 6, img: tourImg6 },
  { id: 7, img: tourImg1 },
  { id: 8, img: tourImg2 },
];
