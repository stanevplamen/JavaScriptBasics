function createImagesPreviewer(selector, items) {

    // init container
    var container = document.querySelector(selector);
    styleTheContainer(container);

    // init previev div
    previewDiv = document.createElement('div');
    styleThePreviewDiv(previewDiv);
    container.appendChild(previewDiv);

    // init gallery div
    var galleryDiv = document.createElement('div');
    styleTheGalleryDiv(galleryDiv);
    container.appendChild(galleryDiv);

    // init the trumb div
    trumbDiv = document.createElement('div');
    styleTheTrumbDiv(trumbDiv);
    galleryDiv.appendChild(trumbDiv);

    // init the filter div
    var filterDiv = document.createElement('div');
    styleTheFilterDiv(filterDiv);
    trumbDiv.appendChild(filterDiv);

    // add filter elements
    addFilterElements(filterDiv);

    // loading the first initial data
    loadTrumbContainer(trumbDiv, items);

    // load the preview item
    changeSelectedItem('0');

}

window.onkeyup = function (e) {

    var text = input.value;

    if (text != undefined && text != null) {

        input.style.boxShadow = '0px 0px 3px rgba(46,116,182,0.75)';
        text = text.toLowerCase();
        var counter = 0;
        for (var a in displayedElementsDictionary) {

            var item = itemsDictionary[counter];
            var element = displayedElementsDictionary[a];

            var titleText = item.title.toLowerCase();
            var n = titleText.indexOf(text);

            if (n != undefined && n > -1) {
                element.style.display = 'inline-block';
            }
            else {
                element.style.display = 'none';
            }

            counter++;
        }
    }
    else {
        input.style.boxShadow = 'none';
    }
}

function addFilterElements(filterDiv) {

    var filterTitle = document.createElement('p');
    filterTitle.textContent = 'Filter';
    filterTitle.style.fontSize = '15px';
    filterTitle.style.letterSpacing = '2px';
    filterTitle.style.fontWeight = 'lighter';
    filterTitle.style.margin = '0px';
    filterTitle.style.padding = '0px';
    
    input = tst = document.createElement("input");
    input.type = "text";
    input.style.width = '90%';
    input.style.height = '25px';
    input.style.margin = '0px';
    input.style.padding = '0px';

    filterDiv.appendChild(filterTitle);
    filterDiv.appendChild(input); 
}


var input;
var trumbDiv;
var previewDiv;
var itemsDictionary = {};
var displayedElementsDictionary = {};
function loadTrumbContainer(trumbDiv, items) {

    // todo delete items except filterdiv

    for (var a in items) {

        var item = items[a];
        item.id = a;

        var title = item.title;
        var imagepath = item.url;

        var currentTrumb = document.createElement('div');
        var trumbId = 'trumb' + a;
        itemsDictionary[a] = item;
        addClickListener(a);
        displayedElementsDictionary[trumbId] = currentTrumb;
        addHoverListener(currentTrumb);
        addUnhoverListener(currentTrumb);
        styleTheTrumbItem(currentTrumb);

        var titleTrump = document.createElement('h1');
        titleTrump.textContent = title;
        styleTheTrumbItemTitle(titleTrump);
        currentTrumb.appendChild(titleTrump);

        var imageTrump = document.createElement('img');
        imageTrump.src = imagepath;
        styleTheTrumbItemImage(imageTrump);
        currentTrumb.appendChild(imageTrump);


        trumbDiv.appendChild(currentTrumb);
    }

    function addClickListener(a) {
        currentTrumb.addEventListener('click', function () { changeSelectedItem(a); }, false);
    }

    function addHoverListener(currentTrumb) {
        currentTrumb.addEventListener('mouseover', function () { changeHoveredBackground(currentTrumb); }, false);
    }

    function addUnhoverListener(currentTrumb) {
        currentTrumb.addEventListener('mouseout', function () { changeUnhoveredBackground(currentTrumb); }, false);
    }
}

function styleTheTrumbItemImage(element) {

    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '90%';
    element.style.height = 'auto';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.borderRadius = '10px';
}

function styleTheTrumbItemTitle(element) {

    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '90%';
    element.style.fontSize = '16px';
    element.style.height = 'auto';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.marginLeft = '2%';
    element.style.position = 'relative';
}

function styleTheTrumbItem(element) {

    element.style.cssFloat = 'left';
    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '100%';
    element.style.height = 'auto';
    element.style.margin = '0';
    element.style.padding = '0px';
    element.style.position = 'relative';
}


function styleTheTrumbDiv(element) {

    element.style.cssFloat = 'left';
    element.style.display = 'inline-block';
    element.style.overflow = 'auto';
    element.style.width = '100%';
    element.style.height = '100%';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.textAlign = 'center';
}

function styleTheFilterDiv(element) {

    element.style.id = 'filterdiv';
    element.style.cssFloat = 'right';
    element.style.overflow = 'auto';
    element.style.display = 'inline-block';
    element.style.width = '100%';
    element.style.height = '14%';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.right = '0px';
    element.style.top = '0px';
    element.style.textAlign = 'center';
}

function styleTheGalleryDiv(element) {

    element.id = 'gallerydiv';
    element.style.display = 'inline-block';
    element.style.width = '30%';
    element.style.height = '100%';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
}


function styleThePreviewDiv(element) {

    element.id = 'previewdiv';
    element.style.cssFloat = 'left';
    element.style.display = 'inline-block';
    element.style.width = '70%';
    element.style.height = '100%';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.overflow = 'auto';
}

function styleTheContainer(container) {

    container.style.width = '550px';
    container.style.height = '370px';
}

function changeSelectedItem(a) {

    previewDiv.innerHTML = '';

    var item = itemsDictionary[a];
    var title = item.title;
    var imagepath = item.url;


    var currentPreview = document.createElement('div');
    styleThePrevItem(currentPreview);

    var titleTrump = document.createElement('h1');
    titleTrump.textContent = title;
    styleThePrevItemTitle(titleTrump);
    currentPreview.appendChild(titleTrump);

    var imageTrump = document.createElement('img');
    imageTrump.src = imagepath;
    styleTheTrumbPrevImage(imageTrump);
    currentPreview.appendChild(imageTrump);

    previewDiv.appendChild(currentPreview);
    
}

function styleTheTrumbPrevImage(element) {

    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '100%';
    element.style.height = 'auto';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.borderRadius = '30px';
    element.style.border = '1px solid rgb(212,202,200)';
}

function styleThePrevItemTitle(element) {

    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '100%';
    element.style.fontSize = '32px';
    element.style.height = 'auto';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.marginBottom = '25px';
}

function styleThePrevItem(element) {

    element.style.cssFloat = 'left';
    element.style.textAlign = 'center';
    element.style.display = 'inline-block';
    element.style.width = '86%';
    element.style.height = 'auto';
    element.style.margin = '0';
    element.style.marginLeft = '7%';
    element.style.padding = '0px';
    element.style.position = 'relative';
    element.style.marginTop = '35px';
}

function changeHoveredBackground(currentTrumb) {

    input.style.boxShadow = 'none';
    currentTrumb.style.backgroundColor = 'rgb(212,202,200)';
}

function changeUnhoveredBackground(currentTrumb) {

    input.style.boxShadow = 'none';
    currentTrumb.style.backgroundColor = 'transparent';
}
