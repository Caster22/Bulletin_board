export const initialState = {
  users: {
    loggedUser: '',
    selectedRank: 'Not logged',
    list: [
      {
        id: '1',
        name: 'testName-1',
        rank: 'user',
        email: 'testUser1@test.com',
      },
      {
        id: '2',
        name: 'testName-2',
        rank: 'user',
        email: 'testUser2@test.com',
      },
      {
        id: '3',
        name: 'testName-3',
        rank: 'admin',
        email: 'testUser3@test.com',
      },
      {
        id: '4',
        name: 'testName-4',
        rank: 'user',
        email: 'testUser4@test.com',
      },
      {
        id: '5',
        name: 'testName-5',
        rank: 'user',
        email: 'testUser5@test.com',
      },
      {
        id: '6',
        name: 'testName-6',
        rank: 'admin',
        email: 'testUser6@test.com',
      },
      {
        id: '7',
        rank: 'Not logged',
      },
    ],
  },
  status: [
    {
      id: '1',
      statusName: 'draft',
    },
    {
      id: '2',
      statusName: 'published',
    },
    {
      id: '3',
      statusName: 'closed',
    },
  ],
};
