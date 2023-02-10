const form = document.getElementById('myForm');



const getData = (e) => {

e.preventDefault()

let books = document.forms['myForm']['name'].value;


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2df4e495amshc9ffeb0168e71adp1b207ejsnd70227b4f165',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

fetch(`https://hapi-books.p.rapidapi.com/search/${books}`, options)
	.then(response => response.json())
	.then(response => {

response.map( (val) => {

document.getElementById('result').innerHTML+=`


<div class="card" style="width: 18rem;">
  <img src="${val.cover}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="${val.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>







`










})








	})
	.catch(err => console.error(err));









}

















form.addEventListener('submit', getData)