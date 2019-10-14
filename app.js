// how to rename object property without mutate

const  bobo = {
    name: 'Bobo',
    job: 'Front-End Master',
    age: 25,
    address: {
        city: 'dhaka',
        area: 'mirpur',
        country: 'bd'
    }
}

const  renameProp = ( oldProp, newProp, { [oldProp]:old, ...others }) => ({
    [newProp]: old,
    ...others
})

const newBobo = renameProp('area', 'nameOfArea', bobo.address)

//Adding method rename functionality
const bobonew = (propName, {[propName]:newAddress}) => {
return {
    ...bobo,
    newAddress: newBobo

}
}

console.log(bobonew('address', bobo))

