//variables
var gallery = document.querySelector('.gallery__container');
var numberOfImages = 6;
var imagesInRow = 3;
var gridSize = 12;
//functions
var getImagesFromDOM = function () {
    return document.querySelectorAll('.gallery gallery__container')
}

var renderGallery = function (destination, format, numberOfImages, imagesInRow, gridSize) {
    var rowsNumber = Math.ceil(numberOfImages / imagesInRow)
    for (var r = 0; r < rowsNumber; r++) {
        var row = document.createElement('div');
        row.classList.add('row')

        var i = 1 + r * imagesInRow;
        var stop = i + imagesInRow - 1;

        for (i; i <= stop; i++) {
            var imageContainer = document.createElement('div')
            imageContainer.classList.add('gallery__image')
            imageContainer.classList.add(`col-${gridSize/imagesInRow}`)

            var image = document.createElement('img');
            image.setAttribute('src', `images/gallery/${i}.${format}`)
            image.dataset.id = i;

            image.addEventListener('click', function () {
                var body = document.querySelector('body')

                //tworzenie elementu z obrazkiem, wyświetlanoego na całej stronie
                var div = document.createElement('div')
                div.classList.add('fullScreen')
                div.addEventListener('click', function (e) {
                    e.stopImmediatePropagation()

                    this.parentElement.removeChild(this)
                })

                var container = document.createElement('div')
                container.classList.add('container')

                var img = document.createElement('img')
                img.setAttribute('src', this.getAttribute('src'))
                img.addEventListener('click', function (e) {
                    e.stopPropagation()
                })

                var button = document.createElement('button')
                button.innerText = 'X'
                button.classList.add('close')
                button.addEventListener('click', function (e) {
                    e.stopImmediatePropagation()

                    var gallery = this.parentElement
                    gallery.parentElement.removeChild(gallery)
                })

                container.appendChild(img)
                container.appendChild(button)
                div.appendChild(container)
                body.appendChild(div)
            })

            // var mobile = window.matchMedia("screen and (min-width: 640px)")
            // mobile.addEventListener(function (mobile) {
            //     if (mobile.matches) {
            //         image.addEventListener('click', function () {

            //         })
            //     }
            // })

            imageContainer.appendChild(image)
            row.appendChild(imageContainer)
        }
        destination.appendChild(row)
    }
}
//events
renderGallery(gallery, 'jpg', 6, 3, 12)