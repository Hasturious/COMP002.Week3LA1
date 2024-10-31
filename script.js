function greet(name) {
    console.log("Hello " + name)
}

(greet("Jean"))

function circumference(diameter) {
    console.log(2*3.14*diameter/2)
}

(circumference(15))

function funcCaller() {
    calledFunction()
}

function calledFunction(){
    console.log("Im a function being called by another function")
}

funcCaller()

function recurrence() {
    console.log("RECUR!!!")
    recurrence()
}

recurrence()