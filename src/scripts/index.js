import _ from 'lodash';
import '../styles/main.sass';
import tools from './tools.json'

document.addEventListener('DOMContentLoaded',() => {
    const toolsList = document.getElementById('tools-list');
    tools.forEach(tool => {
        const li = document.createElement('li');
        li.textContent = _.startCase(tool.name);
        toolsList.appendChild(li);
    })
})