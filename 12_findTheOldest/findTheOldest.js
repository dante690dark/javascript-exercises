const findTheOldest = function(people) {

	let maxAge = 0

	const oldest = people.reduce((obj, person) => {

		const {yearOfBirth, yearOfDeath, name} = person

		const age = yearOfDeath - yearOfBirth || new Date().getFullYear() - yearOfBirth;
		
		if(maxAge < age){
			maxAge = age
			obj.name = name
		}
		
		return obj
	}, {})

  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
