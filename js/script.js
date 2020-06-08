//move eyes with mouse movement
$("body").mousemove(function (event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2.5);
    var y = (eye.offset().top) + (eye.height() / 2.5);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

const pass = document.querySelector('#passwd');
const show = document.querySelector('.fa-eye');
show.addEventListener('click', () => {
    if (passwd.type === 'password') {
        passwd.type = 'text';
        show.classList.add('hide');
    } else {
        passwd.type = 'password';
        show.classList.remove('hide');
    }

});