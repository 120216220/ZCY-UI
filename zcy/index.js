// import './utils/polyfill'

import Lang from './lang'

import Button from './components/button/'

import Menu from './components/menu/'
import Message from './components/message/'
import Modal from './components/modal/'
import Notification from './components/notification/'
import './components/popover/'

const ZCY = require('./core')

export default window.ZCY = Object.assign({
  version: '0.0.1',
  Lang,
  Button,
  Menu,
  Message,
  Modal,
  Notification
}, ZCY)
