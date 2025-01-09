// Define the runPromisesInSeries function
const runPromisesInSeries = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());

const delay = (d) => new Promise((r) => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]);
