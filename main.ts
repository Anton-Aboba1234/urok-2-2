let l = 0
input.onButtonPressed(Button.A, function () {
    l = randint(0, 6)
    if (l == 1) {
        basic.showString("Yes")
    } else if (l == 2) {
        basic.showString("No")
    } else if (l == 3) {
        basic.showString("Maybe")
    } else if (l == 4) {
        basic.showString("Not Today")
    } else if (l == 5) {
        basic.showString("Next Time")
    } else {
        basic.showString("Of Course")
    }
})
basic.forever(function () {
	
})
