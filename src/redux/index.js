// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!
import { legacy_createStore as createStore } from 'redux';
import  defeatSaga  from './reducers/cosmoReducer.js'


const store = createStore(defeatSaga);

export default store;
