const images = document.getElementsByClassName("img-link");

const string = ['developer', 'linkedin', 'github', 'stack-overflow'];

var url = '';

function mouseover() {
    for (i = 0; i < string.length; i++) {
        if (this == images[i]) {
            images[i].src = 'assets/' + string[i] + '-outlined.png';
            url = string[i];
            break;
        }
    }
}

function mouseout() {
    this.src = 'assets/' + url + '.png';
}

for (i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', mouseover);
    images[i].addEventListener('mouseout', mouseout);
}


//  Commented Codes below don't work, has something to do with this not being passed correctly inside mouseout;

// function mouseout(url) {
//     console.log(this);
//     console.log(url);
//     this.src = 'assets/' + url + '-outlined.png';
// }
// for (i = 0; i < images.length; i++) {
//     images[i].addEventListener('mouseover', mouseover);
//     images[i].addEventListener('mouseout', function () { mouseout(url) });
// }

