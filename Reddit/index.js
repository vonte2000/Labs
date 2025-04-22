fetch("https://www.reddit.com/r/aww/.json")
    .then(response => {
        if(!response.ok) {
            throw new Erros("Could not fetch resource")
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))