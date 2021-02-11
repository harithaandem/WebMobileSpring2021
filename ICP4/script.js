function upDate(previewPic) {
    var imageUrl = previewPic.src;
    $('#image').css('background-image', 'url(' + imageUrl + ')')
    console.log(previewPic.alt)
    var text = previewPic.alt;
    $('#image').text(text)

}
function unDo() {
    var img = '';
    $('#image').css('background-image', 'url(' + img + ')')
    $("#image").text("Hover over an image below to display here.");
}