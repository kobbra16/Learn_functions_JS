// Функции
//Function Declaration
// function greet(name) {
//     console.log('Hello -', name)
// }

// //Function Expression
// const greet2 = function greet2(name) {
//     console.log('Hello2 -', name)
// }


// greet2('Fedor')
// greet('Maxim')

// console.log(typeof 'greet')
// console.dir(greet) //покажет структуру функции

//Ананимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)


//3.Стрелочные функции
// function greet(name) {
//     console.log('Hello -', name)
// }

// const arrow = (name) => {
//     console.log('Hello -', name)
// }

// const arrow2 = name => console.log('Hello -', name)

// arrow2('Maxim')


// const pow2 = num => num ** 2

// console.log(pow2(5))

// //4.Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b


// console.log(sum(41, 4))
// console.log(sum())


// function sumAll(...all) { //чтобы посчитать сумму всех чисел.
//     let result = 0 //1.создаем result.(результат)
//     for (let num of all) { //let nun из массива all
//         result += num //  к результату прибавляем еще число
//     }
//     return result //возвращаем результат.
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7, )
// console.log(res)


// 5. Замыкание 
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Maxim')
console.log(logWithLastName('koba'))
console.log(logWithLastName('luch'))