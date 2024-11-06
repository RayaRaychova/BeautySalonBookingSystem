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
