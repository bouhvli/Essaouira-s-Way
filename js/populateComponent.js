const locations = [
  {
    name: "Port of Essaouira",
    lat: 31.509592417760935,
    lng: -9.772801199999998,
    description: "The Port de Essaouira is a historic fort and fishing port that attracts many photography enthusiasts. While it offers scenic views, the area can be unpleasant due to its strong odor and unkempt appearance with piles of decaying nets and broken equipment scattered throughout.<br/> Despite actual fishermen present, there seems to be little activity during off-seasons. However, the bright blue boats give a striking visual appeal for photographers seeking adventure in their shots.",
    image: [
      './assets/port_2.jpg',
      './assets/Port_3.jpeg',
      './assets/Port_1.jpeg',
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
      './assets/medina-essaouira.jpg',
      './assets/DSC2433.jpg',
      './assets/DSC2472.jpg',
      './assets/essaouira-remparts-de-la-medina.webp',
      './assets/streets_Essaouira.jpeg',
      './assets/2175594589_27ba5deeb8_b.jpg'
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
      './assets/galerie-la-kasbah-1.jpg',
      './assets/galerie-la-kasbah_1.jpg',
      './assets/galerie-la-kasbah-2.jpg',
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
      './assets/Dar-Souiri-1.jpg',
      './assets/Dar-Souiri-2.jpg',
      './assets/Dar-Souiri-3.jpg',
      './assets/Dar-Souiri-4.jpg',
      './assets/Dar-Souiri-5.jpg_large',
      './assets/Dar-Souiri-6.jpg'
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
      './assets/vagabond-1.jpg',
      './assets/vagabond-2.jpeg',
      './assets/vagabond-3.jpg',
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
      './assets/horse-1.jpg',
      './assets/horse-2.jpg',
      './assets/horse-3.jpg',
      './assets/horse-4.jpg',
      './assets/horse-5.jpeg',
      './assets/horse-6.jpg',
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
      './assets/sqala-1.jpg',
      './assets/sqala-2.webp',
      './assets/sqala-3.webp',
      './assets/sqala-4.webp',
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
      './assets/salut-1.jpg',
      './assets/Salut-2.jpg',
      './assets/salut-3.jpg',
      './assets/salut-4.webp',
      './assets/salut-5.webp',
      './assets/salut-6.jpg'
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

function populateLocations() {
  const container = document.getElementById("locationsContainer");
  locations.forEach(location => {
    const locationDiv = document.createElement("div");
    locationDiv.className = "p-4";

    locationDiv.innerHTML = `
      <div class="flex items-stretch justify-between gap-4 rounded-xl bg-[#FFFFFF] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
        <div class="flex flex-[2_2_0px] flex-col gap-4">
          <div class="flex flex-col gap-1">
            <p class="text-[#141414] text-base font-bold leading-tight">${location.name}</p>
            <p class="text-[#3E4D5B] text-sm font-normal leading-normal">
              ${location.description}
            </p>
          </div>
          <button
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#F0F2F5] text-[#141414] pr-2 gap-1 text-sm font-medium leading-normal w-fit"
          >
            <div class="text-[#141414]" data-icon="ArrowRight" data-size="18px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                ></path>
              </svg>
            </div>
            <span class="truncate"><a href="../pages/details.html">See More</a></span>
          </button>
        </div>
        <div
          class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
          style='background-image: url("${location.image[0]}");'
        ></div>
      </div>
    `;

    container.appendChild(locationDiv);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateLocations();
});