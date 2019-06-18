const addToObj = ( arr) => {
    let docObj = {
        name: "",
        specialty: "",
        work_address: "",
    }

    docObj.name = arr[0]
    docObj.specialty = arr[1]
    docObj.work_address = arr[2]
    
    return docObj
}

const createObj = (name, specialty, work_address) => {
    let docArr = [name, specialty, work_address]
    let newObj = addToObj(docArr)
    console.log(newObj);
}

let BowWowKennels = []

const petArrObj = ( arr) => {
    let petArr = {
        name: "",
        breed: "",
    }

    petArr.name = arr[0]
    petArr.breed = arr[1]

    return petArr
}

const createPet = (name, breed) => {
    let petVals = [name, breed]
    let newPet = petArrObj(petVals)
    BowWowKennels.push(newPet)
    console.log(BowWowKennels)
}




createObj('Dr. Doe', 'Oncologist', '1234 Doctor St.')
createPet('Peach', 'Maltese')
createPet('Cheech', 'Chihuaha')