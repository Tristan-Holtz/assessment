import React from 'react';
import {
  UrlContainer,
  mapStateToProps,
  mapDispatchToProps
} from './UrlContainer';
import { shallow } from 'enzyme';
import { setUrls } from '../../actions';

describe('UrlContainer', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {
      setUrls: jest.fn(),
      urls: [
        {
          id: 1,
          long_url:
            'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          short_url: 'http://localhost:3001/useshorturl/1',
          title: 'Awesome photo'
        }
      ]
    };
    wrapper = shallow(<UrlContainer {...mockProps} />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with urls', () => {
      const mockState = {
        urls: [
          {
            id: 1,
            long_url:
              'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            short_url: 'http://localhost:3001/useshorturl/1',
            title: 'Awesome photo'
          }
        ],
        nonsense: '',
        moreNonsense: true
      };

      const expected = {
        urls: [
          {
            id: 1,
            long_url:
              'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            short_url: 'http://localhost:3001/useshorturl/1',
            title: 'Awesome photo'
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with setUrls', () => {
      const mockDispatch = jest.fn();
      const urls = [
        {
          id: 1,
          long_url:
            'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          short_url: 'http://localhost:3001/useshorturl/1',
          title: 'Awesome photo'
        }
      ];
      const actionToDispatch = setUrls(urls);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setUrls(urls);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
