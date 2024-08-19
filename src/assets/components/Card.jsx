import React from 'react';

const cardData = [
  {
    id: 1,
    price: '₹ 30000 per month',
    title: 'The Willows of Plainview',
    location: 'Pushpanagari Apartment, Kothrud',
    beds: 2,
    baths: 2,
    cars: 1,
    isFavorite: true,
    owner: 'Ajit Kumar',
    daysAgo: 1,
    image: 'src//assets//Rectangle 3218.png'
  },
  {
    id: 2,
    price: '₹ 30000 per month',
    title: '1BHK SKYi Songbirds',
    location: 'Opposite Symbiosis College, near Pune apt',
    beds: 1,
    baths: 1,
    cars: 1,
    isFavorite: false,
    owner: 'Vishal Pandit',
    daysAgo: 2,
    image: 'src//assets//Rectangle 3219.png'
  },
  {
    id: 3,
    price: '₹ 30000 per month',
    title: 'Paranjape Blue Ridge',
    location: 'Wanwadi, Pune, Maharashtra',
    beds: 2,
    baths: 2,
    cars: 2,
    isFavorite: true,
    owner: 'Anil Pore',
    daysAgo: 3,
    image: 'src//assets//Rectangle 3220.png'
  },
  {
    id: 4,
    price: '₹ 30000 per month',
    title: 'Kolte Patil Life Republic',
    location: 'Hinjewadi, Pimpri Chinchwad, Maharashtra',
    beds: 3,
    baths: 2,
    cars: 1,
    isFavorite: false,
    owner: 'Vidya Joshi',
    daysAgo: 4,
    image: 'src//assets//Rectangle 3221.png'
  },
  {
    id: 5,
    price: '₹ 32000 per month',
    title: 'Kolte-Patil 24k Glamore',
    location: 'No 545, NIBM Road, Pune,Maharashtra',
    beds: 1,
    baths: 2,
    cars: 1,
    isFavorite: true,
    owner: 'Vikas Dubey',
    daysAgo: 2,
    image: 'src//assets//Rectangle 3222.png'
  },
  {
    id: 6,
    price: '₹ 30000 per month',
    title: 'The Willows of Plainview',
    location: 'Pushpanagari Apartment, Kothrud-415110',
    beds: 2,
    baths: 2,
    cars: 1,
    isFavorite: false,
    owner: 'Heramb Shrivastav',
    daysAgo: 2,
    image: 'src//assets//Rectangle 3223.png'
  },
  {
    id: 7,
    price: '₹ 30000 per month',
    title: 'The Willows of Plainview',
    location: 'Pushpanagari Apartment, Kothrud-415110',
    beds: 1,
    baths: 1,
    cars: 1,
    isFavorite: true,
    owner: 'Dipak Khanna',
    daysAgo: 2,
    image: 'src//assets//Rectangle 3224.png'
  },
  {
    id: 8,
    price: '₹ 30000 per month',
    title: 'Aspen Heights',
    location: 'Pimple Saudagar, Pune',
    beds: 1,
    baths: 2,
    cars: 1,
    isFavorite: false,
    owner: 'Swati Sharma',
    daysAgo: 2,
    image: 'src//assets//Rectangle 3225.png'
  },
];


function Card({ price, title, location, beds, baths, cars, isFavorite, owner, daysAgo, image }) {
  return (
    <div className="h-[447px] w-[100%] sm:w-[388px] border border-gray-300 rounded-lg">
      <div>
        <img className="h-[238px] w-full object-cover" src={image} alt={title} />
      </div>

      <div className="mt-2 h-[24px] w-[90%] flex items-center mx-auto">
        <div className="text-red-600 text-left font-bold flex-1">
          {price}
        </div>
        <img
          className={isFavorite ? 'text-red-600' : ''}
          src="src/assets/favorite.png"
          alt="favorite"
        />
      </div>

      <div className="h-[47px] w-[90%] mt-2 mx-auto">
        <h2 className="w-full text-lg font-semibold text-left mt-3">{title}</h2>
        <div className="mt-2 flex items-center">
          <img src="src/assets/location_on.png" alt="location" />
          <p className="text-gray-500 ml-2">{location}</p>
        </div>
      </div>

      <div className="h-[24px] w-[90%] mt-5 mx-auto flex items-center space-x-3">
        <p>{beds}</p>
        <img src="src/assets/bed.png" alt="bed" />|
        <p>{baths}</p>
        <img src="src/assets/bathtub.png" alt="bathtub" />|
        <p>{cars}</p>
        <img src="src/assets/car_repair.png" alt="car" />|
        <img src="src/assets/pets.png" alt="pets" />
      </div>

      <div className="mt-4 h-[26px] w-[90%] flex items-center mx-auto">
        
        <p className="ml-2 text-gray-600">{owner}</p>
        <p className="ml-auto text-gray-500">{daysAgo} Days ago</p>
      </div>
    </div>
  );
}

function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-4">
      {cardData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default CardGrid;
