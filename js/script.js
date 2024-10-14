
// Define locations and descriptions
const locations = [
  {
    name: "Port of Essaouira",
    lat: 31.509592417760935,
    lng: -9.772801199999998,
    description: "The Port de Essaouira is a historic fort and fishing port that attracts many photography enthusiasts. While it offers scenic views, the area can be unpleasant due to its strong odor and unkempt appearance with piles of decaying nets and broken equipment scattered throughout.<br/> Despite actual fishermen present, there seems to be little activity during off-seasons. However, the bright blue boats give a striking visual appeal for photographers seeking adventure in their shots.",
    image: [
      '../assets/port_2.jpg',
      '../assets/Port_3.jpeg',
      '../assets/Port_1.jpeg',
    ],
    tags: [
      'Port'
    ]
  },
  {
    name: "Explore the Medina",
    lat: 31.514526535779254,
    lng: -9.769535139606665,
    description: "Essaouira's Medina, an ancient fortified city with majestic 18th-century entrances such as Bab Doukkala and accessible ramparts providing scenic ocean vistas, is a charming location. Squares like Moulay Hassan and arcaded Marché aux Grains are decorated with outdoor cafés, while vibrant alleyways are packed with independent art galleries, Moroccan restaurants, and stores vending rugs, spices, and pottery. The traditional riad hotels can be found within courtyard houses.",
    image: [
      '../assets/medina-essaouira.jpg',
      '../assets/DSC2433.jpg',
      '../assets/DSC2472.jpg',
      '../assets/essaouira-remparts-de-la-medina.webp',
      '../assets/streets_Essaouira.jpeg',
      '../assets/2175594589_27ba5deeb8_b.jpg'
    ],
    tags: [
      'Historic Sites',
      'Neighborhoods'
    ]
  },
  {
    name: "Gallery Kasbah",
    lat: 31.513035532265178,
    lng: -9.77100782707093,
    description: "The Kasbah Gallery is a beautiful and well-organized art gallery with sculptures, paintings, ceramics, modern works, and impressionist pieces on several floors. The building itself is stunning with a large courtyard and views of the city from the top floors. It's owned by three brothers who are currently working on opening a restaurant and coffee shop on the terrace.",
    image: [
      '../assets/galerie-la-kasbah-1.jpg',
      '../assets/galerie-la-kasbah_1.jpg',
      '../assets/galerie-la-kasbah-2.jpg',
    ],
    tags: [
      "Art gallery",
      "Museums",
      "Handicraft"
    ]
  },
  {
    name: "Dar Souiri",
    lat: 31.51189151403791,
    lng: -9.76998774233024,
    description: "Dar Essaouiri is rich in history and one of Essaouira’s landmarks. It is managed by the Mogador Association and receives many visitors annually by organizing cultural festivals and exhibitions.",
    image: [
      '../assets/Dar-Souiri-1.jpg',
      '../assets/Dar-Souiri-2.jpg',
      '../assets/Dar-Souiri-3.jpg',
      '../assets/Dar-Souiri-4.jpg',
      '../assets/Dar-Souiri-5.jpg_large',
      '../assets/Dar-Souiri-6.jpg'
    ],
    tags: [
      "Cultural center",
      "Sights & Landmarks",
      "Civic Centers"
    ]
  },
  {
    name: "Ocean Vagabond",
    lat: 31.496823574384468,
    lng: -9.763451415339514,
    description: "This small beachside restaurant offers an international selection of dishes, in a pretty garden right next to the beach. The atmosphere is Caribbean themed, with rustic wicker furniture and authentic artwork adorning the walls. There's a range of sumptuous meals to choose from, such as duck breast with candied mango, Toulouse sausage and lentils, or fish from the day's catch grilled or smoked.",
    image: [
      '../assets/vagabond-1.jpg',
      '../assets/vagabond-2.jpeg',
      '../assets/vagabond-3.jpg',
    ],
    tags: [
      'Restaurant',
      'Mediterranean restaurant',
      'Surf school',
      'Surf shop',
      'Wine bar',
    ]
  },
  {
    name: "Essaouira Beach Horse Riding",
    lat: 31.496732092868434,
    lng: -9.763730365046374,
    description: "Horseback riding tours along the beach, providing a unique perspective of Essaouira's sights. <br/>It's not a traditional horse riding, it's pure magic where you discover the beautiful corners of the area, enjoy the feeling of being united with the horse, meet wonderful people, taste amazing food. People who organize it do it with all their heart, and you can feel it a lot.",
    image: [
      '../assets/horse-1.jpg',
      '../assets/horse-2.jpg',
      '../assets/horse-3.jpg',
      '../assets/horse-4.jpg',
      '../assets/horse-5.jpeg',
      '../assets/horse-6.jpg',
    ],
    tags: [
      'Horseback riding',
      'Outdoor Activities',
      'Equestrian Trails',
      'Horse Tracks'
    ]
  },
  {
    name: "Seqala",
    lat: 31.515312478507465,
    lng: -9.772173876670038,
    description: "The Sqala of the Kasbah, also known as the Sqala of the City or the Sqala of the Medina, is an artillery platform dating back to the 18th century and one of the main fortifications of Essaouira, Morocco. It is located along the Atlantic Ocean, within the kasbah.",
    image: [
      '../assets/sqala-1.jpg',
      '../assets/sqala-2.webp',
      '../assets/sqala-3.webp',
      '../assets/sqala-4.webp',
    ],
    tags: [
      'Historic Sites',
      'Neighborhoods'
    ]
  },
  {
    name: "Salut Maroc",
    lat: 31.51396652233688,
    lng: -9.772327247929466,
    description: "Salut Maroc! has all the character and charm of a Boutique Hotel with magnificent views overlooking the Atlantic Ocean and the historic ramparts of the old Medina with it's battery of bronze cannons. <br/> A fusion of Islamic patterns, vibrant colours, and an eclectic mix of Contemporary and Antique furnishings.",
    image: [
      '../assets/salut-1.jpg',
      '../assets/Salut-2.jpg',
      '../assets/salut-3.jpg',
      '../assets/salut-4.webp',
      '../assets/salut-5.webp',
      '../assets/salut-6.jpg'
    ],
    tags: [
      'Restaurant',
      'Mediterranean restaurant',
      'Spa',
      'Hotel',
      'Hammam'
    ]
  }
];
function createPopup(location) {
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = `<h2>Welcome to Essaouira!</h2>`;  // Default content
  // Rest of your code for creating popup and marker...
}


