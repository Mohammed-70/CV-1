var image = document.querySelector('.zoom-image');

        image.addEventListener('mouseover', function() {
            image.style.transform = 'scale(1.2)';
        });

        image.addEventListener('mouseout', function() {
            image.style.transform = 'scale(1)';
        });

       

        