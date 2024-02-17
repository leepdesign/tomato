document.addEventListener('DOMContentLoaded', function() {
    var workTypeSelect = document.getElementById('workType');
    var otherWorkTypeInput = document.getElementById('otherWorkType');
    var dataTable = document.getElementById('dataTable');
    var submittedDataTable = document.getElementById('submittedData').getElementsByTagName('tbody')[0];

    workTypeSelect.addEventListener('change', function() {
        if (workTypeSelect.value === '其它') {
            otherWorkTypeInput.style.display = 'block';
            otherWorkTypeInput.querySelector('input').setAttribute('required', 'required');
        } else {
            otherWorkTypeInput.style.display = 'none';
            otherWorkTypeInput.querySelector('input').removeAttribute('required');
        }
    });

    var form = document.getElementById('workForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        var formData = new FormData(form);

        // Create a new row in the table to display submitted data
        var newRow = submittedDataTable.insertRow();
        var cellIndex = 0;
        for (var pair of formData.entries()) {
            var newCell = newRow.insertCell(cellIndex++);
            newCell.textContent = pair[1];
        }

        // Show the table with submitted data
        dataTable.style.display = 'block';
        form.reset(); // Reset the form
    });
});