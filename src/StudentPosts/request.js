
const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const json = await response.json()
        console.log(json.slice(0, 10))
    } catch (error) {
        console.log(error)
    }
}

const syncFunction = () => {
    //1 
    const steph = {name: "Stephanie", age: 27}
    //2
    console.log(steph)
    //3
    console.log("Hello")
}