const members = document.querySelectorAll('.memberImage');

members.forEach(member => {

    const mainImage = member.querySelector('.mainImage');

    mainImage.addEventListener('click', function(event) {

        event.stopPropagation();

        member.classList.toggle('active');

    });

});


document.addEventListener('click', function() {

    members.forEach(member => {
        member.classList.remove('active');
    });

});
