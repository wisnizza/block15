//create an object labeled customer
const customer = {
    //add the given key:value pairs:
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: "undefined",
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}
//update the values of the keys email, phone, zipCode and favFlavors with the given values
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = "3195551234";
customer["zipCode"] = "63132";
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"];


// delete the keys zipCode and favStore 
delete customer["favoriteStore"];
delete customer["zipCode"];
// add  new keys toppings, futureFlavors and todaysPurchaseCost with the given values
customer.toppings = ["chocolate springkles", "wafer straws", "gummy bears"];
customer.futureFlavors ="mango"
customer.todaysPurchaseCost = 5.32;

// print the keys of the customer object
for(const property in customer){
    console.log(property);
}
// print object customer in table form
console.table(customer);
