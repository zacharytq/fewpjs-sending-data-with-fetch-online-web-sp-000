// Add your code here
function submitData(userName, userEmail) {
    let body = {
        name: userName,
        email: userEmail
    };

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    };

    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let body = document.querySelector("body")
        let newObj = document.createElement("P")
        newObj.innerHTML = object.id 
        body.appendChild(newObj)  
      })
      .catch(function(error) {
        let body = document.querySelector("body")
        let message = document.createElement("P")
        message.innerHTML = error.message
        body.appendChild(message) 
       });
}