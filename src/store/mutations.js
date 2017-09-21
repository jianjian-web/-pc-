import {
  SET_TITLE
} from './mutation-types.js'

import { setStore, getStore } from '../config/mUtils'
//需要？

export default {
    [SET_TITLE] (state,title) {
        state.mainTitle=title;
    }
}
