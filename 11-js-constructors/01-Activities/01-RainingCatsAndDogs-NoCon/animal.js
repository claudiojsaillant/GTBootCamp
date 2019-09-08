var dog = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function() {
        console.log(this.noise);
    }
}
dog.makeNoise();

var cat = {
    raining: true,
    noise: 'Meow!',
    makeNoise: function() {
        console.log(this.noise);
    }
}
cat.makeNoise();

function massHysteria(obj1,obj2){
    if(obj1.raining != undefined && obj2.raining != undefined){
        if(obj1.raining && obj1.raining === obj2.raining){
            console.log("DOGS AND CATS LIVING TOGUETHER! MASS HYSTERIA!")
        }
    }
}
massHysteria(dog,cat)