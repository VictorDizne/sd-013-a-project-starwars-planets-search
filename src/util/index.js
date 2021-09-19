// const htmlID = (props) => {
//   const { name } = props;
//   const hexIdChars = '0123456789ABCDEF';
//   const KEY_LENGTH = 40;
//   let id = name;
//   for (let i = 0; i < KEY_LENGTH; i += 1) {
//     id += hexIdChars[Math.floor(Math.random() * hexIdChars.length)];
//   }
//   return id;
// };

const sum = (a, b) => a + b;

module.exports = { sum };
// export default htmlID;
