//const myEach = function('4, 3,'){
    //return ['4, 3, 2, 1']
//};


const myEach = (collection, callback) => {
        let newCollection
    if (typeof collection !== Array){
            newCollection = Object.values(collection) 
            //makes it an array
        }
        else {
            newCollection = collection
        }
    
     for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
     }
    return collection
}