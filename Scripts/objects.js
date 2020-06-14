"use strict";
//Prototype and inheritance
(
    function () {
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        
        display('Prototype and inheritance');
        
        display(Person.prototype);
        display(typeof Person.prototype);

        let jim = new Person('jim','cooper');
        display(jim.prototype);//Undefined;
        display(jim.__proto__); // It is an object pointing to the person prototype

        display(Person.prototype===jim.__proto__);//true;

        //Add a property to Person's prototype
        Person.prototype.age=39;
        console.log(Person.prototype);
        console.log(jim.__proto__);

        let john= new Person("John","peter");

        john.age=30;//John own property;
        console.log(jim.age);
        console.log(john.__proto__.age);// 39
        console.log(john.age);// 30 this is a new property to john.

        console.log(jim.hasOwnProperty("age"));//false
        console.log(john.hasOwnProperty("age"));//true

        //updating Functions prototype;

        Person.prototype = {
            age:60
        };

        let mary = new Person('Mary','Jose');
        console.log(jim.age);// 39
        console.log(john.age);//30
        console.log(mary.age);//60


        display('<br/>');
        display('<hr/>');
    }
)();


//Object properties.
(
    function () {
        //using object literals.
        let taxForm = {
            name: "990PF",
            year: 2019,
            clientName: 'Wlamart',
            entityName: 'Az entity',
            taxRate: 0.08,
            revenue: 89000,
            finalTax: function () {
                return (this.taxRate * this.revenue);
            }
        }

        //[notation]
        display(taxForm["name"]);
        //iterate all properties
        for (let propertyName in taxForm) {
            display(propertyName + ":" + taxForm[propertyName]);
        }

        // Object descriptors for a property

        display(Object.getOwnPropertyDescriptor(taxForm, "name"));

        //Update a property descriptor

        Object.defineProperty(taxForm, "name", { writable: false });
        //below statement gives error. Make sure you use 'use strict' option.

        //taxForm.name='990';

        console.log(Object.keys(taxForm));

        Object.defineProperty(taxForm, "name", { enumerable: false });
        console.log(Object.keys(taxForm)); // name property will not be displayed;

        delete taxForm.year;
        console.log(Object.keys(taxForm));

        //Object.defineProperty(taxForm,"name",{configurable:false}); 
        //delete taxForm.name; // This gives error message as name is now not configurable.

        //get set

        Object.defineProperty(taxForm, "companyName", {
            get: function () { return this.clientName + ', ' + this.entityName; }
        }
        );

        Object.defineProperty(taxForm, "profit",
            {
                get: function () {
                    this.revenue * .90;
                },
                set: function (value) {
                    this.revenue = value *1.10;
                }
            });

        display(taxForm.companyName);

        taxForm.profit=9000;
        display(taxForm.revenue);
    }
)();

(
    function () {
        let person = {
            firstName: "Muthusamy",
            lastName: "Vellaisamy Nadar",
            Age: 16,
            address: "h hdii kklkjasdk ",
            display: function () {
                console.log(this.firstName + ',' + this.lastName);
            }
        };
        person.Profession = "Capender";
        person.isAdult = function () {
            return (this.Age >= 18);
        }
        display(person);
        display(person.isAdult());


        //Shorthand notaion for methods and properties.

        function RegisterStudent(firstName, lastName, standard) {
            let student = {
                firstName,
                lastName,
                standard,
                displayStudent() { console.log(firstName + ', ' + lastName) }
            }
            display(student);
            student.displayStudent();

        }

        RegisterStudent('Srinath', 'Muthusamy', 5);

        // Object object

        display(Object.keys(person));
        for (let propetyName in person) {
            display(propetyName + '-->' + person[propetyName]);
        }

        ///Equality operator === Object.is
        display('<hr/>');
        display('Equality operator === Object.is');
        display('<br/>');
        let person1 = person;
        display('===   | ' + (person1 === person));
        display('Object.is  | ' + Object.is(person, person1));

        ///Object merge property and immutability
        display('<hr/>');
        display('Object merge property and immutability');
        display('<br/>');

        let student = {
            studentFirstName: "Srinath",
            studentLastName: "Muthusamy",
        }
        let newObject = Object.assign({}, student, person);
        display(person);
        display(student);
        display(newObject);

        ///Constructor function
        display('<hr/>');
        display('Constructor function');
        display('<br/>');
        function Animal(name, type, sound) {
            this.name = name;
            this.type = type;
            this.makeSound = function () {
                console.log(name + ' make sounds like ' + sound);
            }
        }

        let toni = new Animal('Toni', 'dog', 'vow vow');
        toni.makeSound();
        display(toni);

    }
)();