class Cat {
    makeSound() {
        return `${this.constructor.name}: Meowww`;
    }

    eat() {
        return "I have benn feed";
    }
}

// exports = Cat; // It will not work with `new Cat();`
// exports.Cat = Cat; // It will require `new Cat.Cat();` to work (yuck!)
module.exports = Cat;