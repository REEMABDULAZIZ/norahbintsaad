url = './images/'
imgArray = ['01.jpg', '02.jpg', '03.jpg']

var image = document.querySelector('.home img')
var next = document.querySelector('#next')
var previous = document.querySelector('#previous')

next.addEventListener('click', function () {
    var attr = image.getAttribute('src')
    var newIndex;
    var index;
    var source;

    console.log(attr.split('/'));
    

    index = imgArray.indexOf(attr.split('/')[2])

    if (index >= 2) {
        var newIndex = 0;
    }
    else {
        newIndex = index + 1
    }
    
    console.log(newIndex);
    
    source = url + imgArray[newIndex]

    image.setAttribute('src', source)
    
});

previous.addEventListener('click', function () {
    var attr = image.getAttribute('src')
    var newIndex;
    var index;
    var source;

    
    index = imgArray.indexOf(attr.split('/')[2])

    if (index <= 0) {
        var newIndex = 2;
    }
    else {
        newIndex = index - 1
    }
    
    console.log(newIndex);
    
    source = url + imgArray[newIndex]
    image.setAttribute('src', source)
    
});

