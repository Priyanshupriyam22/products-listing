// fetch('./products.json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     for (var i=0; i<data.lenght; i++){
//         if (i==Cosmetics){
//             for (var j=0; j<data.lenght;i++){
//                 console.log(j);
//                 document.getElementById("products").innerHTML +=
//                 data[j].id + "=>" jsondata.data[j].name
//             }
//         }
        
//     }
// })

// .then(jsondata => console.log(jsondata.data[0].name));


var Cosmetics
var Households
fetch("./products.json")
.then(response => {
   return response.json();
})
.then(
    jsondata => {document.getElementById("name").innerHTML =jsondata.data[0].productList[0].name,
    document.getElementById("price").innerHTML =jsondata.data[0].productList[0].price,
    document.getElementById("name1").innerHTML =jsondata.data[0].productList[1].name,
    document.getElementById("price2").innerHTML =jsondata.data[0].productList[1].price,
    document.getElementById("name3").innerHTML =jsondata.data[1].productList[0].name,
    document.getElementById("price3").innerHTML =jsondata.data[1].productList[0].price,
    document.getElementById("name4").innerHTML =jsondata.data[1].productList[1].name,
    document.getElementById("price4").innerHTML =jsondata.data[1].productList[1].price}
    );
