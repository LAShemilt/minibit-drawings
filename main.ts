let count = 0
input.onButtonPressed(Button.A, function () {
    // Draw square face
    for (let index = 0; index < 4; index++) {
        minibit.goms(mbDirection.Forward, 30, 300)
        minibit.stop(mbStopMode.Brake)
        control.waitMicros(100000)
        minibit.rotatems(mbRobotDirection.Right, 30, 320)
        minibit.stop(mbStopMode.Brake)
        control.waitMicros(100000)
    }
    stop_and_wait()
    // Draw one side of neck
    minibit.rotatems(mbRobotDirection.Left, 30, 320)
    stop_and_wait()
    minibit.goms(mbDirection.Reverse, 30, 150)
    stop_and_wait()
    minibit.rotatems(mbRobotDirection.Left, 30, 320)
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 100)
    stop_and_wait()
    minibit.rotatems(mbRobotDirection.Right, 30, 320)
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 200)
    stop_and_wait()
    // Draw a rectangular body
    for (let index = 0; index < 4; index++) {
        count = 0
        minibit.rotatems(mbRobotDirection.Left, 30, 320)
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
    // Move down the side of the body to draw arm
    minibit.rotatems(mbRobotDirection.Left, 30, 320)
    stop_and_wait()
    minibit.goms(mbDirection.Forward, 30, 150)
    minibit.stop(mbStopMode.Brake)
    // starting right arm loop (arm by his side)
    minibit.rotatems(mbRobotDirection.Right, 30, 200)
    stop_and_wait()
    minibit.move(mbMotor.Right, mbDirection.Forward, 60)
    minibit.move(mbMotor.Left, mbDirection.Forward, 5)
    control.waitMicros(500000)
    stop_and_wait()
    minibit.rotatems(mbRobotDirection.Right, 30, 640)
    change_pen()
    minibit.goms(mbDirection.Forward, 30, 150)
})
function stop_and_wait () {
    minibit.stop(mbStopMode.Brake)
    control.waitMicros(100000)
}
function change_pen () {
    minibit.stop(mbStopMode.Brake)
    // Take out pen
    control.waitMicros(1000000)
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
