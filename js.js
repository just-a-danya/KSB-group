const members = document.querySelectorAll('.memberImage');

members.forEach(member => {
    member.addEventListener('click', function(event) {
        event.stopPropagation();

        this.classList.toggle('active');
    });
});

document.addEventListener('click', function() {
    members.forEach(member => {
        member.classList.remove('active');
    });
});
