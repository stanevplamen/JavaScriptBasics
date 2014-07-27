function sum(items) {
	var i,
		itemsSum;

	itemsSum = undefined;
	for (i = 0; i < items.length; i += 1) {
		itemsSum += items[i];
	}
	return itemsSum;
}

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log(sum(['Peter', ' ', 'Ivanov']));

function doStuff() {
    var t = arguments[3];
    var tt = arguments.name;
    //arguments.callee(); === doStuff();

    // vikame obekta vurhy koito iskame da se izpulni suotvetnata funkcia
    //functionName.call(obj, args, args);
    //functionName.apply(obj, arrayOfArgs);
}

doStuff(1, 2, 3, 4, 5);


var getPropertiesNames = function () {
    var props = [];
    for (var prop in this) {
        props.push(prop);
    }
    return props;
}

var person = {
    name: 'gosho',
    age: 17
    //, getPropertiesNames: function () {
    //    var props = [];
    //    for (var prop in this) {
    //        props.push(prop);
    //    }
    //    return props;
    //}
};

//person.getPropertiesNames();

getPropertiesNames.call(person); // -> this shte znachi person

function walk(distance, unitType) {
    console.log(this.name + ' walked' + distance + unitType);
}

walk.call(person, 17, 'm');