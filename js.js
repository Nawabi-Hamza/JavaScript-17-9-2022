const items = '{"name":"tv","price":200,"model":"sony"}'
console.log(items[0])

const itemsObj = JSON.parse(items)
console.log(itemsObj)
console.log(itemsObj.name)
for (let key in itemsObj){
    console.log([key]+" "+itemsObj[key])
}

console.log('--------------')

const item ='["Toyota", "Sony", "Samsung"]'
console.log(item[0])
const itemObj = JSON.parse(item)
console.log(itemObj[0])
            // first trick
for(let x=0 ; x < itemObj.length ; x++){
    console.log(itemObj[x])
}

console.log('////////////////')
            // second trick
for(let z in itemObj){
    console.log(itemObj[z])
}
console.log('--------------')

const text = `[
    {
      "userId": 1,
      "firstName": "Krish",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "product-images/bike-0.jpeg"
    },
    {
      "userId": 2,
      "firstName": "fayaz",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "product-images/bike-1.jpeg"
    },
    {
      "userId": 2,
      "firstName": "asee",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "product-images/bike-2.jpeg"
    },
    {
      "userId": 2,
      "firstName": "narati",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "product-images/bike-3.jpeg"
    },
    {
      "userId": 3,
      "firstName": "rabin ",
      "lastName": "Lee",
      "phoneNumber": "123456",
      "emailAddress": "krish.lee@learningcontainer.com",
      "photo": "product-images/bike-4.jpeg"
    } 
  ]`;
  const txtObj = JSON.parse(text)
  console.log(txtObj[1])

  var indata = document.querySelector('#datain')
  var onj = ""
  i=0
  while(i<txtObj.length){
    onj += `
    <tr>
    <td>${txtObj[i].userId}</td>
    <td>${txtObj[i].firstName}</td>
    <td>${txtObj[i].lastName}</td>
    <td>${txtObj[i].phoneNumber}</td>
    <td>${txtObj[i].emailAddress}</td>
    <td><img style="height:50px;width:100px;" src="17_09_2022_json/product-images/bike-${[i]}.jpeg"></td>
    <td><img style="height:50px;width:100px;" src="17_09_2022_json/${txtObj[i].photo}"></td>
    </tr>
    `
    i++
    indata.innerHTML=onj;
  }


  console.log("--------------------------------------")