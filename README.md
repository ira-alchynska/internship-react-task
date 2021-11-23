# internship-react-task

1. один стан який щось описує

2. ти можеш мутувати той стан щоб отримати новий стан

тобто -

створюємо стан зі всіма країнами

потім фільтруємо країни відповідно до input

це стан є в нас в новій змінній

а тоді сотруємо і запихаємо в нову змінну

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

const headerWithoutFilteredColumns = headerData.filter(() => {….});
