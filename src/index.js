// import _ from 'lodash';
import './style.css';
import Icon from './test.jpg';
import Data from './data.xml';
import Notes from './data.csv';
import printMe  from './print';
function component() {
    const element =  document.createElement('div');
    const btn = document.createElement('button');
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    // element.classList.add('hello')
    // const myIcon = new Image();
    // myIcon.src = Icon;
    // console.log(Data);
    //  console.log(Notes);
    btn.innerHTML = 'CLick me and check the console2';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
