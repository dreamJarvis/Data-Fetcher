// event listner for Text button
document.getElementById('getText').addEventListener('click', getText);
function getText(){
    fetch('sample.txt')
        .then(res => res.text())
        .then(data => {
            let node = document.createElement('h1');
            let textNode = document.createTextNode(data);
            node.appendChild(textNode);
            document.getElementById('output').appendChild(node);
        })
        .catch(err => console.log('error !'));
} 

// event listner for user buttons
var flagUser = true;
document.getElementById('getUsers').addEventListener('click', getUsers);
function getUsers(){
    if(flagUser){
        fetch('users.json')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(text => {
                output +=   `<ul class="list-group mb-3 mt-5">
                <li class="list-group-item" >ID : ${text.id} </li>
                <li class="list-group-item" >Name : ${text.name} </li>
                <li class="list-group-item" >Email : ${text.email} </li>
                </ul>`;
            });
            document.getElementById('output').innerHTML = output;
            // document.getElementById('outputUser').style.listStyle = "none";
        });
    };

    flagUser = false;
};

// -------------------- GET Request Using fetch API ----------------------------//
var flag = true;
document.getElementById('getPosts').addEventListener('click', function(){
    if(flag){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                let output = `<h2 class="mt-6">Posts</h2>`;
                data.forEach(function(post){
                    output += `
                            <div class= "card card-body mb-3">
                                <h3> ${post.title} </h3>
                                <p> ${post.body} </p>  
                            </div>
                            `
                });
                document.getElementById('output').innerHTML = output ;
            });
    }

    flag = false;
});


// ------------------- POST Request Using fetch API ------------------------- //
document.getElementById('addPost').addEventListener('submit', function(e){
    // stop default actions
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body: JSON.stringify({title:title, body:body})
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
});

// api from : https://jsonplaceholder.typicode.com