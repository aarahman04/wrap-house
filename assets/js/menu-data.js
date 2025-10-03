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
    img: 'assets/images/bbq%20chicken%20burger.jpg',
    keywords: 'Bbq Chicken Burger'
  },
  {
    id: 'i2',
    name: 'Blaze Burger',
    category: 'Burgers',
    price: '',
    desc: 'Blaze Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/blaze%20burger.jpg',
    keywords: 'Blaze Burger'
  },
  {
    id: 'i3',
    name: 'Boss Burger',
    category: 'Burgers',
    price: '',
    desc: 'Boss Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Boss%20Burger.jpg',
    keywords: 'Boss Burger'
  },
  {
    id: 'i4',
    name: 'Buff Tropical Burger',
    category: 'Burgers',
    price: '',
    desc: 'Buff Tropical Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/buff%20tropical%20burger.jpg',
    keywords: 'Buff Tropical Burger'
  },
  {
    id: 'i5',
    name: 'Cheese Overloaded Burger',
    category: 'Burgers',
    price: '',
    desc: 'Cheese Overloaded Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Cheese%20Overloaded%20Burger.jpg',
    keywords: 'Cheese Overloaded Burger'
  },
  {
    id: 'i6',
    name: 'Chicken Cheese Overloaded Burger',
    category: 'Burgers',
    price: '',
    desc: 'Chicken Cheese Overloaded Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/chicken%20cheese%20overloaded%20burger.jpg',
    keywords: 'Chicken Cheese Overloaded Burger'
  },
  {
    id: 'i7',
    name: 'Chicken Double Trouble',
    category: 'Others',
    price: '',
    desc: 'Chicken Double Trouble special from our kitchen.',
    img: 'assets/images/Chicken%20Double%20Trouble.jpg',
    keywords: 'Chicken Double Trouble'
  },
  {
    id: 'i8',
    name: 'Classic Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Classic Beef Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Classic%20Beef%20Burger.jpg',
    keywords: 'Classic Beef Burger'
  },
  {
    id: 'i9',
    name: 'Classic Buff Burger',
    category: 'Burgers',
    price: '',
    desc: 'Classic Buff Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/classic%20buff%20burger.jpg',
    keywords: 'Classic Buff Burger'
  },
  {
    id: 'i10',
    name: 'Double Trouble Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Beef Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Double%20Trouble%20Beef%20Burger.jpg',
    keywords: 'Double Trouble Beef Burger'
  },
  {
    id: 'i11',
    name: 'Double Trouble Buff Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Buff Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/double%20trouble%20buff%20burger.jpg',
    keywords: 'Double Trouble Buff Burger'
  },
  {
    id: 'i12',
    name: 'Double Trouble Chicken Burger',
    category: 'Burgers',
    price: '',
    desc: 'Double Trouble Chicken Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Double%20trouble%20chicken%20burger.jpg',
    keywords: 'Double Trouble Chicken Burger'
  },
  {
    id: 'i13',
    name: 'Grilled Chicken Burger',
    category: 'Burgers',
    price: '',
    desc: 'Grilled Chicken Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Grilled%20Chicken%20Burger.jpg',
    keywords: 'Grilled Chicken Burger'
  },
  {
    id: 'i14',
    name: 'Koma Burger',
    category: 'Burgers',
    price: '',
    desc: 'Koma Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/koma%20burger.jpg',
    keywords: 'Koma Burger'
  },
  {
    id: 'i15',
    name: 'Smoke Bbq Burger',
    category: 'Burgers',
    price: '',
    desc: 'Smoke Bbq Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Smoke%20BBQ%20Burger.jpg',
    keywords: 'Smoke Bbq Burger'
  },
  {
    id: 'i16',
    name: 'Spice Maxx Beef Burger',
    category: 'Burgers',
    price: '',
    desc: 'Spice Maxx Beef Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Spice%20Maxx%20Beef%20Burger.jpg',
    keywords: 'Spice Maxx Beef Burger'
  },
  {
    id: 'i17',
    name: 'Sunrise Burger Chicken',
    category: 'Burgers',
    price: '',
    desc: 'Sunrise Burger Chicken — Juicy patty with fresh toppings.',
    img: 'assets/images/Sunrise%20Burger%20Chicken.jpg',
    keywords: 'Sunrise Burger Chicken'
  },
  {
    id: 'i18',
    name: 'Zinger Burger',
    category: 'Burgers',
    price: '',
    desc: 'Zinger Burger — Juicy patty with fresh toppings.',
    img: 'assets/images/Zinger%20Burger.jpg',
    keywords: 'Zinger Burger'
  },
  {
    id: 'i19',
    name: 'Beef Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: 'assets/images/Beef%20Cheesy%20Fries.jpg',
    keywords: 'Beef Cheesy Fries'
  },
  {
    id: 'i20',
    name: 'Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: 'assets/images/Cheesy%20Fries.jpg',
    keywords: 'Cheesy Fries'
  },
  {
    id: 'i21',
    name: 'Chicken Cheesy Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: 'assets/images/Chicken%20Cheesy%20Fries.jpg',
    keywords: 'Chicken Cheesy Fries'
  },
  {
    id: 'i22',
    name: 'French Fried',
    category: 'Others',
    price: '',
    desc: 'French Fried special from our kitchen.',
    img: 'assets/images/French%20Fried.jpg',
    keywords: 'French Fried'
  },
  {
    id: 'i23',
    name: 'Peri Peri Fries',
    category: 'Fries',
    price: '',
    desc: 'Crispy golden fries served hot and fresh.',
    img: 'assets/images/peri%20peri%20fries.jpg',
    keywords: 'Peri Peri Fries'
  },
  {
    id: 'i24',
    name: 'Alfredo Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Alfredo Chicken Pasta pasta with creamy sauce.',
    img: 'assets/images/Alfredo%20Chicken%20Pasta.jpg',
    keywords: 'Alfredo Chicken Pasta'
  },
  {
    id: 'i25',
    name: 'Arabiata Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Arabiata Chicken Pasta pasta with creamy sauce.',
    img: 'assets/images/Arabiata%20Chicken%20Pasta.jpg',
    keywords: 'Arabiata Chicken Pasta'
  },
  {
    id: 'i26',
    name: 'Mac N Cheese Chicken',
    category: 'Others',
    price: '',
    desc: 'Mac N Cheese Chicken special from our kitchen.',
    img: 'assets/images/Mac%20N%20Cheese%20Chicken.jpg',
    keywords: 'Mac N Cheese Chicken'
  },
  {
    id: 'i27',
    name: 'Peri Peri Chicken Pasta',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Peri Peri Chicken Pasta pasta with creamy sauce.',
    img: 'assets/images/Peri%20Peri%20Chicken%20Pasta.jpg',
    keywords: 'Peri Peri Chicken Pasta'
  },
  {
    id: 'i28',
    name: 'Wrap House Special Pasta Chicken',
    category: 'Pasta',
    price: '',
    desc: 'Delicious Wrap House Special Pasta Chicken pasta with creamy sauce.',
    img: 'assets/images/Wrap%20House%20Special%20Pasta%20Chicken.jpg',
    keywords: 'Wrap House Special Pasta Chicken'
  },
  {
    id: 'i29',
    name: 'Bbq Chicken With Herb Rice',
    category: 'Rice',
    price: '',
    desc: 'Flavorful Bbq Chicken With Herb Rice served with spiced rice.',
    img: 'assets/images/BBQ%20Chicken%20with%20Herb%20Rice.jpg',
    keywords: 'Bbq Chicken With Herb Rice'
  },
  {
    id: 'i30',
    name: 'Saucy Peri Peri Chicken With Herb Rice',
    category: 'Rice',
    price: '',
    desc: 'Flavorful Saucy Peri Peri Chicken With Herb Rice served with spiced rice.',
    img: 'assets/images/Saucy%20Peri%20Peri%20Chicken%20with%20Herb%20Rice.jpg',
    keywords: 'Saucy Peri Peri Chicken With Herb Rice'
  },
  {
    id: 'i31',
    name: 'Bbq Beef Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Bbq Beef Salad with dressing.',
    img: 'assets/images/BBQ%20Beef%20Salad.jpg',
    keywords: 'Bbq Beef Salad'
  },
  {
    id: 'i32',
    name: 'Grill Chicken Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Grill Chicken Salad with dressing.',
    img: 'assets/images/grill%20chicken%20salad.jpg',
    keywords: 'Grill Chicken Salad'
  },
  {
    id: 'i33',
    name: 'Veg Salad',
    category: 'Salads',
    price: '',
    desc: 'Fresh and healthy Veg Salad with dressing.',
    img: 'assets/images/Veg%20Salad.jpg',
    keywords: 'Veg Salad'
  },
  {
    id: 'i34',
    name: 'Club Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Club Sandwich — Layered with sauces and fillings.',
    img: 'assets/images/club%20sandwich.jpg',
    keywords: 'Club Sandwich'
  },
  {
    id: 'i35',
    name: 'Grill Chicken Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Grill Chicken Sandwich — Layered with sauces and fillings.',
    img: 'assets/images/Grill%20Chicken%20Sandwich.jpg',
    keywords: 'Grill Chicken Sandwich'
  },
  {
    id: 'i36',
    name: 'Non Veg Club Sandwich',
    category: 'Sandwiches',
    price: '',
    desc: 'Non Veg Club Sandwich — Layered with sauces and fillings.',
    img: 'assets/images/Non%20Veg%20Club%20Sandwich.jpg',
    keywords: 'Non Veg Club Sandwich'
  },
  {
    id: 'i37',
    name: 'Garlic Sauce',
    category: 'Sauces',
    price: '',
    desc: 'Signature Garlic Sauce, perfect with meals.',
    img: 'assets/images/Garlic%20Sauce.jpg',
    keywords: 'Garlic Sauce'
  },
  {
    id: 'i38',
    name: 'Bbq Wings',
    category: 'Wings',
    price: '',
    desc: 'Spicy and crispy Bbq Wings, finger-licking good.',
    img: 'assets/images/BBQ%20Wings.jpg',
    keywords: 'Bbq Wings'
  },
  {
    id: 'i39',
    name: 'Broasted Chicken',
    category: 'Platters',
    price: '',
    desc: 'Broasted Chicken platter with sides and dip.',
    img: 'assets/images/Broasted%20Chicken.png',
    keywords: 'Broasted Chicken'
  },
  {
    id: 'i40',
    name: 'Peri Peri Wings',
    category: 'Wings',
    price: '',
    desc: 'Spicy and crispy Peri Peri Wings, finger-licking good.',
    img: 'assets/images/Peri%20Peri%20Wings.jpg',
    keywords: 'Peri Peri Wings'
  },
  {
    id: 'i41',
    name: 'Zinger Fingers',
    category: 'Others',
    price: '',
    desc: 'Zinger Fingers special from our kitchen.',
    img: 'assets/images/Zinger%20Fingers.jpg',
    keywords: 'Zinger Fingers'
  },
  {
    id: 'i42',
    name: 'Bbq Beef Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Beef Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/BBQ%20Beef%20Wrap.jpg',
    keywords: 'Bbq Beef Wrap'
  },
  {
    id: 'i43',
    name: 'Bbq Chicken Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Chicken Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/bbq%20chicken%20wrap.jpg',
    keywords: 'Bbq Chicken Wrap'
  },
  {
    id: 'i44',
    name: 'Bbq Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Bbq Paneer Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/bbq%20paneer%20wrap.jpg',
    keywords: 'Bbq Paneer Wrap'
  },
  {
    id: 'i45',
    name: 'Chatpata Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Chatpata Paneer Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Chatpata%20Paneer%20Wrap.jpg',
    keywords: 'Chatpata Paneer Wrap'
  },
  {
    id: 'i46',
    name: 'Chicken Cheesy Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Chicken Cheesy Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/chicken%20cheesy%20wrap.jpg',
    keywords: 'Chicken Cheesy Wrap'
  },
  {
    id: 'i47',
    name: 'Grill Chicken Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Grill Chicken Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Grill%20Chicken%20Wrap.jpg',
    keywords: 'Grill Chicken Wrap'
  },
  {
    id: 'i48',
    name: 'Mexican Buff Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Mexican Buff Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Mexican%20buff%20wrap.jpg',
    keywords: 'Mexican Buff Wrap'
  },
  {
    id: 'i49',
    name: 'Mexican Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Mexican Paneer Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Mexican%20paneer%20wrap.jpg',
    keywords: 'Mexican Paneer Wrap'
  },
  {
    id: 'i50',
    name: 'Sunrise Buff Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Sunrise Buff Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/sunrise%20buff%20wrap.jpg',
    keywords: 'Sunrise Buff Wrap'
  },
  {
    id: 'i51',
    name: 'Sunrise Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Sunrise Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Sunrise%20Wrap.jpg',
    keywords: 'Sunrise Wrap'
  },
  {
    id: 'i52',
    name: 'Zinger Paneer Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Zinger Paneer Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Zinger%20Paneer%20Wrap.jpg',
    keywords: 'Zinger Paneer Wrap'
  },
  {
    id: 'i53',
    name: 'Zinger Wrap',
    category: 'Wraps',
    price: '',
    desc: 'Zinger Wrap wrap stuffed with tasty fillings.',
    img: 'assets/images/Zinger%20Wrap.jpg',
    keywords: 'Zinger Wrap'
  }
];

export const CATEGORIES = ['All', 'Burgers', 'Others', 'Fries', 'Pasta', 'Rice', 'Salads', 'Sandwiches', 'Sauces', 'Wings', 'Platters', 'Wraps'];
