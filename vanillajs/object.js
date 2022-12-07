const Person = {
    firstName: "Kimi",
    lastname: "Hime",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 65,
    height: 172,
    weightIdeal: function() {
        const heightMinus100= this.height - 100;
        return heightMinus100- (heightMinus100 * 10) /100 ;
    },
    needDiet: function() {
    const weightIdeal = this.weightIdeal()
    if (weightIdeal - 5 > this.weight)
       return (
       "you need more protein, need more" + (weightIdeal - this.weight) + "Kg"
       );
    else if (weightIdeal + 5 < this.length) 
       return (
       "You need a mayo diet, need reduce weight: " +
       (this.weight - weightIdeal) +
       "Kg"
       );
    return "you are in a good shape"
       },
    };

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province:["Bali", "Jawa Timur", "Jawa Tengah"],
//         city: ["Singaraja", "gianyar", "Negare", "bandung"],
//     },
//     My: {},
//     TH: {
//         province: [],
//     },
// };

// console.log(countries?.TH?.province ?? "Not Found");