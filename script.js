document.getElementById('submitBtn').addEventListener('click', function() {
    const parents = document.querySelectorAll('.parent');
    let biodataHtml = '';

    parents.forEach(parent => {
        if (parent.classList.contains('selected')) {
            const name = parent.getAttribute('data-name');
            const age = parent.getAttribute('data-age');
            const occupation = parent.getAttribute('data-occupation');
            const bio = parent.getAttribute('data-bio');

            biodataHtml += `<h3>${name}</h3>
                            <p><strong>Age:</strong> ${age}</p>
                            <p><strong>Occupation:</strong> ${occupation}</p>
                            <p><strong>Bio:</strong> ${bio}</p>
                            <hr>`;
        }
    });

    document.getElementById('biodata').innerHTML = biodataHtml || '<p>Please select a parent.</p>';
});

// Add click event to each parent to select/deselect
document.querySelectorAll('.parent').forEach(parent => {
    parent.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});