import React from 'react';
import { configure, mount } from 'enzyme';
import faker from 'faker';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;

  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
  });

  afterEach(() => {
    mountedDashboard.unmount();
  });

  test('Initial state simple test', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Set state works', () => {
    const mockNote = { 
      _id: '1234',
      title: faker.lorem.words(2), 
      content: faker.lorem.words(4), 
    };

    mountedDashboard.setState({ notes: [mockNote] });

    const savedNote = mountedDashboard.state('notes')[0];

    expect(mockNote._id).toBe(savedNote._id);
    expect(mockNote.title).toBe(savedNote.title);
    expect(mockNote.content).toBe(savedNote.content);
  });

  test('Add new note with #addNote method', () => {
    const mockNote = { 
      title: faker.lorem.words(2),
      content: faker.lorem.words(4),
    };

    mountedDashboard.instance().addNote(mockNote);

    const savedNote = mountedDashboard.state('notes')[0];

    expect(mockNote.title).toBe(savedNote.title);
    expect(mockNote.content).toBe(savedNote.content);
  });
});
