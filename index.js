var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

fetch(
  'https://9432-49-36-56-167.in.ngrok.io/api/add?num1=2&num2=3',
  requestOptions
)
  .then((response) => response.json())
  .then((result) => console.log(result?.sum))
  .catch((error) => console.log('error', error));
