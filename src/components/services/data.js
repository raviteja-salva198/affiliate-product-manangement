// Dummy Products
export const dummyProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "High-quality noise-cancelling headphones",
    price: 199,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363",
    commissionRates: {
      Affiliate: 10,
      Retailer: 15,
      Wholesaler: 20,
      Distributor: 25,
    },
  },
  {
    id: 2,
    name: "Smartphone X",
    description: "Latest model smartphone with advanced features",
    price: 799,
    image:
      "https://c.media-amazon.com/images/I/41p0PLiCyeL._SX300_SY300_QL70_FMwebp_.jpg",
    commissionRates: {
      Affiliate: 5,
      Retailer: 8,
      Wholesaler: 12,
      Distributor: 15,
    },
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description: "Water-resistant fitness tracker with heart rate monitor",
    price: 79,
    image:
      "https://c.media-amazon.com/images/I/41IJiQ0lfBL._SX300_SY300_QL70_FMwebp_.jpg",
    commissionRates: {
      Affiliate: 15,
      Retailer: 20,
      Wholesaler: 25,
      Distributor: 30,
    },
  },
  {
    id: 4,
    name: "Laptop Pro",
    description: "Powerful laptop for professionals",
    price: 1299,
    image:
      "https://c.media-amazon.com/images/I/41l62Htp4XL._SX300_SY300_QL70_FMwebp_.jpg",
    commissionRates: {
      Affiliate: 8,
      Retailer: 12,
      Wholesaler: 18,
      Distributor: 22,
    },
  },
  {
    id: 5,
    name: "Smart Home Hub",
    description: "Central control for your smart home devices",
    price: 129,
    image: "https://c.media-amazon.com/images/I/61tMoVGYglL._SL1500_.jpg",
    commissionRates: {
      Affiliate: 12,
      Retailer: 18,
      Wholesaler: 24,
      Distributor: 28,
    },
  },
];

// You might also want to add this for default commission rates:
export const dummyCommissionRates = {
  Affiliate: 10,
  Retailer: 15,
  Wholesaler: 20,
  Distributor: 25,
};

// Dummy Announcements
export const dummyAnnouncements = [
  {
    id: 1,
    title: "New Product Launch",
    content: "Exciting new smartphone model available for promotion!",
    targetGroup: "all",
    date: "2024-08-15",
  },
  {
    id: 2,
    title: "Commission Rate Increase",
    content: "We've increased commission rates for all student affiliates!",
    targetGroup: "students",
    date: "2024-08-20",
  },
  {
    id: 3,
    title: "Holiday Season Promotions",
    content: "Get ready for our biggest holiday season deals!",
    targetGroup: "all",
    date: "2024-09-01",
  },
  {
    id: 4,
    title: "Exclusive Webinar for Professionals",
    content:
      "Join our webinar on advanced marketing strategies for professionals.",
    targetGroup: "professionals",
    date: "2024-09-10",
  },
  {
    id: 5,
    title: "New Affiliate Tools Available",
    content: "Check out our new suite of marketing tools in your dashboard!",
    targetGroup: "marketingAgents",
    date: "2024-09-15",
  },
];


export const dummyUsers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];