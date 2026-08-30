console.log("testing . . ")

const endPoint = "https://reqres.in/api/users"

(fetch(endPoint)).then((data) => console.log(data))
