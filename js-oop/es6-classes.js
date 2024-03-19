class Cat{
    constructor(name, color, age){
    this.name = name
    this.color = color
    this.age = age
    }

    makesSound() {
        console.log('MEOW')
    }
    eat(){
        console.log('EAT')
    }
    sleep(){
        console.log('SLEEP')
    }
}

const cat1 = new Cat('Simba', 'Orange', 1)
const cat2 = new Cat('Lucy', 'White', 2)
const cat3 = new Cat('Oliver', 'Brown', 3)

const allCats = [cat1, cat2, cat3]
let oldest = allCats[0]
for(const cat of allCats){
    console.log(cat)
    cat.sleep()
    cat.eat()
    cat.makesSound()
    console.log()
    if(cat.age > oldest.age) oldest = cat
}
console.log(oldest)