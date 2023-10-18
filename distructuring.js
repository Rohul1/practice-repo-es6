const mango = {
    name: "Bari mango",
    address: "Chapai",
    color: "golden",
    phone: 908321742990,
    price: 50,


}

// console.log(mango.name)
// console.log(mango.address)
// console.log(mango.color)
// console.log(mango.phone)
// console.log(mango.price)



const myFriends = ["jakaria", "sabbir", "nahid", "nasim"]
const [close, bestFriend, school, cousin] = myFriends
console.log(cousin);


function getName() {
    return ["alim", "halim"]

}
const [baba, cacha] = getName();
console.log(cacha, baba);




const student = {
    name: "Rohul",
    age: 22,
    id: 16,
    schoolName: "Banoil high school",
    role: "Student"
}

const { name, age, id, schoolName, role } = student
console.log(name);
console.log(age);
console.log(id);
console.log(schoolName);
console.log(role);