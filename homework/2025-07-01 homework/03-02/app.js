const photo = prompt('enter a file name with an extension');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp', '.webp'];
let isImage = false;
for (const type of imageExtensions) {
    if (photo.endsWith(type)) {
        isImage = true;
        break;
    }
}
if (isImage) {
    alert('The file is an image file.');
} else {
    alert('The file is NOT an image file.');
}
