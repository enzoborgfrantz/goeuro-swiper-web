export const getSearchOptions = (depPos, arrPos) => ({
  searchOptions: {
    departurePosition: {
      id: depPos,
    },
    arrivalPosition: {
      id: arrPos,
    },
    travelModes: [
      'Flight',
      'Train',
      'Bus',
    ],
    departureDate: '2017-06-16',
    passengers: [
      {
        age: 12,
      },
    ],
    userInfo: {
      identifier: '0.6b6ahzwibjx',
      domain: '.com',
      locale: 'en',
      currency: 'EUR',
    },
    abTestParameters: [],
  },
});
