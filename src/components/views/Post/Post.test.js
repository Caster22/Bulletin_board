import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

const author = {
  email: 'testUser1@test.com',
  id: '1',
  name: 'testName-1',
  rank: 'user',
};

const mockPost = {
  creationDate: '09.10.2020',
  creatorId: '1',
  description: 'Integer tempus et urna nec eleifend.',
  editDate: '10.10.2020',
  id: '1',
  shortDesc: 'Lorem ipsum i psu buda',
  title: 'Test_post-1',
};

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <PostComponent
        rank={'2'}
        loggedUser={'user'}
        postAuthor={author}
        selectedPost={mockPost}
      />);
    expect(component).toBeTruthy();
  });
});
