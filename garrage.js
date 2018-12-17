// const getCountries = (callback) => {
//   setTimeout(() => {
//     callback("countries") ;
//   }, 200);
// };

// getCountries((result)=>{
//     console.log(result)
// });

// const getCountries = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("countries");
//     }, 200);
//   });
// };

// const Getter = async () => {
//   let result = await getCountries();
//   console.log(result);
// };

// Getter();

// app.get("/test2", (req, res, next) => {
//     setTimeout(() => {
//       res.json(cars);
//     }, 10000);
//   });

// let waitingForCars = 0;
// app.get("/test1", (req, res, next) => {
//   res.json(++waitingForCars);
// });
