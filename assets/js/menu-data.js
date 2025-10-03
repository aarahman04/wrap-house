// Simple data store for menu items. Edit freely.
// Resolve asset paths for local and GitHub Pages deployments
const GH_PREFIX = location.hostname.endsWith('github.io')
  ? `/${location.pathname.split('/')[1]}/`   // e.g., "/wrap-house/"
  : '/';

const resolveAsset = (p) => {
  // p like "assets/images/burger.jpeg" or "/assets/images/burger.jpeg"
  const clean = String(p).replace(/^\/+/, ''); // strip leading slashes
  return `${GH_PREFIX}${clean}`;
};

export const MENU_ITEMS = [
  {
    id: 'i1',
    name: 'Bbq Chicken Burger',
    category: 'Burgers',
    price: '',
    desc: 'Bbq Chicken Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/bbq chicken burger.jpg'),
    keywords: 'Bbq Chicken Burger'
  },
  {
    id: 'i2',
    name: 'Blaze Burger',
    category: 'Burgers',
    price: '',
    desc: 'Blaze Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/blaze burger .jpg'),
    keywords: 'Blaze Burger'
  },
  {
    id: 'i3',
    name: 'Boss Burger',
    category: 'Burgers',
    price: '',
    desc: 'Boss Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Boss Burger.jpg'),
    keywords: 'Boss Burger'
  },
  {
    id: 'i4',
    name: 'Buff Tropical Burger',
    category: 'Burgers',
    price: '',
    desc: 'Buff Tropical Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/buff tropical burger .jpg'),
    keywords: 'Buff Tropical Burger'
  },
  {
    id: 'i5',
    name: 'Cheese Overloaded Burger',
    category: 'Burgers',
    price: '',
    desc: 'Cheese Overloaded Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Cheese Overloaded Burger.jpg'),
    keywords: 'Cheese Overloaded Burger'
  },
  {
    id: 'i6',
    name: 'Chicken Cheese Overloaded Burger',
    category: 'Burgers',
    price: '',
    desc: 'Chicken Cheese Overloaded Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/chicken cheese overloaded burger .jpg'),
    keywords: 'Chicken Cheese Overloaded Burger'
  },
  {
    id: 'i7',
    name: 'Chicken Double Trouble',
    category: 'Others',
    price: '',
    desc: 'Chicken Double Trouble special from our kitchen.',
    img: resolveAsset('assets/images/Chicken Double Trouble.jpg'),
    keywords: 'Chicken Double Trouble'
  },
  {
    id: 'i8',
    name: 'Classic Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Classic Beef Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Classic Beef Burger.jpg'),
    keywords: 'Classic Beef Burger'
  },
  {
    id: 'i9',
    name: 'Classic Buff Burger',
    category: 'Burgers',
    price: '',
    desc: 'Classic Buff Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/classic buff burger .jpg'),
    keywords: 'Classic Buff Burger'
  },
  {
    id: 'i10',
    name: 'Double Trouble Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Beef Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Double Trouble Beef Burger.jpg'),
    keywords: 'Double Trouble Beef Burger'
  },
  {
    id: 'i11',
    name: 'Double Trouble Buff Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Buff Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/double trouble buff burger.jpg'),
    keywords: 'Double Trouble Buff Burger'
  },
  {
    id: 'i12',
    name: 'Double Trouble Chicken Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Chicken Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Double trouble chicken burger .jpg'),
    keywords: 'Double Trouble Chicken Burger'
  },
  {
    id: 'i13',
    name: 'Grilled Chicken Burger',
    category: 'Burgers',
    price: '',
    desc: 'Grilled Chicken Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Grilled Chicken Burger.jpg'),
    keywords: 'Grilled Chicken Burger'
  },
  {
    id: 'i14',
    name: 'Koma Burger',
    category: 'Burgers',
    price: '',
    desc: 'Koma Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/koma burger.jpg'),
    keywords: 'Koma Burger'
  },
  {
    id: 'i15',
    name: 'Smoke Bbq Burger',
    category: 'Burgers',
    price: '',
    desc: 'Smoke Bbq Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Smoke BBQ Burger.jpg'),
    keywords: 'Smoke Bbq Burger'
  },
  {
    id: 'i16',
    name: 'Spice Maxx Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Spice Maxx Beef Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Spice Maxx Beef Burger.jpg'),
    keywords: 'Spice Maxx Beef Burger'
  },
  {
    id: 'i17',
    name: 'Sunrise Burger Chicken',
    category: 'Burgers',
    price: '',
    desc: 'Sunrise Burger Chicken — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Sunrise Burger Chicken.jpg'),
    keywords: 'Sunrise Burger Chicken'
  },
  {
    id: 'i18',
    name: 'Zinger Burger',
    category: 'Burgers',
    price: '',
    desc: 'Zinger Burger — Juicy patty with fresh toppings.',
    img: resolveAsset('assets/images/Zinger Burger.jpg'),
    keywords: 'Zinger Burger'
  },
  {
    id: 'i19',
    name: 'Beef Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: resolveAsset('assets/images/Beef Cheesy Fries.jpg'),
    keywords: 'Beef Cheesy Fries'
  },
  {
    id: 'i20',
    name: 'Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: resolveAsset('assets/images/Cheesy Fries.jpg'),
    keywords: 'Cheesy Fries'
  },
  {
    id: 'i21',
    name: 'Chicken Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: resolveAsset('assets/images/Chicken Cheesy Fries.jpg'),
    keywords: 'Chicken Cheesy Fries'
  },
  {
    id: 'i22',
    name: 'French Fried',
    category: 'Others',
    price: '',
    desc: 'French Fried special from our kitchen.',
    img: resolveAsset('assets/images/French Fried.jpg'),
    keywords: 'French Fried'
  },
  {
    id: 'i23',
    name: 'Peri Peri Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: resolveAsset('assets/images/peri peri fries.jpg'),
    keywords: 'Peri Peri Fries'
  },
  {
    id: 'i24',
    name: 'Alfredo Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Alfredo Chicken Pasta pasta with creamy sauce.',
    img: resolveAsset('assets/images/Alfredo Chicken Pasta.jpg'),
    keywords: 'Alfredo Chicken Pasta'
  },
  {
    id: 'i25',
    name: 'Arabiata Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Arabiata Chicken Pasta pasta with creamy sauce.',
    img: resolveAsset('assets/images/Arabiata Chicken Pasta.jpg'),
    keywords: 'Arabiata Chicken Pasta'
  },
  {
    id: 'i26',
    name: 'Mac N Cheese Chicken',
    category: 'Others',
    price: '',
    desc: 'Mac N Cheese Chicken special from our kitchen.',
    img: resolveAsset('assets/images/Mac N Cheese Chicken.jpg'),
    keywords: 'Mac N Cheese Chicken'
  },
  {
    id: 'i27',
    name: 'Peri Peri Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Peri Peri Chicken Pasta pasta with creamy sauce.',
    img: resolveAsset('assets/images/Peri Peri Chicken Pasta.jpg'),
    keywords: 'Peri Peri Chicken Pasta'
  },
  {
    id: 'i28',
    name: 'Wrap House Special Pasta Chicken',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Wrap House Special Pasta Chicken pasta with creamy sauce.',
    img: resolveAsset('assets/images/Wrap House Special Pasta Chicken.jpg'),
    keywords: 'Wrap House Special Pasta Chicken'
  },
  {
    id: 'i29',
    name: 'Bbq Chicken With Herb Rice',
    category: 'Rice',
    price: '',
    desc: 'Flavorful Bbq Chicken With Herb Rice served with spiced rice.',
    img: resolveAsset('assets/images/BBQ Chicken with Herb Rice.jpg'),
    keywords: 'Bbq Chicken With Herb Rice'
  },
  {
    id: 'i30',
    name: 'Saucy Peri Peri Chicken With Herb Rice',
    category: 'Rice',
    price: '',
    desc: 'Flavorful Saucy Peri Peri Chicken With Herb Rice served with spiced rice.',
    img: resolveAsset('assets/images/Saucy Peri Peri Chicken with Herb Rice.jpg'),
    keywords: 'Saucy Peri Peri Chicken With Herb Rice'
  },
  {
    id: 'i31',
    name: 'Bbq Beef Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Bbq Beef Salad with dressing.',
    img: resolveAsset('assets/images/BBQ Beef Salad.jpg'),
    keywords: 'Bbq Beef Salad'
  },
  {
    id: 'i32',
    name: 'Grill Chicken Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Grill Chicken Salad with dressing.',
    img: resolveAsset('assets/images/grill chicken salad.jpg'),
    keywords: 'Grill Chicken Salad'
  },
  {
    id: 'i33',
    name: 'Veg Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Veg Salad with dressing.',
    img: resolveAsset('assets/images/Veg Salad.jpg'),
    keywords: 'Veg Salad'
  },
  {
    id: 'i34',
    name: 'Club Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Club Sandwich — Layered with sauces and fillings.',
    img: resolveAsset('assets/images/club sandwich .jpg'),
    keywords: 'Club Sandwich'
  },
  {
    id: 'i35',
    name: 'Grill Chicken Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Grill Chicken Sandwich — Layered with sauces and fillings.',
    img: resolveAsset('assets/images/Grill Chicken Sandwich.jpg'),
    keywords: 'Grill Chicken Sandwich'
  },
  {
    id: 'i36',
    name: 'Non Veg Club Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Non Veg Club Sandwich — Layered with sauces and fillings.',
    img: resolveAsset('assets/images/Non Veg Club Sandwich.jpg'),
    keywords: 'Non Veg Club Sandwich'
  },
  {
    id: 'i37',
    name: 'Garlic Sauce',
    category: 'Sauces',
    price: '',
    desc: 'Signature Garlic Sauce, perfect with meals.',
    img: resolveAsset('assets/images/Garlic Sauce.jpg'),
    keywords: 'Garlic Sauce'
  },
  {
    id: 'i38',
    name: 'Bbq Wings',
    category: 'Wings',
    price: '',
    desc: 'Spicy and crispy Bbq Wings, finger-licking good.',
    img: resolveAsset('assets/images/BBQ Wings.jpg'),
    keywords: 'Bbq Wings'
  },
  {
    id: 'i39',
    name: 'Broasted Chicken',
    category: 'Platters',
    price: '',
    desc: 'Broasted Chicken platter with sides and dip.',
    img: resolveAsset('assets/images/Broasted Chicken.png'),
    keywords: 'Broasted Chicken'
  },
  {
    id: 'i40',
    name: 'Peri Peri Wings',
    category: 'Wings',
    price: '',
    desc: 'Spicy and crispy Peri Peri Wings, finger-licking good.',
    img: resolveAsset('assets/images/Peri Peri Wings.jpg'),
    keywords: 'Peri Peri Wings'
  },
  {
    id: 'i41',
    name: 'Zinger Fingers',
    category: 'Others',
    price: '',
    desc: 'Zinger Fingers special from our kitchen.',
    img: resolveAsset('assets/images/Zinger Fingers.jpg'),
    keywords: 'Zinger Fingers'
  },
  {
    id: 'i42',
    name: 'Bbq Beef Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Beef Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/BBQ Beef Wrap.jpg'),
    keywords: 'Bbq Beef Wrap'
  },
  {
    id: 'i43',
    name: 'Bbq Chicken Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Chicken Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/bbq chicken wrap.jpg'),
    keywords: 'Bbq Chicken Wrap'
  },
  {
    id: 'i44',
    name: 'Bbq Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Paneer Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/bbq paneer wrap.jpg'),
    keywords: 'Bbq Paneer Wrap'
  },
  {
    id: 'i45',
    name: 'Chatpata Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Chatpata Paneer Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Chatpata Paneer Wrap.jpg'),
    keywords: 'Chatpata Paneer Wrap'
  },
  {
    id: 'i46',
    name: 'Chicken Cheesy Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Chicken Cheesy Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/chicken cheesy wrap.jpg'),
    keywords: 'Chicken Cheesy Wrap'
  },
  {
    id: 'i47',
    name: 'Grill Chicken Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Grill Chicken Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Grill Chicken Wrap.jpg'),
    keywords: 'Grill Chicken Wrap'
  },
  {
    id: 'i48',
    name: 'Mexican Buff Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Mexican Buff Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Mexican buff wrap.jpg'),
    keywords: 'Mexican Buff Wrap'
  },
  {
    id: 'i49',
    name: 'Mexican Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Mexican Paneer Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Mexican paneer wrap.jpg'),
    keywords: 'Mexican Paneer Wrap'
  },
  {
    id: 'i50',
    name: 'Sunrise Buff Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Sunrise Buff Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/sunrise buff wrap.jpg'),
    keywords: 'Sunrise Buff Wrap'
  },
  {
    id: 'i51',
    name: 'Sunrise Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Sunrise Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Sunrise Wrap.jpg'),
    keywords: 'Sunrise Wrap'
  },
  {
    id: 'i52',
    name: 'Zinger Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Zinger Paneer Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Zinger Paneer Wrap.jpg'),
    keywords: 'Zinger Paneer Wrap'
  },
  {
    id: 'i53',
    name: 'Zinger Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Zinger Wrap wrap stuffed with tasty fillings.',
    img: resolveAsset('assets/images/Zinger Wrap.jpg'),
    keywords: 'Zinger Wrap'
  }
];

export const CATEGORIES = ['All', 'Burgers', 'Others', 'Fries', 'Pasta', 'Rice', 'Salads', 'Sandwiches', 'Sauces', 'Wings', 'Platters', 'Wraps'];
