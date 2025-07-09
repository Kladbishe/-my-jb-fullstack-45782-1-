// Выполняем скрипт только после загрузки всей страницы
window.addEventListener('DOMContentLoaded', () => {
    const city = document.getElementById('city');
    const street = document.getElementById('street');
    const house = document.getElementById('house');
    const index = document.getElementById('index');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');

    // При нажатии на "Сохранить"
    saveBtn.addEventListener('click', function (event) {
        event.preventDefault(); // предотвращаем перезагрузку страницы

        const address = {
            city: city.value,
            street: street.value,
            house: house.value,
            index: index.value
        };

        localStorage.setItem('address', JSON.stringify(address));
        alert('address save!');
    });

    // При нажатии на "Загрузить"
    loadBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const addressJSON = localStorage.getItem('address');
        if (addressJSON) {
            const address = JSON.parse(addressJSON);
            city.value = address.city;
            street.value = address.street;
            house.value = address.house;
            index.value = address.index;
        } else {
            alert('Сохранённый адрес не найден.');
        }
    });
});
