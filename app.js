
import { saveAs, saveEdit, loadOpen } from './fsUtilities.js';

(function() {

let state = {
    arr: [0],
    dataA: 0,
    dataB: 0,
    dataC: 0,
    fileHandle: null,
}


function reducers(action, value) {
    switch(action) {
        case 'updateState':
            data.state = value;
            break;
        case 'updateFileHandle':
            data.state.fileHandle = value;
            break;
        default:
            console.log('reducer default');
    }
}  // end of reducers

function setState(action, value) {
    reducers(action, value);
}

function render(id, content) {
    const display = `Array: [ ${content.arr} ] <br> dataA: ${content.dataA} <br> dataB: ${content.dataB} <br> dataC: ${content.dataC} <br> fileHandle: ${content.fileHandle}`;

    document.getElementById(id).innerHTML = display;
}


const data = {
    state: state,
    setState: setState,     // fn
    render: render,         // fn
}


const btnSaveAs = document.getElementById("btnSaveAs");
const btnSaveEdit = document.getElementById("btnSaveEdit");
const btnLoad = document.getElementById("btnLoad");
const btnUpdateIncrement = document.getElementById("btnUpdateIncrement");
const btnUpdateDecrement = document.getElementById("btnUpdateDecrement");


function updateState(increment) {
    if (increment) {
        data.state.dataA ++;
        data.state.dataB ++;
        data.state.dataC ++;
    } else {
        data.state.dataA --;
        data.state.dataB --;
        data.state.dataC --;
    }

    data.state.arr.push(data.state.dataA);
    data.render('displayState', data.state);
}

data.render('displayState', data.state);


btnSaveAs.addEventListener("click", () => saveAs(data));
btnSaveEdit.addEventListener("click", () => saveEdit(data));
btnLoad.addEventListener("click", () => loadOpen(data));
btnUpdateIncrement.addEventListener("click", () => updateState(true));
btnUpdateDecrement.addEventListener("click", () => updateState(false));



}()); /* END OF Self-Invoking Anonymous Function (SIAF) - MAIN app.js Function */
