import { combineReducers } from 'redux';

import ativos from './ativos';
import passivos from './passivos';

export default combineReducers({
    ativos,
    passivos
});