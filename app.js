// how to rename object property without mutate

const  bobo = {
    name: 'Bobo',
    job: 'Front-End Master',
    age: 25
}

const  renameProp = ( oldProp, newProp, { [oldProp]:old, ...others }) => ({
    [newProp]: old,
    ...others
})

const newBobo = renameProp('name', 'firstName', bobo)
console.log(newBobo)
