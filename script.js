document.addEventListener('DOMContentLoaded', () => {
    // Rating Pills interaction logic
    const ratingPills = document.querySelectorAll('.rating-pills .pill');
    
    ratingPills.forEach(pill => {
        pill.addEventListener('click', () => {
            ratingPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
        });
    });

    // Custom Radio and Checkbox simple state toggling helper if needed
    // (native checkboxes are handled by browser but styled customly in CSS)

    // Form button actions
    const btnCancel = document.querySelector('.btn-cancel');
    const btnSave = document.querySelector('.btn-save');
    const btnConvert = document.querySelector('.btn-convert');

    btnCancel.addEventListener('click', () => {
        if (confirm('Are you sure you want to cancel lead entry? All unsaved data will be lost.')) {
            // Reset form
            document.getElementById('lead-form').reset();
            
            // Restore default ratings active states
            ratingPills.forEach(p => p.classList.remove('active'));
            document.querySelector('.pill-hot').classList.add('active');
        }
    });

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Lead successfully saved! (Mock Action)');
    });

    btnConvert.addEventListener('click', () => {
        alert('Lead converted to Quotation! (Mock Action)');
    });
});
