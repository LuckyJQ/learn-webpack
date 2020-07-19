import Header from './header';
import Content from './content';
import Footer from './footer';
import './style.css';
import '@babel/polyfill'

import Avatar from './avatar.jpg';
console.log(Avatar);

var img = new Image();
img.src = Avatar;
var root = document.getElementById('root');
root.classList.add('font-color-red');
root.appendChild(img);


new Header();
new Content();
new Footer();