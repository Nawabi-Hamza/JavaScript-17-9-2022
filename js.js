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

