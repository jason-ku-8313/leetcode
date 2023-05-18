/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  let processedCount = 0;
  const pool = [];
  const results = [];

  // Keep running until all functions are processed and resolved
  while (processedCount < functions.length || pool.length) {
    // Fill inProgressTasks with async tasks until reaching n or no more unprocess task
    while (pool.length < n && processedCount < functions.length) {
      const index = processedCount; // Memoize index value in current Lexical Environment to guarantee sequence of results;
      const promise = functions[index]();
      promise.then((data) => {
        results[index] = data;
        pool.splice(pool.indexOf(promise), 1); // Release pool capacity to handle next task
      });
      pool.push(promise);
      processedCount++;
    }

    // Wait until any of in-progress tasks is finished
    await Promise.race(pool);
  }
  return results;
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
