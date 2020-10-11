export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Test_post-1',
        description: 'Lorem ipsum i psu buda',
        creationDate: '09.10.2020',
        editDate: '10.10.2020',
        creatorId: '1',
      },
      {
        id: '2',
        title: 'Test_post-2',
        description: 'Lorem ipsum i psu buda',
        creationDate: '08.10.2020',
        editDate: '09.10.2020',
        creatorId: '2',
      },
      {
        id: '3',
        title: 'Test_post-3',
        description: 'Lorem ipsum i psu buda',
        creationDate: '09.10.2020',
        editDate: '10.10.2020',
        creatorId: '3',
      },
      {
        id: '4',
        title: 'Test_post-4',
        description: 'Lorem ipsum i psu buda',
        creationDate: '11.10.2020',
        editDate: '11.10.2020',
        creatorId: '4',
      },
      {
        id: '5',
        title: 'Test_post-5',
        description: 'Lorem ipsum i psu buda',
        creationDate: '05.10.2020',
        editDate: '10.10.2020',
        creatorId: '5',
      },
      {
        id: '6',
        title: 'Test_post-6',
        description: 'Lorem ipsum i psu buda',
        creationDate: '10.10.2020',
        editDate: '11.10.2020',
        creatorId: '6',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    loggedUser: '2',
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
};
