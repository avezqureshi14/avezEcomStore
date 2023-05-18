const productsArray = [

    {
        "id": "price_1MUjcQSJVCB993v3Jl6TRgUK",
        "title": "Gaming Keyboard and Mouse and Gaming Headset",
        "description":"Gaming Keyboard and mouse come with 3 rotating colours and breathing mode, 4 colours circular breathing ",
        "image":"https://m.media-amazon.com/images/I/71S-pQNQyIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        "price": 4593,
        "deal":"deal",
        "mainCategory":"gaming",
        "commonCategory":"Accessories",
        "icon":"../assets/sidebar/tv.png"
    },

    {
        "id": "price_1MUjdVSJVCB993v36fYVlCxR",
        "title": "Lenovo Intel Core i3 11th Gen",
        "description":"Experience fast computation and run multiple applications on the Lenovo IdeaPad Core i3 11th Gen laptop. This laptop is equipped with a Intel Core i3 10th Gen processor, 8 GB of RAM, and 512 GB of SSD storage that offers impressive performance and efficient storage to fulfil all your needs. Moreover, it sports a 39.62 cm (15.6) FHD anti-glare display with narrow bezels, that allows you to enjoy a distraction-free and bright visuals.",
        "image":"https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
        "price": 38900,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Laptop",
        "icon":"../assets/sidebar/tv.png"
    },

    {
        "id": "price_1MUjeJSJVCB993v3yDDzeGHY",
        "title": "APPLE iPhone 14 (Midnight, 128 GB)",
        "description":"HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
        "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
        "price": 100000,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Mobole",
        "icon":"../assets/sidebar/tv.png"
    },
    
    {
        "id": "price_1MUjfESJVCB993v3Mkb188kW",
        "title": "Apple | Macbook Pro",
        "description":"Built-in Apps: iMovie, Siri, GarageBand, Pages, Numbers, Photos, Keynote, Safari, Mail, FaceTime, Messages, Maps, Stocks, Home, Voice Memos, Notes, Calendar, Contacts, Reminders, Photo Booth, Preview, Books, App Store, Time Machine, TV, Music, Podcasts, Find My, QuickTime Player",
        "image":"https://m.media-amazon.com/images/I/61bX2AoGj2L._AC_UY327_FMwebp_QL65_.jpg",
        "price": 86990,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Laptop",
        "icon":"../assets/sidebar/tv.png"
    },

 
    {
        "id": "price_1MUjhYSJVCB993v38Qhtw6VP",
        "title": "Stereo Gaming Headset for PS4",
        "description":"Clear sound operating strong brass, splendid ambient noise isolation and high precision 40mm magnetic neodymium driver, acoustic positioning precision enhance the sensitivity of the speaker unit, bringing you vivid sound field, sound clarity, shock feeling sound. Perfect for various games like Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.",
        "image":"https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SX679_.jpg",
        "price": 1847,
        "deal":"deal",
        "mainCategory":"gaming",
        "commonCategory":"Headset",
        "icon":"../assets/sidebar/tv.png"
    },
    {
        "id": "price_1MUjhySJVCB993v35aBKycS2",
        "title": "SAMSUNG Galaxy F23 5G ",
        "description":"Samsung Galaxy F23 5G mobile phone.  ",
        "image":"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70",
        "price": 14999,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Mobile",
        "icon":"../assets/sidebar/tv.png"
    },

    {
        "id": "price_1MUjj0SJVCB993v3VTNaSkCm29",
        "title": "Motovolt Lithium-ion (Li-ion) Electric Cycle",
        "description":"India’s first MUC, it can carry up to 120 kg. It is a smart, heavy duty vehicle that works brilliantly for Indian roads and provides the rider a comfortable riding experience. Frame : Steel Exterior Dimension(L*W*H): 1850*645*1010 (mm) Net Weight (Kg): 27 Kg Rated Capacity: ? 120 Kg Max Speed: 25 Kmph Acceleration: < 9 sec (0 -25 Kmph) Battery Capacity: 216wh, 432wh, 576wh Battery Type: Li-ion Battery",
        "image":"https://rukminim1.flixcart.com/image/416/416/kzogn0w0/electric-cycle/2/d/j/kivo-standard-normal-range-balck-18-5-motovolt-single-speed-original-imagbn8f8vaghpgu.jpeg?q=70",
        "price": 100000,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Laptop",
        "icon":"../assets/sidebar/tv.png"
    },
    {
        "id": "price_1MUjjMSJVCB993v3bryJ9Vju",
        "title": "mizi Portable Travel USB Wireless Magnetic Fast Charger ",
        "description":"MAGNETIC INDUCTION CHARGING? Apple watch charger built-in magnetic adsorption module, charge immediately after contact, easily dock your Apple watch. Strong magnetic Adsorption allows you to adjust the angle freely without deviating from the charger center. Powerful magnetic attraction protects the apple watch from falling. ?FAST CHARGING SPEED? iWatch charger built-in intelligent chip, offers original charging speed for your Apple watch SE Series 7 6 5 4 3 2 1, ",
        "image":"https://rukminim1.flixcart.com/image/416/416/l48s9zk0/charging-pad/d/y/u/portable-travel-usb-wireless-magnetic-fast-charger-for-all-a-original-imagf6jd2dfgsznm.jpeg?q=70",
        "price": 599,
        "deal":"deal",
        "mainCategory":"electronics",
        "commonCategory":"Charger",
        "icon":"../assets/sidebar/tv.png"
    },
];


const cardContainer = document.getElementById('card-container');

for (let i = 0; i < productsArray.length; i++) {
  const product = productsArray[i];
  const card = `
        <div class="productCard">
          <div class="productImage">
            <img src="${product.image}" alt="">
          </div>
          <div class="productContent">
            <h2>Gaming Keyboard and Mouse and Gaming Headset</h2>
            <p>₹ 4593.00</p>
          
          <div class="btns">
            <div class="flex items-center">
              <a href="#" class="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-4 rounded-l">
                Buy Now
              </a>
              <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r">
                Add to Cart
              </a>
            </div>
            </div>
          </div>
        </div>
  `;
  cardContainer.innerHTML += card;
}



