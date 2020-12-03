import Button from './button.js'
import AbstractList from './abstractlist.js'
import Cart from './cart.js'
import Form from './form.js'
import GoodItem from './gooditem.js'
import GoodItemInCart from './gooditemcart.js'
import List from './list.js'

import './style.css'

const CartInstance = new Cart();
const ListInstance = new List(CartInstance);
const FormInstance = new Form();