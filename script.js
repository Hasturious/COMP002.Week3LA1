function greet(name) {
    console.log("Hello " + name)
}

(greet("Jean"))

function circumference(diameter) {
    console.log(2*3.14*diameter/2)
}

(circumference(15))

function funcCaller() {
    console.log("This is the first statement")
    calledFunction()
    console.log("third console log")
}

function calledFunction(){
    console.log("Im a function being called by another function")
}

funcCaller()

function recurrence() {
    console.log("RECUR!!!")
    recurrence()
}

greet() //The function works fine. currently there is not a parameter so it shows as "undefined"

recurrence()