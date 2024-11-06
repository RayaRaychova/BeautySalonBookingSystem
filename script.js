const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Прост маршрут за проверка
app.get('/', (req, res) => {
    res.send('Системата за резервации е активна!');
});

// Стартиране на сървъра
app.listen(PORT, () => {
    console.log(`Сървърът работи на http://localhost:${PORT}`);
});
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    fetch('http://localhost:3000/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, date })
    })
    .then(response => response.json())
    .then(data => alert(`Резервацията е успешна!`))
    .catch(error => console.error('Грешка:', error));
});
