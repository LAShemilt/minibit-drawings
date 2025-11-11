let count = 0
function turn_right_90 () {
    minibit.rotatems(mbRobotDirection.Right, 30, 310)
}
function stop_and_wait () {
    minibit.stop(mbStopMode.Brake)
    control.waitMicros(100000)
}
input.onButtonPressed(Button.A, function () {
    // Draw square face
    for (let index = 0; index < 4; index++) {
        minibit.goms(mbDirection.Forward, 30, 300)
        minibit.stop(mbStopMode.Brake)
        control.waitMicros(100000)
        turn_right_90()
        minibit.stop(mbStopMode.Brake)
        control.waitMicros(100000)
    }
    stop_and_wait()
    turn_left_90()
    stop_and_wait()
    minibit.goms(mbDirection.Reverse, 30, 150)
    stop_and_wait()
    turn_left_90()
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 100)
    stop_and_wait()
    turn_right_90()
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 200)
    stop_and_wait()
    // Draw a rectangular body
    for (let index = 0; index < 4; index++) {
        count = 0
        turn_left_90()
        minibit.stop(mbStopMode.Brake)
        control.waitMicros(100000)
        if (count % 2 == 0) {
            minibit.goms(mbDirection.Forward, 30, 400)
            minibit.stop(mbStopMode.Brake)
            control.waitMicros(100000)
        } else {
            minibit.goms(mbDirection.Forward, 30, 300)
            minibit.stop(mbStopMode.Brake)
            control.waitMicros(100000)
        }
        count += 1
    }
    turn_left_90()
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 150)
    minibit.stop(mbStopMode.Brake)
    turn_right_90()
    stop_and_wait()
    draw_arm()
    change_pen()
    minibit.goms(mbDirection.Forward, 30, 400)
    change_pen()
    turn_left_90()
    stop_and_wait()
    draw_arm()
    minibit.rotatems(mbRobotDirection.Right, 30, 200)
    stop_and_wait()
    change_pen()
    minibit.goms(mbDirection.Forward, 30, 200)
    stop_and_wait()
    change_pen()
    minibit.rotatems(mbRobotDirection.Left, 30, 200)
    minibit.goms(mbDirection.Forward, 30, 80)
    stop_and_wait()
    change_pen()
    turn_left_90()
})
function turn_left_90 () {
    minibit.rotatems(mbRobotDirection.Left, 30, 310)
}
function change_pen () {
    minibit.stop(mbStopMode.Brake)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    // Take out pen
    control.waitMicros(1000000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        `)
}
function draw_arm () {
    minibit.move(mbMotor.Right, mbDirection.Forward, 60)
    minibit.move(mbMotor.Left, mbDirection.Forward, 5)
    control.waitMicros(500000)
    stop_and_wait()
    minibit.rotatems(mbRobotDirection.Right, 30, 800)
}
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        `)
})
