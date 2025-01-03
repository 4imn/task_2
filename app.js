let myName = ["aiman" , "mohammad" , "zaid" , "banihani"]; // انشاء مصفوفة جديدة
let myAge = [23] // انشاء مصفوفة جديدة


console.log(myName.length); // لنعرف طول المصفوفة


console.log(myName.pop()) //لحذف اخر عنصر في المصفوفة
console.log(myName)


console.log(myName.push("banihani")) // لادخال عنصر جديد في اخر المصفوفة
console.log(myName)


console.log(myName.shift()) // لحذف اول عنصر في المصفوفة
console.log(myName)


console.log(myName.unshift("aiman")) //  لادخال عنصر جديد اول المصفوفة
console.log(myName)


console.log(delete myName[0]) // لحذف عنصر معين داخل المفوفة و استبداله ب فارغ
console.log(myName)
myName[0] = "aiman"


let myNameAndAge = myName.concat(myAge) // انشاء مصفوفة جديدة و العناصر التي داخلها تكون ربط (جميع) العناصر الموجودة بين المصفوفتين المختارتين
console.log(myNameAndAge)
