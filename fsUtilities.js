// Module handles file system (fs) handling
//    loading and opening, saveAs, saveEdit

async function saveAs(data) {

    const options = {
        suggestedName: 'state.json',
        types: [
            {
                description: "state file",
                accept: {
                    "application/json": [".json"],
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
    };

    const fileHandle = await showSaveFilePicker(options);
    data.setState('updateFileHandle', fileHandle);

    const writable = await fileHandle.createWritable();
    const values = JSON.stringify(data.state);
    await writable.write(values);
    await writable.close();
}  // end saveAs()


async function saveEdit(data) {

    const options = {
        types: [
            {
                description: "state file",
                accept: {
                    "application/json": [".json"],
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
    };

    let fileHandle = data.state.fileHandle;
    if (fileHandle === null) {
        [fileHandle] = await window.showOpenFilePicker(options);
        data.setState('updateFileHandle', fileHandle);
    }

    const values = JSON.stringify(data.state);
    const writable = await fileHandle.createWritable();
    await writable.write(values);
    await writable.close();
}


async function loadOpen(data) {

    const options = {
        types: [
            {
                description: "state file",
                accept: {
                    "application/json": [".json"],
                },
            },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
    };

    const [fileHandle] = await showOpenFilePicker(options);
    
    if (fileHandle.kind === "file") {
        const file = await fileHandle.getFile();
        const text = await file.text();
        const value = JSON.parse(text);

        data.setState('updateState', value);
        data.render('displayState', data.state);
        data.setState('updateFileHandle', fileHandle);
    }
}

export { saveAs, saveEdit, loadOpen };