document.querySelectorAll('.memberImage').forEach(member => {

    member.addEventListener('click', function (event) {
        event.stopPropagation();
        this.classList.toggle('active');
    });

});

document.addEventListener('click', function () {
    document.querySelectorAll('.memberImage.active').forEach(member => {
        member.classList.remove('active');
    });
});
