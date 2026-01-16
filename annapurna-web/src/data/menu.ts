// Authentic images extracted from source
const heroThali = "https://static.wixstatic.com/media/6cbac1_d6b62cc3e541430eb0c8f2b7b7f9128f~mv2.jpeg";
const specialDish = "https://static.wixstatic.com/media/6cbac1_5dc0bf8cae5a46aaa993c91cfea81580~mv2.jpeg";

export const categoryImages: Record<string, string> = {
    "Deals": specialDish,
    "Snacks": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    "Chaat": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    "Street Food": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    "Soup & Salad": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    "Sides": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    "Indo-Chinese": "https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&q=80&w=800",
    "Special Thali": heroThali,
    "Combo Meals": specialDish,
    "Punjabi Curries": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=800",
    "South Indian": "https://images.unsplash.com/photo-1589301760014-d92964563638?auto=format&fit=crop&q=80&w=800",
    "Gujarati Curries": "https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&q=80&w=800",
    "Breads": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    "Rice": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    "Khichdi": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800",
    "Desserts": "https://images.unsplash.com/photo-1593701478530-d4586c13eb2a?auto=format&fit=crop&q=80&w=800",
    "Beverages": "https://images.unsplash.com/photo-1543362143-690a9fc63841?auto=format&fit=crop&q=80&w=800",
    "Ice Cream": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800",
    "Catering Snacks": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    "Catering Rice": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800"
};

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: string;
    mainMenu: "Annapurna Menu" | "Our Catering Menu" | "My new menu";
    image: string;
    isVegan?: boolean;
    isGlutenFree?: boolean;
    isSpicy?: boolean;
}

export const mainMenus = [
    "Annapurna Menu",
    "Our Catering Menu",
    "My new menu"
];

// Map sub-categories to Main Menus
export const subMenus: Record<string, string[]> = {
    "Annapurna Menu": [
        "Deals", "Snacks", "Chaat", "Street Food", "Soup & Salad", "Sides",
        "Indo-Chinese", "Special Thali", "Combo Meals", "Punjabi Curries",
        "South Indian", "Gujarati Curries", "Breads", "Rice", "Khichdi",
        "Desserts", "Beverages", "Ice Cream"
    ],
    "Our Catering Menu": ["Catering Snacks", "Catering Rice"],
    "My new menu": []
};

// Flattened list for component usage, though component logic might change to use hierarchy
export const menuCategories = subMenus["Annapurna Menu"];

