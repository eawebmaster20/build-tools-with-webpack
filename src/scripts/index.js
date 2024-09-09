import _ from 'lodash';

document.addEventListener('DOMContentLoaded',() => {
    const tools =[
        {name: ' Webpack'},
        {name: ' Babel'},
        {name: ' ESlint'},
        {name: ' Jest'},
    ];

    const toolsList = document.getElementById('tools-list');
    tools.forEach(tool => {
        const li = document.createElement('li');
        li.textContent = _.startCase(tool.name);
        toolsList.appendChild(li);
    })
})