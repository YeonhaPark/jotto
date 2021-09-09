import { shallow, ShallowWrapper } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtils';

interface Props {
  success: boolean;
}

const setup = (props: Props): ShallowWrapper => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
