interface Entity {
  id: number;
  name: string;
  rating: number;
  type: string;
  image: string;
}

const entities: Entity[] = [
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/918fd028-2d0b-11e6-9dc6-455dca91e85a.jpg',
    name: 'Steven Tyler',
    type: 'Music Artist',
    rating: 48.78,
    id: 1,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/d5c58e4d-2d01-11e6-8926-c9184f6a64c4.jpg',
    name: 'Carrie Underwood',
    type: 'Music Artist',
    rating: 60.07,
    id: 2,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/a27040d1-2d09-11e6-a4bd-71dbf5f2854a.jpg',
    name: 'Pink',
    type: 'Music Artist',
    rating: 53.78,
    id: 3,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/bf62c9b1-2cf9-11e6-9570-cf1c514d3e57.jpg',
    name: 'Alicia Keys',
    type: 'Music Artist',
    rating: 58.27,
    id: 4,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/7f946872-2cf9-11e6-a4bd-71dbf5f2854a.jpg',
    name: 'Adele',
    type: 'Music Artist',
    rating: 63.87,
    id: 5,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/b6856da3-2d06-11e6-9dc6-455dca91e85a.jpg',
    name: 'Kelly Clarkson',
    type: 'Music Artist',
    rating: 56.88,
    id: 6,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/8dd56bae-2d01-11e6-a4bd-71dbf5f2854a.jpg',
    name: 'Bruno Mars',
    type: 'Music Artist',
    rating: 55.61,
    id: 7,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/951cb8c1-2d06-11e6-bce7-6ff134176666.jpg',
    name: 'Justin Timberlake',
    type: 'Music Artist',
    rating: 55.26,
    id: 8,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/a27040d1-2d09-11e6-a4bd-71dbf5f2854a.jpg',
    name: 'Pink',
    type: 'Music Artist',
    rating: 53.78,
    id: 3,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/7f946872-2cf9-11e6-a4bd-71dbf5f2854a.jpg',
    name: 'Adele',
    type: 'Music Artist',
    rating: 63.87,
    id: 5,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/f9f38add-2d06-11e6-bce7-6ff134176666.jpg',
    name: 'Lady Gaga',
    type: 'Music Artist',
    rating: 52.78,
    id: 9,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/bf62c9b1-2cf9-11e6-9570-cf1c514d3e57.jpg',
    name: 'Alicia Keys',
    type: 'Music Artist',
    rating: 58.27,
    id: 4,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/00852193-2d05-11e6-9570-cf1c514d3e57.jpg',
    name: 'Gwen Stefani',
    type: 'Music Artist',
    rating: 52.25,
    id: 11,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/918fd028-2d0b-11e6-9dc6-455dca91e85a.jpg',
    name: 'Steven Tyler',
    type: 'Music Artist',
    rating: 48.78,
    id: 1,
  },
  {
    image: 'https://d3hjzzsa8cr26l.cloudfront.net/bf62c9b1-2cf9-11e6-9570-cf1c514d3e57.jpg',
    name: 'Alicia Keys',
    type: 'Music Artist',
    rating: 58.27,
    id: 4,
  },
];


/*

Given an entities array

Write a function which will:
  1. returns a list of unique entities,
  2. ratings value of which is greater than 50,
  3. sorted in descending order by the rating.

Furthermore each rating value should be rounded to the nearest integer.

*/

function filterEntities(entities: Entity[]): Entity[] {
  let result: Entity[] = entities;

  // your code

  return result;
}

const filteredEntities = filterEntities(entities);

const appDiv: HTMLElement | null = document.getElementById('app');

if (appDiv) {
  appDiv.innerHTML = `
    <h1>Entities</h1>
    <div class="grid">
    ${
      filteredEntities.map((entity, i) => `
        <div class="entity">
          <h2 class="entity-name">${entity.name}</h2>

          <img src="${entity.image}" alt="Entity image" />
          <p class="rating">${entity.rating}</p>
        </div>
    `).join('')}
    </div>`;
}

