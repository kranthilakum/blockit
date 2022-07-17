import { Listing } from '../app/types';

export const fakeList: Listing[] = [
  {
    id: '8692f260-3909-42f5-b40c-8ad20d406090',
    name: 'Used Boat',
    description: 'This is a used boat',
    price: '$100',
    categories: ['boats', 'used'],
    isPosted: true,
    lastUpdated: '2022-02-12',
    trader: {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@mail.com',
    },
    location: {
      id: '1',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
  {
    id: '2b499619-3693-4932-b0fc-89ac82267517',
    name: 'New Boat',
    description: 'This is a new boat',
    price: '$200',
    categories: ['boats', 'new'],
    isPosted: true,
    lastUpdated: '2021-12-27',
    trader: {
      id: '2',
      name: 'Jane Doe',
      email: 'jane.doe@mail.com',
    },
    location: {
      id: '2',
      address: {
        street: '456 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
  {
    id: '3c65a64f-f25f-40c7-ab03-b3f676e1f97c',
    name: 'Used Computer',
    description: 'This is a used computer',
    price: '$300',
    categories: ['computers', 'used'],
    isPosted: true,
    lastUpdated: '2022-03-14',
    trader: {
      id: '3',
      name: 'John Smith',
      email: 'john.smith@mail.com',
    },
    location: {
      id: '3',
      address: {
        street: '789 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
  {
    id: '32daf3d3-d38a-46f3-94ee-5372805a0364',
    name: 'New Computer',
    description: 'This is a new computer',
    price: '$400',
    categories: ['computers', 'new'],
    isPosted: true,
    lastUpdated: '2021-06-23',
    trader: {
      id: '4',
      name: 'Jane Smith',
      email: 'jane.smith@mail.com',
    },
  },
  {
    id: '2d1c6ead-0de5-449b-a88f-1a556e926edd',
    name: 'Baseball gear',
    description: 'This is baseball gear',
    price: '$500',
    categories: ['sports', 'baseball'],
    isPosted: true,
    lastUpdated: '2020-08-12',
    trader: {
      id: '5',
      name: 'George Doe',
      email: 'george.doe@mail.com',
    },
    location: {
      id: '4',
      address: {
        street: '789 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
  {
    id: '2aa767ad-eb46-43a0-9de6-c066af06fa55',
    name: 'Basketball gear',
    description: 'This is basketball gear',
    price: '$600',
    categories: ['sports', 'basketball'],
    isPosted: true,
    lastUpdated: '2022-07-11',
    trader: {
      id: '6',
      name: 'Paul Doe',
      email: 'paul.doe@mail.com',
    },
    location: {
      id: '5',
      address: {
        street: '789 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
];

export const fakeMyList: Listing[] = [
  {
    id: '7fe6a5f0-9809-4dce-9525-bd43069b56b8',
    name: 'Used Laptop',
    description: 'This is a used laptop',
    price: '$100',
    categories: ['computers', 'used'],
    isPosted: false,
    lastUpdated: '2022-02-12',
    trader: {
      id: '1',
      name: 'John Doe',
      email: '',
    },
    location: {
      id: '1',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
  {
    id: '1b95e679-d660-4b38-af3c-3057639cb30f',
    name: 'Used Smartphone',
    description: 'This is a used Smartphone',
    price: '$100',
    categories: ['phones', 'used'],
    isPosted: false,
    lastUpdated: '2022-06-22',
    trader: {
      id: '1',
      name: 'John Doe',
      email: '',
    },
    location: {
      id: '1',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        country: 'USA',
        zip: '12345',
      },
      coordinates: {
        latitude: 37.123,
        longitude: -122.123,
      },
    },
  },
];
