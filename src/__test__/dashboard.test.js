import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../components/dashboard/dashboard';

configure({ adapter: new Adapter() });

describe('Dashboard testing', () => {
  let mountedDashboard;

  beforeEach(() => {
    mountedDashboard = mount(<Dashboard />);
    console.log('MOUNTED DASHBOARD', mountedDashboard);
  });

  afterEach(() => {
    mountedDashboard.unmount();
  });

  test('Initial state simple test', () => {
    expect(mountedDashboard.state('notes')).toEqual([]);
  });

  test('Adding a new note to the state', () => {
    const mockNote = { title: 'mock title', content: 'mock content', _id: '1234' };

    mountedDashboard.setState({ notes: [mockNote] });

    const savedNote = mountedDashboard.state('notes')[0];

    expect(mockNote._id).toBe(savedNote._id);
    expect(mockNote.title).toBe(savedNote.title);
    expect(mockNote.content).toBe(savedNote.content);
  });
});
