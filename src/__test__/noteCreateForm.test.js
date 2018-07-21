import React from 'react';
import { configure, mount } from 'enzyme';
import faker from 'faker';
import Adapter from 'enzyme-adapter-react-16';
import NoteCreateForm from '../components/note-create-form/noteCreateForm';

configure({ adapter: new Adapter() });

describe('NoteCreateForm testing', () => {
  let mountedNoteCreateForm;

  beforeEach(() => {
    mountedNoteCreateForm = mount(<NoteCreateForm />);
  });

  afterEach(() => {
    mountedNoteCreateForm.unmount();
  });

  test('Initial state simple test', () => {
    expect(mountedNoteCreateForm.state('title')).toBe('');
    expect(mountedNoteCreateForm.state('content')).toBe('');
  });

  test('Set state works', () => {
    const mockTitle = faker.lorem.words(2);
    const mockContent = faker.lorem.words(4);
    
    mountedNoteCreateForm.setState({ 
      title: mockTitle, 
      content: mockContent,
    });

    expect(mountedNoteCreateForm.state('title')).toBe(mockTitle);
    expect(mountedNoteCreateForm.state('content')).toBe(mockContent);
  });
});
