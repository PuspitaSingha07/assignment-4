function findAddress(obj) {
    const defaultValueOfStreet = "__";
    const defaultValueOfHouse = "__";
    const defaultValueOfSociety = "__";

    const street = obj.street || defaultValueOfStreet;
    const society = obj.society || defaultValueOfSociety;
    const house = obj.house || defaultValueOfHouse;


    return street + "," + house + "," + society;
}

const object = {
    street: 10,
    house: "",
    society: ""
}
let result = findAddress(object);
console.log(result)