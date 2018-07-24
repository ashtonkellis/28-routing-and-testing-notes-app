import React from 'react';
import { configure, mount } from 'enzyme';
import faker from 'faker';
import Adapter from 'enzyme-adapter-react-16';
import noteForm from '../components/note-form/noteForm';

configure({ adapter: new Adapter() });

describe('noteForm testing', () => {
  let mountedNoteForm;

  beforeEach(() => {
    mountedNoteForm = mount(<noteForm />);
  });

  afterEach(() => {
    mountedNoteForm.unmount();
  });

  test('Initial state simple test', () => {
    expect(mountedNoteForm.state('title')).toBe('');
    expect(mountedNoteForm.state('content')).toBe('');
  });

  test('Set state works', () => {
    const mockTitle = faker.lorem.words(2);
    const mockContent = faker.lorem.words(4);
    
    mountedNoteForm.setState({ 
      title: mockTitle, 
      content: mockContent,
    });

    expect(mountedNoteForm.state('title')).toBe(mockTitle);
    expect(mountedNoteForm.state('content')).toBe(mockContent);
  });
});
