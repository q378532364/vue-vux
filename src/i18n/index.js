/*
 * @Author: @378532364
 * @Date: 2020-05-15 14:37:35
 * @LastEditTime: 2020-05-15 18:53:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-vue\src\i18n\index.js
 */
/* eslint-disable */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './zh-CN'
import zhTW from './zh-FT'
import enUS from './en-US'

Vue.use(VueI18n)

export const messages = {
  'zh-CN': {
    '_lang': '简体中文',
    ...zhCN,

  },
  'zh-TW': {
    '_lang': '繁體中文',
    ...zhTW,

  },
  'en-US': {
    '_lang': 'English',
    ...enUS,
  }
}
export default new VueI18n({
  locale: window.localStorage.getItem('language') || 'en-US',
  messages
})
