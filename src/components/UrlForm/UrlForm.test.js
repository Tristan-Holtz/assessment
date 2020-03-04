import React from 'react';
import { UrlForm, mapDispatchToProps } from './UrlForm';
import { shallow } from 'enzyme';
import { setUrls } from '../../actions';
import { postUrl } from '../../apiCalls';

describe('UrlForm', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = { setUrls: jest.fn() };
    wrapper = shallow(<UrlForm {...mockProps} />);
  });

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleNameChange', () => {
    it('should be able to update title', () => {
      const mockEvent = {
        target: {
          name: 'title',
          value: 'Some URL'
        }
      };

      wrapper.instance().handleNameChange(mockEvent);
      expect(wrapper.state('title')).toEqual('Some URL');
    });

    it('should be able to update urlToShorten', () => {
      const mockEvent = {
        target: {
          name: 'urlToShorten',
          value: 'https://github.com/turingschool-examples/url-shortener-api'
        }
      };

      wrapper.instance().handleNameChange(mockEvent);
      expect(wrapper.state('urlToShorten')).toEqual(
        'https://github.com/turingschool-examples/url-shortener-api'
      );
    });
  });

  describe('handleSubmit', () => {
    it('should fire when button is clicked', () => {
      wrapper.instance().handleSubmit = jest.fn();
      wrapper.find('button').simulate('click');

      expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    });
  });

  describe('clearInputs', () => {
    it('should set title in state with empty strings', () => {
      wrapper.instance().clearInputs();
      expect(wrapper.state('title')).toEqual('');
    });

    it('should set urlToShorten in state with empty strings', () => {
      wrapper.instance().clearInputs();
      expect(wrapper.state('urlToShorten')).toEqual('');
    });

    it('should fire when handleSubmit is called', () => {
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: 'urlToShorten',
          value: 'https://github.com/turingschool-examples/url-shortener-api'
        }
      };
      wrapper.instance().clearInputs = jest.fn();
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().clearInputs).toHaveBeenCalled();
    });
  });
});
