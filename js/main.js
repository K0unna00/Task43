let userId=1;
loadUsersPosts(userId)
document.querySelector('button').addEventListener('click',function(e){
   userId++;    
    loadUsersPosts(userId)
})
function loadUsersPosts(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response=>response.json())
    .then(data=>{
        data.forEach(element => {
            let card = `<div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <a href="#" class="card-link">Card link ${element.userId}</a>
                        <a href="#" class="card-link">Another link</a>
                        </div>
                        </div> 
                        </div>`
            document.querySelector('.row').innerHTML+=card
        });
        
    })
}