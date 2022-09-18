/*
fetch("index.json")
.then(function(Response){
    return Response.json();
})
.then(function(index){
     
        var indata = document.querySelector('#datain')
        var out = ""
    for(let pro of index){
    out += ` <tr>
    <td>${pro.userId}</td>
    <td>${pro.firstName}</td>
    <td>${pro.lastName}</td>
    <td>${pro.phoneNumber}</td>
    <td>${pro.emailAddress}</td>
    <td><img style="width:100px;" src="17_09_2022_json/${pro.photo}"></td>
    </tr>`
   }
   indata.innerHTML=out;

})
*/
var ourRequest = new XMLHttpRequest()
ourRequest.open('get','https://learnwebcode.github.io/json-example/animals-1.json')      // get or we can post

ourRequest.onload = function(){

    console.log(ourRequest.responseText)
}