export const menuItems: MenuItem[] = [
    // DINE-IN DEALS
    {
        id: 'deal-1',
        name: 'Combo 2 (Deal)',
        description: 'One Paneer Tikka or Malai Kofta or Navratna Korma, One Naan, and Plain Rice.',
        price: '$17.99',
        category: 'Deals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Deals']
    },
    {
        id: 'deal-2',
        name: 'Dosa Deals (Tue-Thu 2-6PM)',
        description: 'Buy One Get One FREE DOSA (Dine-In only). Choices: Plain, Ghee, Masala, Spicy, Mysore Masala.',
        price: '$12.99',
        category: 'Deals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Deals']
    },
    {
        id: 'deal-3',
        name: 'Punjabi/Gujarati Thali Takeout',
        description: 'Tue, Wed, Thu ONLY TAKE OUT.',
        price: '$17.99',
        category: 'Deals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Deals']
    },
    {
        id: 'deal-4',
        name: 'Mini Punjabi Thali',
        description: 'Unlimited Punjabi Thali: P.T. Masala, Dal Tadka, Butter Naan, Gulab Jamun, Papadum, Pickles, Raita.',
        price: '$12.99',
        category: 'Deals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Deals']
    },

    // Snacks
    {
        id: 'snacks-1',
        name: 'Samosa (2 Pcs)',
        description: 'Crispy pastry filled with spiced potatoes and green peas.',
        price: '$4.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks'],
        isVegan: true
    },
    {
        id: 'snacks-2',
        name: 'Khaman',
        description: 'Gram Flour, spongy cake, curry leaves, and served with chutney.',
        price: '$3.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks']
    },
    {
        id: 'snacks-3',
        name: 'Mini Samosa (10 Pcs)',
        description: 'Crispy pastry filled with spiced potatoes and green peas.',
        price: '$7.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks'],
        isVegan: true
    },
    {
        id: 'snacks-4',
        name: 'Mix Veg Pakora',
        description: 'Variety of vegetables, deep fried and served with chutneys.',
        price: '$10.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks'],
        isVegan: true
    },
    {
        id: 'snacks-5',
        name: 'Paneer Pakora',
        description: 'Deep fried paneer fritters.',
        price: '$12.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks']
    },
    {
        id: 'snacks-6',
        name: 'Fafda (Per lb - By Order)',
        description: 'Made with gram flour, turmeric and carom seeds, fried crispy.',
        price: '$14.99',
        category: 'Snacks',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Snacks']
    },

    // Chaat
    {
        id: 'chaat-1',
        name: 'Dabeli',
        description: 'Spicy potato mixture with onions, garlic chutney, sweet/green chutney, spiced peanuts, pomegranate, and sev.',
        price: '$4.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-2',
        name: 'Vada Pav',
        description: 'Spicy potato filling deep fried in batter, served in a bun with chutneys.',
        price: '$4.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-3',
        name: 'Kasta Kachori (2pcs)',
        description: 'Deep fried puffed pastry stuffed with chickpeas. Topped with chutneys, onion, tomato, yogurt, pomegranate, and sev.',
        price: '$11.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-4',
        name: 'Pani Puri (10 Pcs)',
        description: 'Hollow puri filled with seasoned water, tamarind chutney, potato, onion or chickpeas.',
        price: '$5.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-5',
        name: 'Sev Puri',
        description: 'Flat puris topped with potatoes, onions, tomatoes, yogurt, chutneys, and sev.',
        price: '$6.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-6',
        name: 'Bhel',
        description: 'Puffed rice mixed with onions, tomatoes, chutneys, and sev.',
        price: '$5.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat'],
        isVegan: true
    },
    {
        id: 'chaat-7',
        name: 'Cheese Bhel',
        description: 'Classic Bhel topped with cheese.',
        price: '$8.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-8',
        name: 'Chutney Puri',
        description: 'Hollow puris topped with potatoes, onions, tomatoes, yogurt, chutneys, and sev.',
        price: '$6.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-9',
        name: 'Papadi Chat',
        description: 'Lentil crisps, potatoes and chickpeas covered with yogurt, chutneys, and sev.',
        price: '$6.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-10',
        name: 'Samosa Chaat',
        description: 'Samosas topped with chickpeas, chutneys, onion, tomato, yogurt and sev.',
        price: '$7.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-11',
        name: 'Aloo Tikki Chaat',
        description: 'Spiced potato patties served with herbs and chutneys.',
        price: '$7.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },
    {
        id: 'chaat-12',
        name: 'Dahi Vada',
        description: 'Lentil dumplings dipped in yogurt, topped with spicy tamarind/green chutneys.',
        price: '$7.99',
        category: 'Chaat',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Chaat']
    },

    // From The Street
    {
        id: 'street-1',
        name: 'Chole Puri',
        description: 'Chickpeas cooked with ginger/onion/tomato, served with bhature (puffed bread).',
        price: '$8.99',
        category: 'Street Food',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Street Food']
    },
    {
        id: 'street-2',
        name: 'Pav Bhaji',
        description: 'Spiced vegetable mash served with buttered buns.',
        price: '$8.99',
        category: 'Street Food',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Street Food']
    },
    {
        id: 'street-3',
        name: 'Aloopuri',
        description: 'Spiced potato curry served with puri.',
        price: '$8.99',
        category: 'Street Food',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Street Food']
    },

    // Sort & Side
    {
        id: 'side-1',
        name: 'Mixed Pickles',
        description: 'Mixed pickled Indian Vegetables.',
        price: '$0.99',
        category: 'Sides',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Sides']
    },
    {
        id: 'side-2',
        name: 'Raita',
        description: 'Yogurt with cucumber, carrots, onions, roasted cumin.',
        price: '$0.99',
        category: 'Sides',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Sides']
    },
    {
        id: 'side-3',
        name: 'Papadum',
        description: 'Thin, crispy lentil crackers.',
        price: '$2.99',
        category: 'Sides',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Sides']
    },

    // Indo - Chinese
    {
        id: 'chinese-1',
        name: 'Veg Spring Rolls',
        description: 'Savory rolls with cabbage and vegetables.',
        price: '$6.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese']
    },
    {
        id: 'chinese-2',
        name: 'Veg Fried Rice',
        description: 'Rice with bell peppers, peas, vegetables, and soy sauce.',
        price: '$10.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese']
    },
    {
        id: 'chinese-3',
        name: 'Hakka Noodles',
        description: 'Vegetable Indo-Chinese noodles.',
        price: '$10.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese']
    },
    {
        id: 'chinese-4',
        name: 'Chilli Paneer',
        description: 'Fried paneer in chili/soy sauce with peppers and onions.',
        price: '$13.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese'],
        isSpicy: true
    },
    {
        id: 'chinese-5',
        name: 'Veg Manchurian',
        description: 'Vegetable dumplings in spicy sauce.',
        price: '$11.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese']
    },
    {
        id: 'chinese-6',
        name: 'Gobi Manchurian',
        description: 'Fried spiced cauliflower in chili/soy sauce.',
        price: '$14.99',
        category: 'Indo-Chinese',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Indo-Chinese'],
        isSpicy: true
    },

    // Special Thali
    {
        id: 'thali-1',
        name: 'Punjabi Thali',
        description: 'Authentic Punjabi platter.',
        price: '$19.99',
        category: 'Special Thali',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Special Thali']
    },
    {
        id: 'thali-2',
        name: 'Mini Panjabi Thali',
        description: 'Unlimited: P.T.Masala, Dal Tadka, Butter Naan, Gulab Jamun, Papadum, Pickles, Raita.',
        price: '$12.99',
        category: 'Special Thali',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Special Thali']
    },
    {
        id: 'thali-3',
        name: 'Gujarati Thali',
        description: 'Traditional Gujarati platter.',
        price: '$19.99',
        category: 'Special Thali',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Special Thali']
    },
    {
        id: 'thali-4',
        name: 'Punjabi/Gujarati Thali Deal (2-6pm)',
        description: 'Dine-In Only. Tue-Fri. Special pricing.',
        price: '$14.99',
        category: 'Special Thali',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Special Thali']
    },

    // Combo Meals
    {
        id: 'combo-1',
        name: 'Combo 1',
        description: 'One Chana Masala or Daal Tadka, One Naan, and Plain White Rice.',
        price: '$14.99',
        category: 'Combo Meals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Combo Meals']
    },
    {
        id: 'combo-2',
        name: 'Combo 2',
        description: 'One Paneer Tikka or Malai Kofta, One Naan, and Plain White Rice.',
        price: '$17.99',
        category: 'Combo Meals',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Combo Meals']
    },

    // Punjabi Curries
    {
        id: 'punjabi-1',
        name: 'Chana Masala',
        description: 'Chickpeas cooked with garam masala, tomatoes & coriander.',
        price: '$11.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries'],
        isVegan: true
    },
    {
        id: 'punjabi-2',
        name: 'Aloo Gobi',
        description: 'Dry preparation of cauliflower, potatoes & spices.',
        price: '$12.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries'],
        isVegan: true
    },
    {
        id: 'punjabi-3',
        name: 'Paneer Tikka Masala',
        description: 'Paneer cooked in cream and tomato gravy.',
        price: '$12.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-4',
        name: 'Mutter Paneer',
        description: 'Green peas and paneer cooked with herbs & spices.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-5',
        name: 'Saag Paneer',
        description: 'Fresh spinach cooked with cottage cheese, spices & herbs.',
        price: '$15.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-6',
        name: 'Malai Kofta',
        description: 'Potato/veggie/paneer dumplings in creamy sauce.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-7',
        name: 'Navratan Korma',
        description: 'Nine vegetables, nuts and sauce.',
        price: '$16.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-8',
        name: 'Chana Saag',
        description: 'Fresh spinach cooked with chickpeas and spices.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-9',
        name: 'Bhindi Masala',
        description: 'Okra tossed with onions, tomatoes & spices.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries'],
        isVegan: true
    },
    {
        id: 'punjabi-10',
        name: 'Baingan Bharta',
        description: 'Roasted eggplant with tomatoes onion & ginger.',
        price: '$14.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries'],
        isVegan: true
    },
    {
        id: 'punjabi-11',
        name: 'Aloo Saag',
        description: 'Fresh spinach cooked with potatoes and spices.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-12',
        name: 'Kaju Curry',
        description: 'Cashews in a sweet and spicy cashew gravy.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-13',
        name: 'Butter Masala',
        description: 'Rich buttery tomato curry.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-14',
        name: 'Paneer Bhurji',
        description: 'Stir fried grated cottage cheese with vegetables.',
        price: '$13.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-15',
        name: 'Kadai Paneer',
        description: 'Cottage cheese with onions, tomatoes, bell pepper & spices.',
        price: '$16.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },
    {
        id: 'punjabi-16',
        name: 'Yellow Daal Tadka',
        description: 'Lenils tempered with ginger, garlic & cumin seeds.',
        price: '$11.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries'],
        isVegan: true
    },
    {
        id: 'punjabi-17',
        name: 'Dal Makhani',
        description: 'Creamed lentils cooked overnight on low heat with butter and cream.',
        price: '$14.99',
        category: 'Punjabi Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Punjabi Curries']
    },

    // South Indian
    {
        id: 'south-1',
        name: 'Idly',
        description: 'Steamed rice cakes.',
        price: '$5.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-2',
        name: 'Medu Vada',
        description: 'Deep fried lentil doughnuts.',
        price: '$6.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-3',
        name: 'Plain Uttapam',
        description: 'Thick rice pancake.',
        price: '$8.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-4',
        name: 'Veg Uttapam',
        description: 'Uttappam topped with tomato, peas, onions, chillies and carrots.',
        price: '$9.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-5',
        name: 'Cheese Uttapam',
        description: 'Uttappam topped with cheese.',
        price: '$11.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-6',
        name: 'Plain Dosa',
        description: 'A plain crispy Dosa.',
        price: '$6.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-7',
        name: 'Masala Dosa',
        description: 'Thin crepe filled with spiced potato masala.',
        price: '$8.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isVegan: true
    },
    {
        id: 'south-8',
        name: 'Cheese Dosa',
        description: 'Plain Dosa topped with cheese.',
        price: '$11.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-9',
        name: 'Extra Spicy Dosa',
        description: 'Dosa with potato/onion filling.',
        price: '$9.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isSpicy: true
    },
    {
        id: 'south-10',
        name: 'Onion & Chilly Dosa',
        description: 'Onion/Chilly Dosa with potato & onion masala.',
        price: '$9.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isSpicy: true
    },
    {
        id: 'south-11',
        name: 'Mysore Masala Dosa',
        description: 'Masala Dosa topped with spicy chutney.',
        price: '$9.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isSpicy: true
    },
    {
        id: 'south-12',
        name: 'Paneer Masala Dosa',
        description: 'Dosa with Paneer, Potato, and Onion filling.',
        price: '$9.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-13',
        name: 'Ghee Dosa',
        description: 'Crispy crepe made with ghee.',
        price: '$10.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-14',
        name: 'Ghee Masala Dosa',
        description: 'Ghee roast served with potato & onion masala.',
        price: '$11.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-15',
        name: 'Annapurna Special Dosa',
        description: 'Chef\'s special dosa.',
        price: '$14.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian']
    },
    {
        id: 'south-16',
        name: 'Chilly Paneer Dosa',
        description: 'Spiced crepe with spicy chutney and paneer masala.',
        price: '$15.99',
        category: 'South Indian',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['South Indian'],
        isSpicy: true
    },

    // Gujarati Curries
    {
        id: 'guj-1',
        name: 'Bharela Rigna (Baby Eggplant)',
        description: 'Stuffed baby eggplant.',
        price: '$9.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-2',
        name: 'Gobi (Cauliflower) Shaak',
        description: 'Cauliflower vegetable dish.',
        price: '$9.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-3',
        name: 'Kobi Batata Nu Shaak',
        description: 'Cabbage and Potato Vegetable.',
        price: '$9.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-4',
        name: 'Sukhi Aloo Bhaji',
        description: 'Dry Masala Potato.',
        price: '$9.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-5',
        name: 'Bateta Nu Shaak',
        description: 'Potatoes in gravy.',
        price: '$7.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-6',
        name: 'Kala Chana',
        description: 'Black Chickpeas curry.',
        price: '$9.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-7',
        name: 'Tindora Shaak',
        description: 'Ivy Gourd vegetable.',
        price: '$11.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },
    {
        id: 'guj-8',
        name: 'Gujarati Undhiyu',
        description: 'Fresh Mix Green Vegetables.',
        price: '$11.99',
        category: 'Gujarati Curries',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Gujarati Curries'],
        isVegan: true
    },

    // Breads
    {
        id: 'bread-1',
        name: 'Puri/Chapati',
        description: 'Fried or toasted flatbread.',
        price: '$3.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads'],
        isVegan: true
    },
    {
        id: 'bread-2',
        name: 'Tandoori Roti',
        description: 'Whole wheat bread baked in day oven.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads'],
        isVegan: true
    },
    {
        id: 'bread-3',
        name: 'Plain Naan',
        description: 'Traditional bread baked in clay oven.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads']
    },
    {
        id: 'bread-4',
        name: 'Butter Naan',
        description: 'Naan topped with fresh butter.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads']
    },
    {
        id: 'bread-5',
        name: 'Garlic Naan',
        description: 'Naan topped with garlic and cilantro.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads']
    },
    {
        id: 'bread-6',
        name: 'Kashmiri Naan',
        description: 'Sweet naan with nuts and raisins.',
        price: '$5.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads']
    },
    {
        id: 'bread-7',
        name: 'Cheese Naan',
        description: 'Naan stuffed/topped with cheese.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads']
    },
    {
        id: 'bread-8',
        name: 'Bullet Naan',
        description: 'Spicy naan with chili.',
        price: '$4.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads'],
        isSpicy: true
    },
    {
        id: 'bread-9',
        name: 'Aloo Paratha',
        description: 'Whole wheat bread stuffed with spiced potato masala.',
        price: '$6.99',
        category: 'Breads',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Breads'],
        isVegan: true
    },

    // Rice & Khichdi
    {
        id: 'rice-1',
        name: 'Plain Rice',
        description: 'Plain Basmati Rice.',
        price: '$8.00',
        category: 'Rice',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Rice'],
        isVegan: true
    },
    {
        id: 'rice-2',
        name: 'Jeera Rice',
        description: 'Basmati rice cooked with cumin and ghee.',
        price: '$9.99',
        category: 'Rice',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Rice']
    },
    {
        id: 'rice-3',
        name: 'Vegetable Biryani',
        description: 'Basmati rice with fresh vegetables, herbs & spices, served with raita.',
        price: '$10.99',
        category: 'Rice',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Rice']
    },
    {
        id: 'rice-4',
        name: 'Bombay Masala Rice',
        description: 'Spiced basmati rice served with raita.',
        price: '$11.99',
        category: 'Rice',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Rice']
    },
    {
        id: 'rice-5',
        name: 'Paneer Biryani',
        description: 'Basmati rice with fresh paneer, herbs & spices, served with raita.',
        price: '$12.99',
        category: 'Rice',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Rice']
    },
    {
        id: 'khichdi-1',
        name: 'Palak Khichdi',
        description: 'Rice, moong dal, and spinach cooked with spices (order 1 hr ahead).',
        price: '$9.99',
        category: 'Khichdi',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Khichdi']
    },

    // Desserts
    {
        id: 'dessert-1',
        name: 'Jalebi',
        description: 'Fried sweet pretzel soaked in syrup.',
        price: '$3.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },
    {
        id: 'dessert-2',
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings in syrup.',
        price: '$3.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },
    {
        id: 'dessert-3',
        name: 'Rasgulla',
        description: 'Spongy cottage cheese balls in syrup.',
        price: '$3.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },
    {
        id: 'dessert-4',
        name: 'Basundi',
        description: 'Sweetened reduced milk.',
        price: '$5.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },
    {
        id: 'dessert-5',
        name: 'Gajar Halwa',
        description: 'Carrot pudding.',
        price: '$5.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },
    {
        id: 'dessert-6',
        name: 'Rasmalai',
        description: 'Cheese patties in sweetened milk.',
        price: '$5.99',
        category: 'Desserts',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Desserts']
    },

    // Beverages
    {
        id: 'bev-1',
        name: 'Tea',
        description: 'Masala Chai.',
        price: '$2.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },
    {
        id: 'bev-2',
        name: 'Coffee',
        description: 'Indian style coffee.',
        price: '$2.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },
    {
        id: 'bev-3',
        name: 'Sweet Lassi',
        description: 'Sweet yogurt drink.',
        price: '$2.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },
    {
        id: 'bev-4',
        name: 'Mango Lassi',
        description: 'Mango yogurt drink.',
        price: '$3.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },
    {
        id: 'bev-5',
        name: 'Mango Lassi Float',
        description: 'Mango Lassi with ice cream.',
        price: '$4.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },
    {
        id: 'bev-6',
        name: 'Indian Masala Soda',
        description: 'Spiced soda.',
        price: '$2.99',
        category: 'Beverages',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Beverages']
    },

    // Ice Cream
    {
        id: 'ice-1',
        name: 'Dolly',
        description: 'Chocolate and Mango.',
        price: '$1.99',
        category: 'Ice Cream',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Ice Cream']
    },
    {
        id: 'ice-2',
        name: 'Ice Cream Cone',
        description: 'Chocolate, Kesar Pista, or Butterscotch.',
        price: '$3.99',
        category: 'Ice Cream',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Ice Cream']
    },
    {
        id: 'ice-3',
        name: 'Kulfi',
        description: 'Traditional Indian ice cream.',
        price: '$2.49',
        category: 'Ice Cream',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Ice Cream']
    },
    {
        id: 'ice-4',
        name: 'Falooda',
        description: 'Rose syrup vermicelli drink with ice cream.',
        price: '$2.99',
        category: 'Ice Cream',
        mainMenu: 'Annapurna Menu',
        image: categoryImages['Ice Cream']
    },

    // ================= Our Catering Menu =================
    {
        id: 'cat-snack-1',
        name: 'Vegetable Pakora',
        description: 'Test...',
        price: '$0.00',
        category: 'Catering Snacks',
        mainMenu: 'Our Catering Menu',
        image: categoryImages['Catering Snacks']
    }
    // Rice is empty in source, so skipped item
];
