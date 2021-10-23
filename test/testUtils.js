import { checkPropTypes } from 'prop-types';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
  let propError;
  const t = console.error;
  console.error = msg => { throw new Error(msg) };
  try {
    checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  } catch (error) {
    propError = error;
  }
 
  expect(propError).toBeUndefined();
  console.error = t;
}