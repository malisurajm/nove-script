// Data Types : Object ,String, Number, Boolean, Null, Undefined
// Objects: 1. JSON Object {Key: value} ,
// 2. Array Object [ ele 1, ele2 , ele3....]
// 3. Functions

const s1 = {
    Name : 'Priya',
    Age : 24,
    Fees_paid: 34000.33,
    Work_Experience: {
        ABC : '3 months',
        XYZ : '2 MOnths'
    },
    Marks : {
        maths: 45,
        Science: 56,
    },
    Percentage: ['Sem-I: 84', 'Sem-II: 87', 'sem-III: 89'],
    Performance: () => console.log('Good'),
}

console.log(s1.Name, s1.Age, s1.Fees_paid);
console.log("Marks of Maths: ", s1.Marks.maths);


