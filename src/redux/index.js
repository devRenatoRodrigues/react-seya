// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!
import { createStore } from 'redux';

const reducer = (state = INITIAL_STATE, action) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;