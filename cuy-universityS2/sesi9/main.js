//Fetching External API

console.log("testing . . ")

// const endPoint = "https://reqres.in/api/users/3"  //select one by one id from each own id
const endPoint = "https://reqres.in/api/users"   //all id

// fetch(endPoint, {
//     .then((result) => result.json())
//     .then((data) => console.log(data))

async function hitAPI() {
    const api = await fetch(endPoint)
    const {data} = await api.json()
    console.log(data)
}
hitAPI()