// Initialize map
const map = L.map('mapid').setView([31.51, -9.77], 15);

// Add basemap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
for (var i = 0; i < locations.length - 1; i++) {
  var start = L.latLng(locations[i].lat, locations[i].lng);
  var end = L.latLng(locations[i + 1].lat, locations[i + 1].lng);

  // Create the Routing control and add it to the map
  L.Routing.control({
    waypoints: [start, end]
  }).addTo(map);
}

// Function to create popups and sidebars
function createPopup(location) {
  const popup = L.popup().setContent(location.name);
  const marker = L.marker([location.lat, location.lng]).bindPopup(popup);

  marker.on('click', function() {
    const sidebar = document.getElementById('sidebar');
    const imageElements = location.image
    .map((image, index) => `
  <div class="relative overflow-hidden h-[140px] rounded-lg">
    <img src="${image}" alt="Image ${index + 1}" class="absolute w-full h-full object-cover" />
  </div>
`).join('');

const tagElements = location.tags
  .map(tag => `<div class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#F0F2F5] pl-4 pr-4">
                <p class="text-[#141414] text-sm font-medium leading-normal">${tag}</p>
              </div>`)
  .join('');

sidebar.innerHTML = `
  <h2 class="text-xl text-[#141414] mb-4 font-semibold">${location.name}</h2>
  <p class="mb-4 text-[#3E4D5B]">${location.description}</p>
  <div class="grid grid-cols-3 gap-4 mt-4 mb-4">${imageElements}</div>
  <div class="flex flex-wrap gap-4">${tagElements}</div>
  
`;


    
  });

  return marker;
}

// Add markers and popups/sidebars to the map
locations.forEach(location => createPopup(location).addTo(map));
