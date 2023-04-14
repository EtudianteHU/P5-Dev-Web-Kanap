const myBlogs = [{
    "id": 107fb5b75607497b96722bda5b504926,
    "colors": [
        "Blue",
        "White",
        "Black"],
    "quantity"
},
{
    "id": 415b7cacb65d43b2b5c1ff70f3393ad1,
    "colors": [
        "Yellow",
        "Black"
    "Red"],
    "quantity"
},
{
    "id": 055743915a544fde83cfdfc904935ee7,
    "colors": [
        "Green",
        "Red",
        "Orange"
    ],
    "quantity"
},
{
    "id": a557292fe5814ea2b15c6ef4bd73ed83,
    "colors": [
        "Pink",
        "White"
    ],
    "quantity"
},
{
    "id": 055743915a544fde83cfdfc904935ee7,
    "colors": [
        "Green",
        "Red",
        "Orange"
    ],
    "quantity"
},
{
    "id": 8906dfda133f4c20a9d0e34f18adcf06,
    "colors": [
        "Grey",
        "Purple",
        "Blue"
    ],
    "quantity"
},
{
    "id": 77711f0e466b4ddf953f677d30b0efc9,
    "colors": [
        "Grey",
        "Navy"
    ],
    "quantity"
},
{
    "id": 034707184e8e4eefb46400b5a3774b5f,
    "colors": [
        "Red",
        "Silver"
    ],
    "quantity"
},
{
    "id": a6ec5b49bd164d7fbe10f37b6363f9fb,
    "colors": [
        "Pink",
        "Brown",
        "Yellow",
        "White"

    ],
    "quantity"
}]
localStorage.setItem('panier', JSON.stringify(myBlogs));

const myBlogs = [{
    id: 107fb5b75607497b96722bda5b504926,
    colors: [
        "Blue",
        "White",
        "Black"],
    quantity
},
{
    id: 415b7cacb65d43b2b5c1ff70f3393ad1,
    colors: [
        "Yellow",
        "Black"
    "Red"],
    quantity
},
{
    id: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    id: a557292fe5814ea2b15c6ef4bd73ed83,
    colors: [
        "Pink",
        "White"
    ],
    quantity
},
{
    id: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    id: 8906dfda133f4c20a9d0e34f18adcf06,
    colors: [
        "Grey",
        "Purple",
        "Blue"
    ],
    quantity
},
{
    id: 77711f0e466b4ddf953f677d30b0efc9,
    colors: [
        "Grey",
        "Navy"
    ],
    quantity
},
{
    id: 034707184e8e4eefb46400b5a3774b5f,
    colors: [
        "Red",
        "Silver"
    ],
    quantity
},
{
    id: a6ec5b49bd164d7fbe10f37b6363f9fb,
    colors: [
        "Pink",
        "Brown",
        "Yellow",
        "White"

    ],
    quantity
}]
for (let myblog of myblogs) {
    console.log('id de myBlogs' + myBlog.name + ' avec les colors ' + myblog.colors 'avec la quantity' + myBlog.quantity);
}