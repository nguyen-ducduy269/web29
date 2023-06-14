const clothes = [
  {
    name: "Women's Fashion",
    image: "./assets/image/women-clothes.png",
  },
  {
    name: "Men's Fashion",
    image: "./assets/image/men-clothes.png",
  },
  {
    name: "Phones & Telecommunications",
    image: "./assets/image/phone.png",
  },
  {
    name: "Computer, Office & Security",
    image: "./assets/image/computer.png",
  },
  {
    name: "Consumer Electronics",
    image: "./assets/image/electronic.png",
  },
  {
    name: "Jewelry & Watches",
    image: "./assets/image/jewelry.png",
  },
  {
    name: "Home, Pet & Appliances",
    image: "./assets/image/home.png",
  },
  {
    name: "Bags & Shoes",
    image: "./assets/image/bags.png",
  },
  {
    name: "Toys, Kids & Babies",
    image: "./assets/image/toys.png",
  },
  {
    name: "Outdoor Fun & Sports",
    image: "./assets/image/sports.png",
  },
  {
    name: "Beauty, Health & Hair",
    image: "./assets/image/beauty.png",
  },
  {
    name: "Automobiles & Motorcycles",
    image: "./assets/image/motorcycles.png",
  },
  {
    name: "Tools & Home Improvement",
    image: "./assets/image/improvement.png",
  },
];

const sale = [
  {
    image: "./assets/image/shopping guide.webp",
    discount: 39,
    name: "Shopping Guide",
  },
  {
    image: "./assets/image/amazing-markdown.webp",
    discount: 52,
    name: "Amazing markdowns",
  },
  {
    image: "./assets/image/top-brands.webp",
    discount: 67,
    name: "Top brands",
  },
  {
    image: "./assets/image/choice.webp",
    discount: 70,
    name: "Choice",
  },
  {
    image: "./assets/image/spend&save.webp",
    discount: 69,
    name: "Spend & Save",
  },
  {
    image: "./assets/image/enjoy-your-tech-live.webp",
    discount: 67,
    name: "Enjoy your tech life",
  },
  {
    image: "./assets/image/toy&hobbies.webp",
    discount: 62,
    name: "Toys & hobbies",
  },
  {
    image: "./assets/image/summer-home-refesh.webp",
    discount: 67,
    name: "Summer home refresh",
  },
  {
    image: "./assets/image/Consumer&electronics.webp",
    discount: 67,
    name: "Consumer electronics",
  },
  {
    image: "./assets/image/Home & garden.webp",
    discount: 62,
    name: "Home & garden",
  },
  {
    image: "./assets/image/Luggage & bags.webp",
    discount: 66,
    name: "Luggage & bags",
  },
  {
    image: "./assets/image/Phones & accessories.webp",
    discount: 54,
    name: "Phones & accessories",
  },
  {
    image: "./assets/image/Tools & home improvement.webp",
    discount: 29,
    name: "Tools & home improvement",
  },
  {
    image: "./assets/image/Computer & office.webp",
    discount: 41,
    name: "Computer & office",
  },
  {
    image: "./assets/image/Underwear & exotic apparel.webp",
    discount: 22,
    name: "Underwear & exotic apparel",
  },
  {
    image: "./assets/image/Men's clothing & watches.webp",
    discount: 44,
    name: "Men's clothing & watches",
  },
];

