# internship-react-task

1. один стан який щось описує

2. ти можеш мутувати той стан щоб отримати новий стан

тобто -

створюємо стан зі всіма країнами

потім фільтруємо країни відповідно до input

це стан є в нас в новій змінній

<!-- а тоді сотруємо і запихаємо в нову змінну

const countries = serverData;

const filteredCountries = countries.filter …..

const sortedCountries = filteredCountries.sort…..

const countries = useState([]);
const hiddenCountries = useState([‘name’, ‘id’]);
const countriesWithHiddenColumns = countries.filter((c) => c.......);
const sortingOrder = useState({order: ‘ASC’, accessor: ‘id’});
const sortedCountries = countriesWithHiddenColumns.sort(.....);

const hiddenColumns = []

hiddenColumns = [‘id’]

click -> column -> name

[id, name]

[…hiddenColumn, columnName]

const countriesWithHiddenColumns = filteredCountries.map(() => {
….hide columns here
});

const headerWithoutFilteredColumns = headerData.filter(() => {….}); -->
<!-- створити стан системи де буде збережено інформацію про ордер і колонку яка зараз ордериться

2. повішати хендлери на унопки в дропдауні + кнопку в хедері

3. при кліку на ці кнопки нам потрібно міняти стан 2 стейтів

4. створити нову змінну в table.js яка буде калькулюватися з фільтрованих рядків ‘filteeredCountries’

5. передати цю нову змінну в всі компоненти де нам потрібні рядки (країни)

6. оновити рядок 18 в tableheader щоб витягувати ордер з нових стейтів а не з самих headerData -->
