function demo(value) {

    document.getElementById('screen').value += value

}

function demo1() {
    document.getElementById('screen').value = eval(document.getElementById('screen').value)
}

function demo2() {
    document.getElementById('screen').value = ''
}