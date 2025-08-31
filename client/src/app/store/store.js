import { legacy_createStore } from 'redux';
import counterReducer from '../../features/contact/counterReducer.jsx';

export function configureTheStore() {
  return legacy_createStore(counterReducer);
  }
