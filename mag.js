
// Disable form submissions if there are invalid fields
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                console.log(form);
            }, false);
        });
    }, false);
})();

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var hei = $('#demo').height();
        var hei1= $('.backtop').height();
        // console.log(hei1);
        if (scroll > hei || scroll>hei1) {
            // $('#navbr').css({ 'background-color': 'red !important' });
            // console.log($('#navbr'));
            $('#navbr').addClass('customnav');
        } else {
            // $('#navbr').css('background-color', 'rgba(23, 162, 184, 0.9) !important');
            $('#navbr').removeClass('customnav');
        }
    });
});