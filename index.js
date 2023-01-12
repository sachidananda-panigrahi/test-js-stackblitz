function doReq(n1, n2) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  return new Promise((resolve, reject) => {
    fetch(
      `https://ac74-49-36-56-167.in.ngrok.io/api/add?num1=${n1}&num2=${n2}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        resolve(result?.sum);
      })
      .catch((error) => {
        console.log('error', error);
        reject(error);
      });
  });
}

async function getSumOfTwoNum(n1, n2) {
  const sum = await doReq(n1, n2);
  console.log(sum);
}

getSumOfTwoNum(3, 5);
