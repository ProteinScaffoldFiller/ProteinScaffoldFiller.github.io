// script.js

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.features-nav-item');
    const contentDivs = document.querySelectorAll('.feature-content');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            contentDivs.forEach(c => c.classList.remove('active'));

            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    var fileUpload = document.getElementById('fileUpload');
    var dataSelectGroup = document.querySelector('.form-group[data-group="dataSelect"]');

    fileUpload.addEventListener('change', function() {
        if(this.files.length > 0) {
            dataSelectGroup.style.display = 'none';
        } else {
            dataSelectGroup.style.display = 'block';
        }
    });

    var optionSelect = document.getElementById('optionSelect');
    var modelSelect = document.getElementById('modelSelect');

    optionSelect.addEventListener('change', function() {
        while (modelSelect.options.length > 1) {
            modelSelect.remove(1);
        }

        if (this.value === 'option1') {
            var models = [
                { value: 'model1', text: 'KNN' },
                { value: 'model2', text: 'Decision Tree' },
                { value: 'model3', text: 'Random Forest' },
                { value: 'model4', text: 'CNN-LSTM' },
                { value: 'model5', text: 'AutoEncoder' },
                { value: 'model6', text: 'Transformer' },
                { value: 'model7', text: 'GPT-2' }
            ];
        } else if (this.value === 'option2') {
            var models = [
                { value: 'model5', text: 'AutoEncoder' },
                { value: 'model6', text: 'Transformer' },
                { value: 'model7', text: 'GPT-2' }
            ];
        }

        models.forEach(function(model) {
            var option = new Option(model.text, model.value);
            modelSelect.add(option);
        });
    });
});
