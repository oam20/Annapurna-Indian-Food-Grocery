export interface GroceryItem {
    id: string;
    name: string;
    category: string;
    price: string; // Made required for Cart compatibility
    image: string;
    inStock: boolean;
    isBestSeller?: boolean;
    description?: string;
}

export const groceryItems: GroceryItem[] = [
    // Flours (Atta) and Grains
    {
        id: '15',
        name: 'Sujata Chakki Atta 20lb',
        category: 'Flours (Atta) and Grains',
        price: '$18.99',
        image: 'https://static.wixstatic.com/media/6cbac1_17a1a35d20284ccc8f7a126cced715d3~mv2.webp',
        inStock: true,
        isBestSeller: true,
        description: 'Premium quality whole wheat flour for soft and fluffy rotis.'
    },
    {
        id: '14',
        name: 'Aashirvaad Chakki Atta',
        category: 'Flours (Atta) and Grains',
        price: '$17.99',
        image: 'https://static.wixstatic.com/media/6cbac1_7f962c1eafbd4221bdba186aeee2e900~mv2.webp',
        inStock: true,
        description: 'Authentic Indian whole wheat flour, high in fiber.'
    },
    {
        id: '13',
        name: 'Sher Durum Atta 20lb',
        category: 'Flours (Atta) and Grains',
        price: '$16.99',
        image: 'https://static.wixstatic.com/media/6cbac1_3a3fef53660245319006dd27af34f92d~mv2.jpg',
        inStock: false
    },

    // Rice
    {
        id: '12',
        name: 'Laxmi Sona Masoori Rice',
        category: 'Rice',
        price: '$24.99',
        image: 'https://static.wixstatic.com/media/6cbac1_9c9d72050b00419e9f419373bf28dcb0~mv2.jpg',
        inStock: true
    },

    // Dals and Pulses
    {
        id: '10',
        name: 'LAXMI TOOR DAL 4LB',
        category: 'Dals and Pulses',
        price: '$8.99',
        image: 'https://static.wixstatic.com/media/6cbac1_2726da9f5a8d4f3388ac58940ba37b5b~mv2.jpg',
        inStock: true
    },

    // Oil and Ghee
    {
        id: '2',
        name: 'Laxmi Peanut Oil, 2.84 L',
        category: 'Oil and Ghee',
        price: '$19.99',
        image: 'https://static.wixstatic.com/media/6cbac1_e5ba65bef2264bdaadfa9a3ba415f74e~mv2.jpeg',
        inStock: true
    },
    {
        id: '3',
        name: 'Patanjali Cow Ghee',
        category: 'Oil and Ghee',
        price: '$12.99',
        image: 'https://static.wixstatic.com/media/6cbac1_cf1b0d31ace44ea68d2a4930ae62251f~mv2.webp',
        inStock: true
    },
    {
        id: '4',
        name: 'Nanak Desi Ghee, Clarified Butter-3.5lbs',
        category: 'Oil and Ghee',
        price: '$34.99',
        image: 'https://static.wixstatic.com/media/6cbac1_f13c0516532543d6b64252721825d813~mv2.webp',
        inStock: true
    },
    {
        id: '9',
        name: 'AARA SUNFLOWER OIL 5L',
        category: 'Oil and Ghee',
        price: '$15.99',
        image: 'https://static.wixstatic.com/media/6cbac1_e93fa90e1a6a482d9025554cb4dca347~mv2.png',
        inStock: true
    },

    // Tea and Coffee
    {
        id: '7',
        name: 'Red Label 900 g',
        category: 'Tea and Coffee',
        price: '$13.99',
        image: 'https://static.wixstatic.com/media/6cbac1_ce5727ea97564dd995b898ea570961b2~mv2.jpg',
        inStock: true
    },
    {
        id: '8',
        name: 'WAGHBAKRI TEA 2LB',
        category: 'Tea and Coffee',
        price: '$13.99',
        image: 'https://static.wixstatic.com/media/6cbac1_4bb3c1cf3f774380b77cc46a193fc91d~mv2.png',
        inStock: true
    },
    {
        id: '5',
        name: 'Tetley Tea, 300 Count, 900 g',
        category: 'Tea and Coffee',
        price: '$11.99',
        image: 'https://static.wixstatic.com/media/6cbac1_d02c4f971ac64c959e4275f30dbd044b~mv2.jpg',
        inStock: true
    },
    {
        id: '6',
        name: 'Red Label Bag',
        category: 'Tea and Coffee',
        price: '$5.99',
        image: 'https://static.wixstatic.com/media/6cbac1_f457ad9b80d24d78bb4319ce076b1a41~mv2.jpg',
        inStock: true
    },

    // Sweets
    {
        id: '1',
        name: 'ANY sweets 1 lb',
        category: 'Sweets',
        price: '$12.00',
        image: 'https://static.wixstatic.com/media/11062b_1112e36818ab422fa12fa4162044b9d5~mv2.jpeg',
        inStock: true
    },

    // Others/Pantry
    {
        id: '11',
        name: 'DEEP SHREEDED COCONUT 12OZ',
        category: 'Dry fruits and Nuts',
        price: '$3.49',
        image: 'https://static.wixstatic.com/media/6cbac1_1ed315d048124fd19d62a825d0289b0c~mv2.jpg',
        inStock: true,
        isBestSeller: true
    }
];

export const groceryCategories = [
    'All',
    'Biscuits and Cookies',
    'Dairy Products',
    'Dals and Pulses',
    'Dry fruits and Nuts',
    'Flours (Atta) and Grains',
    'Fresh Vegetables',
    'Frozen Food',
    'Health & Beauty',
    'Kitchenware & Utensils',
    'Oil and Ghee',
    'Pickels',
    'Puja Items',
    'Rice',
    'Snacks and Chips',
    'Spices and Masalas',
    'Sweets',
    'Tea and Coffee'
];