const products = [
  // không có sale_off không có choice
  {
    image:
      "./assets/image/product/Luminous-Dragon-Rings-Gothic-Adjustable-Metal-Resin-Rings-Unique-Men-Women-Jewellery-Vintage-Halloween-Anillos-Accessorie.jpg_220x220xz.jpg_.webp",
    price: 22.09,
    first_sold: "3,000+ sold",
    next_sold: "4.4",
    discription:
      "Luminous Dragon Rings Gothic Adjustable Metal Resin Rings Unique Men Women Jewellery Vintage Halloween Anillos Accessorie Gifts",
  },
  // chỉ có sale_off
  {
    image:
      "./assets/image/product/Original-Pro6-TWS-Touch-Control-Wireless-Bluetooth-5-0-Headphones-Sport-Earbuds-Music-Headset-For-iphone.jpg_220x220xz.jpg_.webp",
    price: 70.968,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.3",
    discription:
      "Original Pro6 TWS Touch Control Wireless Bluetooth 5.0 Headphones Sport Earbuds Music Headset For iphone Xiaomi phones Earphones",
  },
  // chỉ có choice
  {
    image:
      "./assets/image/product/Luxury-Fashion-Mens-Watches-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 46.764,
    before_price: 146.637,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.0",
    discription:
      "Luxury Fashion Mens Watches Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  // có cả 2
  {
    image:
      "./assets/image/product/2023-New-Rings-For-Women-100-925-Sterling-Silver-Star-Moon-Colorful-Zircon-Rings-Fine-Wedding.jpg_220x220xz.jpg_.webp",
    price: 57.574,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "2,000+ sold",
    next_sold: "4.7",
    discription:
      "2023 New Rings For Women 100% 925 Sterling Silver Star Moon Colorful Zircon Rings Fine Wedding Engagement Birthday Jewelry Gifts",
  },

  {
    image:
      "https://ae01.alicdn.com/kf/Sf9633bfdb5ec4eeba9d1666dae729f7cA/TWS-Pro60-Fone-Bluetooth-5-0-Earphones-Wireless-Headphones-HiFi-Stero-Headset-Noise-Reduction-Sports-Earbuds.jpg_220x220xz.jpg_.webp",
    price: 98.463,
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Pro60 Fone Bluetooth 5.0 Earphones Wireless Headphones HiFi Stero Headset Noise Reduction Sports Earbuds with Mic for Phone",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S3a9f556948f1484f822a8fb53ea4b6aan/TWS-E6S-Bluetooth-Earphones-Wireless-bluetooth-headset-Noise-Cancelling-Headsets-With-Microphone-Headphones-For-Xiaomi-Redmi.jpg_220x220xz.jpg_.webp",
    price: 66.269,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    first_sold: "10,000+ sold",
    next_sold: "4.4",
    discription:
      "TWS E6S Bluetooth Earphones Wireless bluetooth headset Noise Cancelling Headsets With Microphone Headphones For Xiaomi Redmi",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S5dd07f6fcfcd409d98b24bcf2ea2a5bdT/Fashion-Mens-Watches-Luxury-Stainless-Steel-Quartz-Wristwatch-Calendar-Luminous-Clock-Men-Business-Casual-Watch-Reloj.jpg_220x220xz.jpg_.webp",
    after_price: 80.603,
    before_price: 247.215,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "100K+ sold",
    next_sold: "4.4",
    discription:
      "Fashion Mens Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch Reloj Hombre",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S7aa25fb0590b47f387fa10d8c34874e0o/Men-Watch-Sports-Quartz-Watches-Men-Waterproof-Chronograph-Wristwatch-Mens-Military-Clock-Man-Relogio-Masculino.jpg_220x220xz.jpg_.webp",
    after_price: 253.935,
    before_price: 761.853,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "5,000+ sold",
    next_sold: "4.6",
    discription:
      "Men Watch Sports Quartz Watches Men Waterproof Chronograph Wristwatch Mens Military Clock Man Relogio Masculino",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S0eb22b5e0e1c47a39fd0951fc9b82712j/TWS-Bluetooth-Earphones-3500mAh-Charging-Box-Wireless-Headphone-Fone-Stereo-Wireless-Headset-with-Mic-Sports-Waterproof.jpg_220x220xz.jpg_.webp",
    price: 46.764,
    first_sold: "5,000+ sold",
    next_sold: "4.5",
    discription:
      "TWS Bluetooth Earphones 3500mAh Charging Box Wireless Headphone Fone Stereo Wireless Headset with Mic Sports Waterproof Earbuds",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S388da9fc1f044ad39fae434edd8421d83/New-2023-Usb-3-0-Pendrive-2TB-High-Speed-Pen-Drive-16TB-Metal-Cle-Usb-Flash.jpg_220x220xz.jpg_.webp",
    after_price: 30.475,
    before_price: 50.77,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "700+ sold",
    next_sold: "4.4",
    discription:
      "New 2023 Usb 3.0 Pendrive 2TB High Speed Pen Drive 16TB Metal Cle Usb Flash Drive 4TB 8TB Portable SSD Memoria Usb Free Shipping",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S0c5659e1d52e465c9235c765491343efy/E7S-TWS-Wireless-Headphones-Bluetooth-earphone-Control-Sport-Headset-Waterproof-Microphone-Music-Earphone-Work-On-All.jpg_220x220xz.jpg_.webp",
    price: 68.853,
    sale_off: "₫ 93,998 off every ₫ 704,984",
    choice: "./assets/image/product/limited-deals.png",
    first_sold: "10,000+ sold",
    next_sold: "4.5",
    discription:
      "E7S TWS Wireless Headphones Bluetooth earphone Control Sport Headset Waterproof Microphone Music Earphone Work On All Smartphone",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/S443b3605f110411ab81e1edb0cc2b79e2/2023-USB-Electric-Lighters-Windproof-USB-Rechargeable-Touch-Windproof-Cigarette-Accessories-Electric-Lighter-Portable-e-ziggarte.jpg_220x220xz.jpg_.webp",
    after_price: 34.779,
    before_price: 74.023,
    choice: [
      "./assets/image/product/summer-sale.png",
      "./assets/image/product/top-selling.png",
    ],
    first_sold: "3000+ sold",
    next_sold: "4.7",
    discription:
      "2023 USB Electric Lighters Windproof USB Rechargeable Touch Windproof Cigarette Accessories Electric Lighter Portable e ziggarte",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/Sa8eaedc39d364a468a122eae8e66c516Q/Men-Military-Watch-Digital-50m-Waterproof-Wristwatch-LED-Quartz-Clock-Sport-Watch-Male-Big-Watches-Men.jpg_220x220xz.jpg_.webp",
    after_price: 159.091,
    before_price: 545.658,
    choice: [
      "./assets/image/product/190x64.webp",
      "./assets/image/product/super-deal.png",
    ],
    first_sold: "10,000+ sold",
    next_sold: "4.8",
    discription:
      "Men Military Watch Digital 50m Waterproof Wristwatch LED Quartz Clock Sport Watch Male Big Watches Men Relogios Masculino",
  },
];
export default { clothes, sale, products };
("./assets/image/product/summer-sale.png");
("./assets/image/product/top-selling.png");
