const myBlogs = [{
    name: 107fb5b75607497b96722bda5b504926,
    colors: [
        "Blue",
        "White",
        "Black"],
    quantity
},
{
    name: 415b7cacb65d43b2b5c1ff70f3393ad1,
    colors: [
        "Yellow",
        "Black"
    "Red"],
    quantity
},
{
    name: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    name: a557292fe5814ea2b15c6ef4bd73ed83,
    colors: [
        "Pink",
        "White"
    ],
    quantity
},
{
    name: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    name: 8906dfda133f4c20a9d0e34f18adcf06,
    colors: [
        "Grey",
        "Purple",
        "Blue"
    ],
    quantity
},
{
    name: 77711f0e466b4ddf953f677d30b0efc9,
    colors: [
        "Grey",
        "Navy"
    ],
    quantity
},
{
    name: 034707184e8e4eefb46400b5a3774b5f,
    colors: [
        "Red",
        "Silver"
    ],
    quantity
},
{
    name: a6ec5b49bd164d7fbe10f37b6363f9fb,
    colors: [
        "Pink",
        "Brown",
        "Yellow",
        "White"

    ],
    quantity
}]
localStorage.setItem('panier', JSON.stringify(myBlogs));

const myBlogs = [{
    name: 107fb5b75607497b96722bda5b504926,
    colors: [
        "Blue",
        "White",
        "Black"],
    quantity
},
{
    name: 415b7cacb65d43b2b5c1ff70f3393ad1,
    colors: [
        "Yellow",
        "Black"
    "Red"],
    quantity
},
{
    name: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    name: a557292fe5814ea2b15c6ef4bd73ed83,
    colors: [
        "Pink",
        "White"
    ],
    quantity
},
{
    name: 055743915a544fde83cfdfc904935ee7,
    colors: [
        "Green",
        "Red",
        "Orange"
    ],
    quantity
},
{
    name: 8906dfda133f4c20a9d0e34f18adcf06,
    colors: [
        "Grey",
        "Purple",
        "Blue"
    ],
    quantity
},
{
    name: 77711f0e466b4ddf953f677d30b0efc9,
    colors: [
        "Grey",
        "Navy"
    ],
    quantity
},
{
    name: 034707184e8e4eefb46400b5a3774b5f,
    colors: [
        "Red",
        "Silver"
    ],
    quantity
},
{
    name: a6ec5b49bd164d7fbe10f37b6363f9fb,
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