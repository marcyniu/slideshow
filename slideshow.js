showFiles = () => {
    let fileObjects = document.getElementById('filePicker');

    hideManageDiv();

    //console.log(fileObjects.files);
    let idx = 0;
    let noOfElements = fileObjects.files.length;
    let imagesContainer = document.getElementById('imagesContainer');

    let id = setInterval(() => {
            //Get new image path:
            let imagePath = fileObjects.files[idx].webkitRelativePath;
            console.log(imagePath);

            //Create new image element:
            let element = document.createElement('iframe');
            //element.src = 'file:///home/developer/' + imagePath;
            element.src = '/home/developer/' + imagePath;
            element.style.maxHeight = '100%';
            element.style.maxWidth = '100%';
            element.id = 'imege_' + idx;
            //element.crossOrigin = 'Anonymous';

            //Remove already existing image:
            if (idx > 0) imagesContainer.removeChild(imagesContainer.childNodes[0]);

            //Display new image:
            imagesContainer.appendChild(element);

            //Bump interator:
            idx++;
            //When idx equals to number of elements then break/finish interval:
            if (idx === noOfElements) clearInterval(id);
        },
        5000);
}

hideManageDiv = () => {
    hideManageDiv
    let manageDiv = document.getElementById('manageDiv');
    manageDiv.style.display = 'none';
}