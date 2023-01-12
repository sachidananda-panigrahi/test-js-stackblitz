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

// const controller = new AbortController()

// 5 second timeout:

// const timeoutId = setTimeout(() => controller.abort(), 5000)

// fetch(url, { signal: controller.signal }).then(response => {
// completed request before timeout fired

// If you only wanted to timeout the request, not the response, add:
// clearTimeout(timeoutId)
// })
