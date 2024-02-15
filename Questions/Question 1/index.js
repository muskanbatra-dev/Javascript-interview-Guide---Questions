const promiseAll = function (taskList) {
  // to store the result
  const promiseResult = [];
  // to store fulfilled promises
  let promisesCompleted = 0;
  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          promiseResult[index] = val;
          promisesCompleted += 1;
          if ((promisesCompleted = taskList.length)) {
            resolve(promiseResult);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

//testcase 1
//input

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

promiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
