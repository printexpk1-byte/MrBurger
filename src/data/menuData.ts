export interface PriceOption {
  label: string;
  price: string;
}

export interface MenuItem {
  id: string;
  name: string;
  additives?: string[];
  description?: string;
  fallbackSubtitle: string;
  spiceTag?: string;
  prices: PriceOption[];
  image: string;
  imageAlt: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export const RESTAURANT_INFO = {
  brand: 'MR. NICE BURGERS',
  halalLabel: '100% Halal',
  taglineQuote:
    '„GENIESSE DEIN ESSEN BEI UNS VOR ORT, ODER LASSE ES DIR NACH HAUSE, AUF DEINEN ARBEITSPLATZ ODER AN JEDEN ANDERN ORT SCHNELL & FRISCH LIEFERN!“',
  hoursMain: 'Montags bis Sonntag 12:00 - 22:00 Uhr',
  hoursClosed: 'Donnerstag : Ruhetag',
  corporateTitle: 'Firmenangebot bei Mr. Nice Burgers!',
  corporateText:
    'Ab einer Bestellung von mindestens 8 Menüs erhalten Firmen 10 % Rabatt auf die gesamte Menübestellung!',
  phone: '0155 63 49 65 02',
  phoneHref: 'tel:+4915563496502',
  address: 'KÖLN-AACHENER-STR 270 | 50127 Bergheim',
  instagram: 'Mr.Niceburgers',
  facebook: 'MrNiceburgers',
  highlights: 'HOTDOG · BURGER · CURRYWURST',
  heroImage: './src/assets/images/hero_mr_nice_spread_1794828146996.jpg',
};

export const ADDITIVES_LEGEND: Record<string, string> = {
  '1': 'Mit Farbstoffen',
  '2': 'Konserviert',
  '3': 'Antioxidationsmittel',
  '4': 'Mit Geschmacksverstärker',
  '5': 'Mit Phosphat',
  '6': 'Mit Süßmittel',
  '7': 'Enthält Milcherzeugnisse',
  '8': 'Säureregulatoren',
  '9': 'Koffeinhaltig',
  '10': 'Stabilisatoren',
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'burger',
    title: 'Burger',
    subtitle: 'Burger mit feinstes Beef / Medium gegrillt · Single & Menüs',
    items: [
      {
        id: 'hamburger',
        name: 'HAMBURGER',
        additives: ['2', '4'],
        description: 'Mr. Nice-Sauce, Ketchup, rote Zwiebeln, Lollo-Bionda, Tomate, Gurke',
        fallbackSubtitle: 'Klassischer Beef Burger',
        prices: [
          { label: 'Single', price: '9,00€' },
          { label: 'Menüs', price: '12,90€' },
        ],
        image: './src/assets/images/burger_hamburger_1794828149217.jpg',
        imageAlt: 'Hamburger mit gegrilltem Rindfleisch, Lollo-Bionda, Tomate, Gurke und roten Zwiebeln',
      },
      {
        id: 'cheeseburger',
        name: 'CHEESEBURGER',
        additives: ['2', '4'],
        description:
          'Mr. Nice-Sauce, Ketchup, Cheddar Käse, rote Zwiebeln, Lollo-Bionda, Tomate, Gurke',
        fallbackSubtitle: 'Beef Burger mit Cheddar Käse',
        prices: [
          { label: 'Single', price: '9,50€' },
          { label: 'Menüs', price: '13,50€' },
        ],
        image: './src/assets/images/burger_cheeseburger_1794828148203.jpg',
        imageAlt: 'Cheeseburger mit geschmolzenem Cheddar, Lollo-Bionda, Tomate und Gurke',
      },
      {
        id: 'senator-burger',
        name: 'Senator Burger- Scharf',
        spiceTag: 'Scharf',
        description:
          'Rindfleisch, Spiegelei, Bacon, Cheddar, Lollo Bionda, Tomaten, Gurken, karamellisierte Zwiebeln & Jalapeños.',
        fallbackSubtitle: 'Scharfer Beef Burger mit Spiegelei & Bacon',
        prices: [
          { label: 'Single', price: '12,50€' },
          { label: 'Menüs', price: '16,50€' },
        ],
        image: './src/assets/images/burger_senator_scharf_1794828147966.jpg',
        imageAlt: 'Senator Burger scharf mit Rindfleisch, Spiegelei, Bacon, Cheddar und Jalapeños',
      },
      {
        id: 'al-gobernador',
        name: 'Al Gobernador - Scharf',
        spiceTag: 'Scharf',
        description:
          'Saftiges Rindfleisch, Lollo Bionda, Gewürzgurken, Tomaten, Zwiebeln & geschmolzener Käse.',
        fallbackSubtitle: 'Scharfer Rindfleisch Burger',
        prices: [
          { label: 'Single', price: '11,50€' },
          { label: 'Menüs', price: '15,50€' },
        ],
        image: './src/assets/images/burger_al_gobernador_1794828150024.jpg',
        imageAlt: 'Al Gobernador Burger scharf mit saftigem Rindfleisch und geschmolzenem Käse',
      },
      {
        id: 'chili-cheeseburger',
        name: 'CHILI CHEESEBURGER',
        additives: ['2', '3'],
        spiceTag: 'Scharf',
        description:
          'Mr. Nice-Sauce, scharfer Ketchup, Jalapenos, Cheddar Käse, Lollo Bionda, rote Zwiebeln, Tomate, Gurke',
        fallbackSubtitle: 'Scharfer Chili Cheeseburger',
        prices: [
          { label: 'Single', price: '10,00€' },
          { label: 'Menüs', price: '14,90€' },
        ],
        image: './src/assets/images/burger_chili_cheeseburger_1794828150102.jpg',
        imageAlt: 'Chili Cheeseburger mit Jalapeños, scharfem Ketchup und Cheddar Käse',
      },
      {
        id: 'bbq-burger',
        name: 'BBQ BURGER',
        additives: ['2', '4', '5'],
        description:
          'Mr. Nice-Sauce, BBQ Sauce, Cheddar Käse, karamelisierte Zwiebeln, Lollo-Bionda, Bacon, Tomate, Gurke',
        fallbackSubtitle: 'Rauchiger BBQ Burger',
        prices: [
          { label: 'Single', price: '11,00€' },
          { label: 'Menüs', price: '15,00€' },
        ],
        image: './src/assets/images/burger_bbq_burger_1794828149970.jpg',
        imageAlt: 'BBQ Burger mit Bacon, karamellisierten Zwiebeln, Cheddar und BBQ Sauce',
      },
      {
        id: 'italian-burger',
        name: 'ITALIAN BURGER',
        additives: ['2', '4'],
        description:
          'Mr. Nice-Sauce, Sweet Chili Sauce, Mayo, Röstzwiebeln, Rucola, Parmesan, Gorgonzola, Tomate, Gurke',
        fallbackSubtitle: 'Italienischer Gourmet Burger',
        prices: [
          { label: 'Single', price: '11,50€' },
          { label: 'Menüs', price: '15,50€' },
        ],
        image: './src/assets/images/burger_italian_burger_1794828150584.jpg',
        imageAlt: 'Italian Burger mit Rucola, Parmesan, Gorgonzola und Röstzwiebeln',
      },
      {
        id: 'chicken-burger',
        name: 'CHICKEN BURGER',
        additives: ['2', '4'],
        description:
          'Mr. Nice-Sauce, Sweet Chili Sauce, Mayo, Lollo Bionda, karamelisierte Zwiebeln, Tomate, Gurke',
        fallbackSubtitle: 'Knuspriger Chicken Burger',
        prices: [
          { label: 'Single', price: '11,50€' },
          { label: 'Menüs', price: '15,50€' },
        ],
        image: './src/assets/images/burger_chicken_burger_1794828150222.jpg',
        imageAlt: 'Chicken Burger mit knusprigem Hähnchen, karamellisierten Zwiebeln und Sweet Chili Sauce',
      },
      {
        id: 'veggie-burger',
        name: 'VEGGIE BURGER',
        additives: ['2', '4'],
        description:
          'Mr. Nice-Sauce, Sweet Chili Sauce, Mayo, Lollo Bionda, karamelisierte Zwiebeln, Tomate, Gurke',
        fallbackSubtitle: 'Vegetarischer Burger',
        prices: [
          { label: 'Single', price: '7,00€' },
          { label: 'Menüs', price: '11,00€' },
        ],
        image: './src/assets/images/burger_veggie_burger_1794828150659.jpg',
        imageAlt: 'Veggie Burger mit knusprigem Gemüse-Patty, Lollo Bionda und Sweet Chili Sauce',
      },
      {
        id: 'mr-nice-burger',
        name: 'Mr. Nice BURGER',
        additives: ['2', '4'],
        description:
          'Extra Beef, doppelt Cheddar Käse, karamelisierte Zwiebeln, Mr. Nice-Sauce, Mayo, BBQ Sauce, Tomate, Gurke',
        fallbackSubtitle: 'Haus-Spezialität mit Extra Beef & doppelt Cheddar',
        prices: [
          { label: 'Single', price: '13,50€' },
          { label: 'Menüs', price: '17,50€' },
        ],
        image: './src/assets/images/burger_mr_nice_1794828150587.jpg',
        imageAlt: 'Mr. Nice Burger mit Extra Beef, doppelt Cheddar Käse und karamellisierten Zwiebeln',
      },
    ],
  },
  {
    id: 'smash',
    title: 'Mr Nice Smash',
    subtitle: 'Frisch gesmashte Beef-Patties & Menüs',
    items: [
      {
        id: 'nice-and-cheese',
        name: 'Nice & Cheese',
        description:
          'Doppelt Beef-Pattie, Ketchup, Senf, Mr.Nice Sauce, Beef-Pattie, Zwiebeln, Tomate mit Pommes und Getränk',
        fallbackSubtitle: 'Smash Burger Menü mit Pommes & Getränk',
        prices: [{ label: 'Menü', price: '11,00€' }],
        image: './src/assets/images/smash_nice_and_cheese_1794828152058.jpg',
        imageAlt: 'Nice & Cheese Smash Burger serviert mit Pommes und Getränk',
      },
      {
        id: 'double-nice-and-cheese',
        name: 'Double Nice & Cheese',
        description:
          'Doppelt Beef-Pattie, Ketchup, Senf, Mr.Nice Sauce, Gurke, Zwiebeln und Tomate mit Pommes und Getränk',
        fallbackSubtitle: 'Double Smash Burger Menü mit Pommes & Getränk',
        prices: [{ label: 'Menü', price: '15,50€' }],
        image: './src/assets/images/smash_double_nice_cheese_1794828152926.jpg',
        imageAlt: 'Double Nice & Cheese Smash Burger mit Pommes und kaltem Getränk',
      },
      {
        id: 'nice-and-smoky',
        name: 'Nice & Smoky',
        description:
          'Mr.Nice Sauce, BBQ Sauce, Beef-Pattie, Bacon, Tomate, Gurke, karamellisierte Zwiebeln',
        fallbackSubtitle: 'Smoky Smash Burger mit Bacon & BBQ Sauce',
        prices: [{ label: 'Einzeln', price: '12,60€' }],
        image: './src/assets/images/smash_nice_and_smoky_1794828152240.jpg',
        imageAlt: 'Nice & Smoky Smash Burger mit Bacon, BBQ Sauce und karamellisierten Zwiebeln',
      },
      {
        id: 'two-nice-cheese-pommes-drink',
        name: '2 Nice & Cheese Pommes Drink',
        description:
          '2 mal Smash Burger mit Mr.Nice Sauce, Ketchup, Senf, Tomate, Gurke, Zwiebeln Mit Pommes und Getränk',
        fallbackSubtitle: '2x Smash Burger Bundle mit Pommes & Getränk',
        prices: [{ label: 'Menü', price: '19,00€' }],
        image: './src/assets/images/smash_two_nice_cheese_meal_1794828153246.jpg',
        imageAlt: '2 Nice & Cheese Smash Burger mit Pommes und Getränken',
      },
    ],
  },
  {
    id: 'hot-dogs',
    title: 'Hot Dogs',
    subtitle: 'Frisch zubereitete Hot Dogs',
    items: [
      {
        id: 'classic-hot-dog',
        name: 'CLASSIC HOT DOG',
        fallbackSubtitle: 'Hot Dogs · Klassik',
        prices: [{ label: 'Preis', price: '6,00€' }],
        image: './src/assets/images/hotdog_classic_1794828153412.jpg',
        imageAlt: 'Classic Hot Dog im weichen Brötchen mit Röstzwiebeln',
      },
      {
        id: 'cheese-dog',
        name: 'CHEESE DOG',
        additives: ['2', '4'],
        fallbackSubtitle: 'Hot Dogs · Mit Käse',
        prices: [{ label: 'Preis', price: '6,50€' }],
        image: './src/assets/images/hotdog_cheese_1794828152008.jpg',
        imageAlt: 'Cheese Dog mit geschmolzener Käsesauce und Röstzwiebeln',
      },
      {
        id: 'chili-cheese-dog',
        name: 'CHILI CHEESE DOG',
        additives: ['2', '3', '4'],
        spiceTag: 'Scharf',
        fallbackSubtitle: 'Hot Dogs · Chili & Käse',
        prices: [{ label: 'Preis', price: '7,50€' }],
        image: './src/assets/images/hotdog_chili_cheese_1794828152771.jpg',
        imageAlt: 'Chili Cheese Dog mit Käsesauce, Jalapeños und Röstzwiebeln',
      },
      {
        id: 'bbq-dog',
        name: 'BBQ DOG',
        additives: ['2', '4'],
        fallbackSubtitle: 'Hot Dogs · BBQ Style',
        prices: [{ label: 'Preis', price: '7,50€' }],
        image: './src/assets/images/hotdog_bbq_1794828152936.jpg',
        imageAlt: 'BBQ Dog mit rauchiger BBQ Sauce und Röstzwiebeln',
      },
    ],
  },
  {
    id: 'salate',
    title: 'Salate',
    subtitle: 'Frischer Mr. Nice Salatmix',
    items: [
      {
        id: 'chicken-salat',
        name: 'CHICKEN SALAT',
        description: 'ca, 260g gegrillte Hähnchenbrust auf frischen Mr. Nice Salatmix',
        fallbackSubtitle: 'Salat mit gegrillter Hähnchenbrust',
        prices: [{ label: 'Preis', price: '13,00€' }],
        image: './src/assets/images/salad_chicken_1794828153621.jpg',
        imageAlt: 'Chicken Salat mit gegrillter Hähnchenbrust auf frischem Salatmix',
      },
      {
        id: 'gamba-salat',
        name: 'GAMBA SALAT',
        description: 'mit 8 Black Tiger Garnelen auf frischen Mr. Nice Salatmix',
        fallbackSubtitle: 'Salat mit Black Tiger Garnelen',
        prices: [{ label: 'Preis', price: '17,00€' }],
        image: './src/assets/images/salad_gamba_1794828154242.jpg',
        imageAlt: 'Gamba Salat mit 8 Black Tiger Garnelen auf frischem Salatmix',
      },
    ],
  },
  {
    id: 'fingerfood',
    title: 'Fingerfood',
    subtitle: 'Snacks, Pommes, Box-Menüs & süßer Abschluss',
    items: [
      {
        id: 'fritten',
        name: 'FRITTEN',
        description: 'Aus frischen Kartoffeln',
        fallbackSubtitle: 'Klassische Pommes',
        prices: [{ label: 'Preis', price: '4,00€' }],
        image: './src/assets/images/fingerfood_fritten_1794828155158.jpg',
        imageAlt: 'Knusprige Fritten aus frischen Kartoffeln',
      },
      {
        id: 'suesse-fritten',
        name: 'SÜßE FRITTEN',
        description: 'Aus frischen Süsskartoffeln',
        fallbackSubtitle: 'Süßkartoffel-Pommes',
        prices: [{ label: 'Preis', price: '5,50€' }],
        image: './src/assets/images/fingerfood_suesse_fritten_1794828153902.jpg',
        imageAlt: 'Süße Fritten aus frischen Süßkartoffeln',
      },
      {
        id: 'chicken-sticks',
        name: 'CHICKEN STICKS',
        description: 'Paniertes Hähnchenfleisch geformt',
        fallbackSubtitle: 'Knusprige Hähnchen-Sticks',
        prices: [
          { label: '3 Stück', price: '4,00€' },
          { label: '6 Stück', price: '7,00€' },
          { label: '9 Stück', price: '9,50€' },
        ],
        image: './src/assets/images/fingerfood_chicken_sticks_1794828154405.jpg',
        imageAlt: 'Panierte Chicken Sticks in 3, 6 oder 9 Stück',
      },
      {
        id: 'chicken-nugget',
        name: 'CHICKEN NUGGET',
        description: 'Paniertes Hähnchenfleisch als Nuggets',
        fallbackSubtitle: 'Knusprige Chicken Nuggets',
        prices: [
          { label: '3 Stück', price: '4,00€' },
          { label: '6 Stück', price: '5,00€' },
          { label: '9 Stück', price: '7,00€' },
        ],
        image: './src/assets/images/fingerfood_chicken_nuggets_1794828155292.jpg',
        imageAlt: 'Knusprige Chicken Nuggets in 3, 6 oder 9 Stück',
      },
      {
        id: 'mr-nice-cheese-fries',
        name: 'Mr. Nice Cheese Fries',
        description: 'Pommes, Cheese sauce',
        fallbackSubtitle: 'Pommes mit Käsesauce',
        prices: [{ label: 'Preis', price: '5,00€' }],
        image: './src/assets/images/fingerfood_cheese_fries_1794828156364.jpg',
        imageAlt: 'Mr. Nice Cheese Fries mit cremiger Käsesauce',
      },
      {
        id: 'currywurst',
        name: 'CURRYWURST',
        fallbackSubtitle: 'Fingerfood · Größen S & M',
        prices: [
          { label: 'S', price: '3,50€' },
          { label: 'M', price: '6,50€' },
        ],
        image: './src/assets/images/fingerfood_currywurst_1794828156642.jpg',
        imageAlt: 'Currywurst in Größe S oder M',
      },
      {
        id: 'baklava',
        name: 'Baklava',
        description:
          '2 knuspriges, traditionelles Blätterteiggebäck mit einer feinen Nussfüllung, verfeinert mit süßem Sirup. Saftig, knusprig und aromatisch - der perfekte süße Abschluss.',
        fallbackSubtitle: 'Traditionelles Blätterteiggebäck',
        prices: [{ label: '2 Stück', price: '5,50€' }],
        image: './src/assets/images/fingerfood_baklava_1794828157224.jpg',
        imageAlt: '2 knusprige Baklava mit Nussfüllung und süßem Sirup',
      },
      {
        id: 'creamy-crunch-nachos',
        name: 'Creamy Crunch Nachos',
        description:
          'Die "Creamy Crunch Nachos" vereinen knusprige Tortilla-Chips mit einer herrlich cremigen Käsesauce.',
        fallbackSubtitle: 'Tortilla-Chips mit Käsesauce',
        prices: [{ label: 'Preis', price: '6,50€' }],
        image: './src/assets/images/fingerfood_nachos_1794828155994.jpg',
        imageAlt: 'Creamy Crunch Nachos mit warmer Käsesauce',
      },
      {
        id: 'nugget-snack-box-menue',
        name: 'Nugget Snack Box Menü',
        description:
          '3x Chicken Nuggets, 3x Chili Cheese Nuggets, 3x Mozarella Sticks und Pommes',
        fallbackSubtitle: 'Gemischte Nugget Snack Box mit Pommes',
        prices: [{ label: 'Menü', price: '9,50€' }],
        image: './src/assets/images/fingerfood_nugget_box_1794828157427.jpg',
        imageAlt: 'Nugget Snack Box Menü mit Chicken Nuggets, Chili Cheese Nuggets, Mozzarella Sticks und Pommes',
      },
      {
        id: 'chicken-wings-snack-box-menue',
        name: "Chicke'n Wings Snack Box Menü",
        description:
          '3x Chicken Wings, 3x Chili Cheese Nugget, 3x Mozzarella Sticks und Knackige Pommes',
        fallbackSubtitle: 'Chicken Wings Snack Box mit Pommes',
        prices: [{ label: 'Menü', price: '13,50€' }],
        image: './src/assets/images/fingerfood_wings_box_1794828157353.jpg',
        imageAlt: "Chicke'n Wings Snack Box Menü mit Wings, Chili Cheese Nuggets, Mozzarella Sticks und Pommes",
      },
    ],
  },
  {
    id: 'getraenke',
    title: 'Getränke',
    subtitle: 'Gekühlte Softdrinks, Eistees & Mineralwasser',
    items: [
      {
        id: 'fritz',
        name: 'FRITZ',
        additives: ['1', '6', '9'],
        description:
          'KOLA, KOLA LIGHT, KOLA ZERO, MISCH MASCH, ZITRONEN LIMO, LIMO ORANGE, HONIGMELONE, LIMO APFEL KIRSCH HOLUNDER',
        fallbackSubtitle: 'Fritz-Kola & Fritz-Limo Sorten',
        prices: [{ label: 'Flasche', price: '2,80€' }],
        image: './src/assets/images/drink_fritz_1794828191711.jpg',
        imageAlt: 'Fritz Kola und Fritz Limo Sorten gekühlt serviert',
      },
      {
        id: 'california-ice-tea',
        name: 'CALIFORNIA ICE TEA',
        description: 'Tea Lemon, Tea Mango, Tea Peach, Blueberry, Melone',
        fallbackSubtitle: 'Fruchtiger Eistee',
        prices: [{ label: 'Preis', price: '2,80€' }],
        image: './src/assets/images/drink_california_icetea_halal_1794828220814.jpg',
        imageAlt: 'California Ice Tea in den Sorten Lemon, Mango, Peach, Blueberry und Melone',
      },
      {
        id: 'wasser-still',
        name: 'WASSER STILL',
        fallbackSubtitle: 'Getränke · Stilles Wasser',
        prices: [{ label: 'Preis', price: '1,50€' }],
        image: './src/assets/images/drink_wasser_still_1794828191741.jpg',
        imageAlt: 'Gekühltes stilles Wasser im Glas und Flasche',
      },
      {
        id: 'wasser-sprudel',
        name: 'WASSER SPRUDEL',
        fallbackSubtitle: 'Getränke · Mineralwasser mit Kohlensäure',
        prices: [{ label: 'Preis', price: '1,50€' }],
        image: './src/assets/images/drink_wasser_sprudel_1794828191789.jpg',
        imageAlt: 'Gekühltes Sprudelwasser mit Kohlensäure',
      },
    ],
  },
  {
    id: 'saucen',
    title: 'Saucen',
    subtitle: 'Passende Dips & Spezialsaucen',
    items: [
      {
        id: 'sauce-ketchup',
        name: 'KETCHUP',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,60€' }],
        image: './src/assets/images/sauce_ketchup_1794828191299.jpg',
        imageAlt: 'Ketchup Dip-Schälchen',
      },
      {
        id: 'sauce-mayo',
        name: 'MAYO',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,60€' }],
        image: './src/assets/images/sauce_mayo_1794828192239.jpg',
        imageAlt: 'Mayonnaise Dip-Schälchen',
      },
      {
        id: 'sauce-curry',
        name: 'CURRY',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,60€' }],
        image: './src/assets/images/sauce_curry_1794828191691.jpg',
        imageAlt: 'Curry Dip-Schälchen',
      },
      {
        id: 'sauce-sweet-chili',
        name: 'SWEET CHILI',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,70€' }],
        image: './src/assets/images/sauce_sweet_chili_1794828193365.jpg',
        imageAlt: 'Sweet Chili Dip-Schälchen',
      },
      {
        id: 'sauce-senf',
        name: 'SENF',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,70€' }],
        image: './src/assets/images/sauce_senf_1794828192152.jpg',
        imageAlt: 'Senf Dip-Schälchen',
      },
      {
        id: 'sauce-bbq',
        name: 'BBQ',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,70€' }],
        image: './src/assets/images/sauce_bbq_1794828194981.jpg',
        imageAlt: 'BBQ Sauce Dip-Schälchen',
      },
      {
        id: 'sauce-andalouse',
        name: 'ANDALOUSE',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '0,80€' }],
        image: './src/assets/images/sauce_andalouse_1794828194457.jpg',
        imageAlt: 'Andalouse Sauce Dip-Schälchen',
      },
      {
        id: 'sauce-samurai',
        name: 'SAMURAI',
        additives: ['2', '4'],
        spiceTag: 'Scharf',
        fallbackSubtitle: 'Saucen · Scharfer Dip',
        prices: [{ label: 'Dip', price: '0,80€' }],
        image: './src/assets/images/sauce_samurai_1794828194359.jpg',
        imageAlt: 'Samurai Sauce Dip-Schälchen',
      },
      {
        id: 'sauce-joppie',
        name: 'JOPPIE',
        additives: ['2', '4'],
        fallbackSubtitle: 'Saucen · Dip',
        prices: [{ label: 'Dip', price: '1,00€' }],
        image: './src/assets/images/sauce_joppie_1794828193186.jpg',
        imageAlt: 'Joppie Sauce Dip-Schälchen',
      },
    ],
  },
  {
    id: 'extras',
    title: 'Extras',
    subtitle: 'Zusätzliche Toppings & Extra-Fleisch',
    items: [
      {
        id: 'extra-cheddar',
        name: 'CHEDDAR',
        additives: ['7'],
        fallbackSubtitle: 'Extras · Käse-Topping',
        prices: [{ label: 'Extra', price: '0.80€' }],
        image: './src/assets/images/extra_cheddar_1794828195286.jpg',
        imageAlt: 'Extra Cheddar Käse',
      },
      {
        id: 'extra-parmesan',
        name: 'PARMESAN',
        additives: ['7'],
        fallbackSubtitle: 'Extras · Käse-Topping',
        prices: [{ label: 'Extra', price: '0.80€' }],
        image: './src/assets/images/extra_parmesan_1794828194836.jpg',
        imageAlt: 'Extra Parmesan Käse',
      },
      {
        id: 'extra-gorgonzola',
        name: 'GORGONZOLA',
        additives: ['7'],
        fallbackSubtitle: 'Extras · Käse-Topping',
        prices: [{ label: 'Extra', price: '0.80€' }],
        image: './src/assets/images/extra_gorgonzola_1794828195166.jpg',
        imageAlt: 'Extra Gorgonzola Käse',
      },
      {
        id: 'extra-karamellisierte-zwiebeln',
        name: 'KARAMELISIERTE ZWIEBELN',
        fallbackSubtitle: 'Extras · Topping',
        prices: [{ label: 'Extra', price: '0.80€' }],
        image: './src/assets/images/extra_karamellisierte_zwiebeln_1794828196171.jpg',
        imageAlt: 'Extra karamellisierte Zwiebeln',
      },
      {
        id: 'extra-bacon',
        name: 'BACON',
        fallbackSubtitle: 'Extras · Topping',
        prices: [{ label: 'Extra', price: '1.00€' }],
        image: './src/assets/images/extra_bacon_1794828196342.jpg',
        imageAlt: 'Extra knuspriger Bacon',
      },
      {
        id: 'extra-spiegelei',
        name: 'SPIEGELEI',
        fallbackSubtitle: 'Extras · Topping',
        prices: [{ label: 'Extra', price: '1.20€' }],
        image: './src/assets/images/extra_spiegelei_1794828196231.jpg',
        imageAlt: 'Extra Spiegelei',
      },
      {
        id: 'extra-beef-chicken',
        name: 'EXTRA BEEF/EXTRA CHICKEN',
        fallbackSubtitle: 'Extras · Zusätzliches Patty',
        prices: [{ label: 'Extra', price: '3.50€' }],
        image: './src/assets/images/extra_beef_chicken_1794828195555.jpg',
        imageAlt: 'Extra Beef Patty oder Extra Chicken Brust',
      },
    ],
  },
];
