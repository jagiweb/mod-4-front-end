// Define the URLs for our different routes
const baseURL = "http://localhost:3001"
const signInURL = `${baseURL}/sign-in`
const signUpURL = `${baseURL}/sign-up`
const validateURL = `${baseURL}/validate`
const apiUrl = "https://pixabay.com/api/?key=15410961-50b6ae9ee64c3859d407a7eaa&q=nature&image_type=photo&pretty=true"

// // Make a post request to a given URL with a given data object as the body and return the Promise
const post = (url, object) => {
  const configurationObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  }
  return fetch(url, configurationObject)
}

// const patch = (url, id, object) => {
//     const configurationObject = {
//       method: "PATCH",
//       headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(object)
//     }
//     return fetch(url + id, configurationObject)
//   }

// Make a get request to a given URL and return the Promise. If a token has been provided, include it as a header called Authorization
const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

// // Use the get function to make a request to the validate route and parse the response into JSON
const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

// // Use the post function to make a request to the validate route and parse the response into JSON
const signIn = data => {
    return post(signInURL, data).then(response => response.json())
}

const signUp = data => {
    return post(signUpURL, data).then(response => response.json())
}
// Use the get function to make a request to the items route and parse the response into JSON
const getPictures = token => {
  return get(apiUrl, token).then(response => response.json())
}

// Export the necessary functions as part of one object which we will import elsewhere
// export default { signIn, validate, getPictures }
export default { getPictures, signIn, signUp, validate }