const filters = (data, name, allFilters, { column: orderColumn, sort }) => {
  const filter = allFilters
    .reduce((acc, { comparison, value, column }) => {
      if (comparison.includes('maior')) {
        return acc.filter((planet) => Number(planet[column]) > value);
      } if (comparison.includes('menor')) {
        return acc.filter((planet) => Number(planet[column]) < value);
      } if (comparison.includes('igual')) {
        return acc.filter((planet) => Number(planet[column]) === Number(value));
      }
      return acc;
    }, data)
    .sort((a, b) => {
      let columnA = a[orderColumn];
      let columnB = b[orderColumn];

      if (!Number.isNaN(Number(columnA))) columnA = Number(columnA);
      if (!Number.isNaN(Number(columnB))) columnB = Number(columnB);

      if (columnA > columnB) {
        return sort === 'ASC' ? 1 : Number('-1');
      } if (columnB > columnA) {
        return sort === 'ASC' ? Number('-1') : 1;
      }
      return 0;
    })
    .filter(({ name: planetName }) => (
      planetName.toLowerCase().includes(name.toLowerCase())
    ));
  return filter;
};

export default filters;

// // =============================================
// const number = 1;
// const numberString = '1';
// const stringOne = 'Murilo';
// const stringTwo = 'Tah';

// // =============================================
// // Essa é uma forma de verificar se uma variável
// // é ou não é um número. Se for, ao transformarmos
// // ela em number, retornará um número normalmente,
// // entretanto, se não for, retornará NaN (is not
// // a number) e, por sua vez, a função Number.isNaN
// // retornará true.
// // referência do projeto StarWars de Bianca Caetano,
// // da turma 8 da trybe.

// console.log(Number.isNaN(Number(number)));
// console.log(Number.isNaN(Number(numberString)));
// console.log(Number.isNaN(Number(stringOne)));
// console.log(Number.isNaN(Number(stringTwo)));
// // =============================================
// // Ao compararmos duas strings, o JS compara pelo
// // código unicode, nesse caso, verá em ordem alfabética
// // quem vem primeito. Como stringTwo começa com 'T',
// // retornará true, pois 'T' vem depois de 'M'.

// console.log(stringTwo > stringOne);

// // OBS: Numa comparação de um number com string,
// // letras do alfabeto vem sempre antes de números
// // =============================================
