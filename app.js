function fullname(fname,lname) {
    return fname+lname;
}

console.log(fullname('pimon','tungratog'));


setAge=(age)=>'the age is ' + age;

console.log(setAge(13))


const username = 'pimon tungratog'
const age = 40
const address = 'krungthep'
const customer = {
    customerName:username,
    age,
    address,
    showData(){
        console.log('customer data='+username)
    }
    
}

console.log(customer)
customer.showData()
let customerName = 'jojo'
const address1 = `lo ${customerName}
rem`

console.log(address1)

// const newArray = [100,200,300]
// const data = [10,20,...newArray]

// numb = data.length

// console.log(numb)
// console.log(data)

const newArray = [100,200,300]
const data = [10,20]

data.push(...newArray)

numb = data.length

console.log(data)
console.log(numb)

summation=(x,y)=>{
    return x+y
}
summation=(...numberArr)=>{
    let total = 0
    for(let number of numberArr) total += number
    return total
}

console.log(summation(100,500))
console.log(summation(100,500,1))

sumText=(...stringArr)=>{
    let message  = ''
    for(let mes of stringArr) message += mes
    return message
}

console.log(sumText('โรงเรียน', 'ทุ่งกุลา','พิทยาตม'))

// Destructoring

const product = {
    productName: 'computers',
    price:20000,
    stock:10
}

const {productName,price,stock} = product

console.log(productName)
console.log(price)
console.log(stock)

// Default Parameter

getDataCustomer=(customerName,customerAddress)=>{
    const address = `customer's name: ${customerName} customer's address: ${customerAddress}`
    return address
}

console.log(getDataCustomer('don','Bangkok'))

// join, concat

const data1 = [100,200,300]
const data2 = [400,500]

console.log(data1.concat(data2))

// push, pop, shift, unshift, splice, slice

const data3 = [10,20,30]
data3.push(100,200,300)
console.log(data3)
data3.pop()
console.log(data3)

data3.shift()
console.log(data3)

data3.unshift(999,777,3)
console.log(data3)

// & slice

//splice()

const data4 = [10,20,30,40,50]
console.log(data4)
const lsdata = data4.slice(1,3)
console.log(lsdata)


// for loop, foreach, forof

for(let index = 0; index < data4.length;index++){
    console.log(`order ${index} ${data4[index]}`);
}

data4.forEach(e => {
    if (e>=30) {
        console.log('hello')
    }
    console.log(`สมาชิกใน Array Data: ${e}`);
})

sum=0;
data4.forEach(e => {
    sum += e;
    console.log(`the summation of e is ${sum}`)
})

for (const e of data4){
    if (e >= 30) {
        break;
    }
    console.log(`the member of data is ${e}`)
}

const color = ['แดง','เขียว','น้ำเงิน','ม่วง','ขาว']
console.log(color)
const index = color.indexOf('น้ำเงิน')
console.log(index)

const search = color.find(e => e === 'ขาว')
console.log(search)

const searchIndex = color.findIndex(e => e === 'ขาว')
console.log(searchIndex)

const result = color.map((e,i) => `order ${i} --- ${e}`)


console.log(result)

const forCData = [
    {day:"01/06/2565",weather:"แดดร้อน",temp:27},
    {day:"02/06/2565",weather:"ฝนตก",temp:30},
    {day:"03/06/2565",weather:"หมอก",temp:29}
]

console.log(forCData)

const forcdataResult = forCData.map(e => {
    return e.day
})

console.log(forcdataResult)

// Array Filter

const filterResult = data4.filter(e => e > 30)

console.log(data4)
console.log(filterResult)

const tempResult = forCData.filter(e => {
    return e.temp > 27
}).filter(e => e.weather === 'หมอก')


console.log(forCData)
console.log(tempResult)

// Array Reduce

const summation1 = data4.reduce((value,e) => {
    const total = e + value
    return total
},0)
console.log(data4)
console.log(summation1)

const cart = [
    {sname:'กระเป๋า',price:400},
    {sname:'หน้งสือ',price:900},
    {sname:'กล้องถ่ายรูป',price:5000}
]

const cartResult = cart.reduce((value,e) => {
    const total = e.price + value
    return total
},0)

console.log(`ลูกค้าต้องชำระเงิน = ${cartResult}`)

const data4Result = data4.map(e => {
    return e + e
})

console.log(data4)

console.log(data4Result)
console.log(typeof(data4Result[1]))