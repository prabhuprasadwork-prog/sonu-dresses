// All shop details live here. Edit this file to update the whole site.

const whatsappNumber = "917077993737"

/** WhatsApp link with a ready-typed message. */
export function whatsappFor(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

// Links in the header menu and footer.
export const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#wholesale", label: "Wholesale" },
  { href: "#why-us", label: "Why us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export const site = {
  name: "Sonu Dresses",
  tagline: "Readymade garments, retail and wholesale",
  established: 2000,
  // Shown as "25+ years" across the site. Update when you want a bigger number.
  yearsInBusiness: 25,
  owner: "Rudra Prasad Sahu",
  ownerNickname: "Aman",
  phoneDisplay: "70779 93737",
  phoneLink: "tel:+917077993737",
  email: "info@sonudresses.com",
  whatsappLink: whatsappFor("Hello Sonu Dresses, I would like to know about your garments."),
  wholesaleWhatsappLink: whatsappFor(
    "Hello Sonu Dresses, I want to place a bulk order. Please share pricing, MOQ and delivery details."
  ),

  // Leave empty ("") to hide.
  address: "Dengause Main Road, Singipur, Berhampur, Odisha 761014",
  mapLink:
    "https://www.google.com/maps/place/SONU+DRESSES/@19.4162655,84.4992081,983m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3d33bfd769eba1:0x4521611f41bb67e0!8m2!3d19.4162655!4d84.501783!16s%2Fg%2F11fzp2mr77",
  // Shop location, used for the embedded map. Leave empty ("") to hide the map.
  mapEmbed: "https://www.google.com/maps?q=19.4162655,84.501783&z=16&output=embed",
  hours: "Open until 9:30 pm",
  instagram: "",
  facebook: "",

  logo: "/images/logo.jpg",
  // Shop front, shown in the "Visit the shop" section (switches between day and night).
  shopFront: { day: "/images/shop-day.jpg", night: "/images/shop-night.jpg" },

  // Replace with your own shop photos: put files in /public/images and use "/images/your-file.jpg".
  heroImages: [
    "/images/shop-night.jpg",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=900&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=900&q=80",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&q=80",
  ],

  // Cities the stock is sourced from.
  sourcing: ["Kolkata", "Mumbai", "Delhi", "Raipur", "Tiruppur"],

  // Big numbers. `value` counts up when scrolled into view; use `text` for words.
  stats: [
    { value: 25, suffix: "+", label: "Years of trust" },
    { value: 10000, suffix: "+", label: "Happy customers" },
    { value: 500, suffix: "+", label: "Product styles" },
    { text: "Pan India", label: "Wholesale reach" },
  ],

  // Words that scroll past in the ribbon under the hero.
  ticker: [
    "Men’s Wear",
    "Women’s Wear",
    "Boys’ Wear",
    "Girls’ Wear",
    "25+ Years of Trust",
    "Pan India Wholesale",
    "Premium Quality Assured",
    "Shirts & Tops",
    "Jeans & Trousers",
    "Kurtis & Dresses",
    "Nightwear & Innerwear",
    "Seasonal Fashion",
  ],

  categories: [
    { name: "Men’s Wear", letter: "M", items: "Shirts, jeans, T-shirts, trousers, jackets and more" },
    { name: "Women’s Wear", letter: "W", items: "Kurtis, dresses, tops, leggings, nightwear and more" },
    { name: "Boys’ Wear", letter: "B", items: "T-shirts, jeans, shorts, tracksuits" },
    { name: "Girls’ Wear", letter: "G", items: "Frocks, dresses, tops, leggings" },
  ],

  wholesale: {
    stats: [
      { value: 50, suffix: "+", label: "Min. bulk pieces" },
      { value: 500, suffix: "+", label: "Styles in stock" },
      { value: 24, suffix: "h", label: "Quote turnaround" },
    ],
    points: [
      "Flexible MOQ with the best bulk pricing",
      "Pan-India delivery to your doorstep",
      "Quality-checked before every dispatch",
    ],
  },

  features: [
    {
      icon: "award",
      title: "25+ years of craft",
      text: "In the garment business since 2000, building trust with every customer and every stitch.",
    },
    {
      icon: "store",
      title: "Retail and wholesale",
      text: "Need a single piece or a truckload? We serve walk-in shoppers and bulk buyers alike.",
    },
    {
      icon: "shield",
      title: "Quality assured",
      text: "Every product is carefully sourced and quality-checked before it reaches your hands.",
    },
    {
      icon: "heart",
      title: "Customer first",
      text: "Your satisfaction is the priority. We go the extra mile so every customer leaves happy.",
    },
    {
      icon: "sparkles",
      title: "Latest trends",
      text: "Our collection stays fresh with the newest fashion, without inflating the price.",
    },
    {
      icon: "users",
      title: "For the whole family",
      text: "Men’s, women’s, boys’ and girls’ wear, all under one trusted roof.",
    },
  ],

  // Customer reviews from Google Maps. Add or remove as you like.
  reviews: [
    { name: "Santosh", text: "Well mannered and best price ♥️", when: "a year ago" },
    { name: "Bishnu Nayak", text: "Good collection", when: "8 years ago" },
    { name: "Birendra Pradhan", text: "Not branded, but marginal price", when: "5 years ago" },
    { name: "Urbashee Sahu", text: "Super", when: "5 years ago" },
  ],

  faqs: [
    {
      q: "Do you offer wholesale pricing?",
      a: "Yes. We offer competitive wholesale pricing for bulk orders. Minimum order quantity varies by product. Call or WhatsApp us for bulk pricing details.",
    },
    {
      q: "What product categories do you have?",
      a: "We specialise in ready-made garments across 4 categories: men’s, women’s, boys’ and girls’ wear. We stock T-shirts, shirts, jeans, trousers, kurtis, leggings, dresses, nightwear, innerwear and seasonal fashion.",
    },
    {
      q: "How can I place a bulk or wholesale order?",
      a: "Call us, message us on WhatsApp, or visit our store on Dengause Main Road, Singipur, Berhampur. We’ll share pricing, availability and delivery details promptly.",
    },
    {
      q: "Do you deliver to other cities?",
      a: "Yes. We deliver across India for wholesale orders, and retail customers can also get home delivery. Contact us for delivery charges and timelines for your location.",
    },
    {
      q: "What is your return or exchange policy?",
      a: "We accept exchanges for manufacturing defects within 7 days of purchase with the original bill. Items must be unused and in original condition. Contact us for help with a return.",
    },
    {
      q: "How long has Sonu Dresses been in business?",
      a: "Over 25 years. We started as a small retail store and have grown into a trusted name for both retail and wholesale garments.",
    },
  ],
}
