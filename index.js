

function receivesAFunction(callback){
    callback()

}

function returnsANamedFunction() {
    function returnsFunction(){
        console.log("This is a function")
    }
    return returnsFunction
}

function returnsAnAnonymousFunction() {

    return function(){
        return 1 + 1
    }
}
