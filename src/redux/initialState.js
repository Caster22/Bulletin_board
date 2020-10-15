export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Test_post-1',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Integer tempus et urna nec eleifend. Vivamus id lorem sem. Nulla id ex magna. ' +
          'Donec metus odio, sodales sed sem eu, sagittis luctus odio. Ut ac tortor dignissim, rutrum dolor sit amet,' +
          ' dapibus nulla. Phasellus nisi ligula, interdum commodo dui vel, posuere dignissim ligula.' +
          ' Quisque tempor eget nunc in maximus. Donec ultrices lacus laoreet tincidunt tristique. ' +
          'Integer leo tortor, efficitur quis ligula in, tincidunt egestas mi. Etiam eros lorem, ' +
          'eleifend id bibendum et, consectetur at tortor. Quisque vel ante lobortis, tempor nibh vel,' +
          ' dignissim mauris.',
        creationDate: '09.10.2020',
        editDate: '10.10.2020',
        creatorId: '1',
        status: '1',
      },
      {
        id: '2',
        title: 'Test_post-2',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Aenean aliquam consectetur neque, vitae feugiat lacus. Suspendisse potenti. Phasellus neque sem,' +
          ' sagittis a ultricies a, sagittis quis nisl. Maecenas et dapibus leo. Praesent quis libero dui.' +
          ' Sed orci ante, aliquam at erat at, ornare porttitor massa. Etiam consectetur, lorem non maximus aliquet,' +
          ' ante ex semper ex, nec porttitor augue quam ut dolor. Cras posuere fermentum augue sit amet mattis. ' +
          'Integer faucibus finibus consequat. Curabitur commodo vitae justo in condimentum.' +
          ' Suspendisse eget nulla diam. Nulla quis libero posuere, aliquam magna id, euismod quam.' +
          ' Sed id elit et velit pharetra hendrerit id vel metus. Cras vitae magna sit amet augue commodo tincidunt.',
        creationDate: '08.10.2020',
        editDate: '09.10.2020',
        creatorId: '2',
        status: '2',
      },
      {
        id: '3',
        title: 'Test_post-3',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Etiam non aliquam ipsum, sed scelerisque diam. Morbi iaculis, arcu a varius aliquet,' +
          ' dui erat scelerisque erat, eu ullamcorper risus eros nec erat. Nam vitae ex turpis.' +
          ' Mauris dignissim auctor orci quis blandit. Cras condimentum, quam at euismod laoreet,' +
          ' risus augue hendrerit orci, et luctus ipsum lacus vitae ipsum. Phasellus malesuada neque iaculis,' +
          ' auctor tellus eu, luctus sapien. Quisque a neque non ante consequat tincidunt eu ut nisl.' +
          ' Sed a iaculis eros. Praesent quis turpis a nisi imperdiet commodo.' +
          ' Fusce rutrum eros in arcu suscipit lobortis. Nulla ante erat, dictum vel metus nec,' +
          ' scelerisque mattis ipsum. Proin orci nibh, tincidunt quis posuere sed, gravida vel est. ' +
          'Integer est dui, ultricies sed semper nec, efficitur ac ex. Sed iaculis tincidunt velit,' +
          ' a placerat ante ultricies porta.',
        creationDate: '09.10.2020',
        editDate: '10.10.2020',
        creatorId: '3',
        status: '3',
      },
      {
        id: '4',
        title: 'Test_post-4',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Cras vitae porta velit. Cras auctor justo sed dui vulputate lobortis. ' +
          'Donec tincidunt nibh sed viverra ornare. Suspendisse orci augue, efficitur ut metus vitae,' +
          ' laoreet venenatis odio. Donec mattis varius malesuada. Quisque metus urna, laoreet at eros in, ' +
          'euismod suscipit orci. Orci varius natoque penatibus et magnis dis parturient montes, ' +
          'nascetur ridiculus mus.',
        creationDate: '11.10.2020',
        editDate: '11.10.2020',
        creatorId: '4',
        status: '1',
      },
      {
        id: '5',
        title: 'Test_post-5',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Vivamus ut molestie elit. Pellentesque porta iaculis rhoncus. Phasellus vehicula placerat purus,' +
          ' eu ullamcorper turpis posuere id. Nunc ut enim ac urna maximus ultrices dictum in arcu.' +
          ' Aenean suscipit eleifend imperdiet. Nulla placerat eros at ligula egestas,' +
          ' pharetra cursus mauris vulputate. Mauris suscipit efficitur magna vitae hendrerit.' +
          ' Aenean ultricies ante vitae leo imperdiet, et convallis ligula dictum. Duis eu nunc iaculis,' +
          ' dapibus lacus non, interdum est.',
        creationDate: '05.10.2020',
        editDate: '10.10.2020',
        creatorId: '5',
        status: '2',
      },
      {
        id: '6',
        title: 'Test_post-6',
        shortDesc: 'Lorem ipsum i psu buda',
        description: 'Proin tristique velit nec dapibus accumsan. Praesent hendrerit sit amet justo id tincidunt.' +
          ' Nulla dapibus pellentesque nibh, non aliquet odio mattis ut. Nulla accumsan, nunc id rhoncus egestas,' +
          ' nunc lacus porta sapien, a placerat arcu justo quis metus. Quisque at eros at ipsum ultricies vulputate.' +
          ' Nulla facilisi. Integer sit amet felis quis dui venenatis sodales placerat eu nisl. Suspendisse potenti.',
        creationDate: '10.10.2020',
        editDate: '11.10.2020',
        creatorId: '6',
        status: '3',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    loggedUser: '1',
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
