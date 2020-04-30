enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
function Update_screen () {
    Update_list()
    index = 0
    y = 0
    for (let index2 = 0; index2 < scene.screenHeight(); index2++) {
        x = 0
        for (let index2 = 0; index2 < scene.screenWidth(); index2++) {
            if (Current_state[index] == Alive) {
                Grid.setPixel(x, y, 15)
            } else {
                Grid.setPixel(x, y, 1)
            }
            index += 1
            x += 1
        }
        y += 1
    }
    scene.setBackgroundImage(Grid)
}
function Update_list () {
    index = 0
    y = 0
    for (let index2 = 0; index2 < scene.screenHeight(); index2++) {
        x = 0
        for (let index2 = 0; index2 < scene.screenWidth(); index2++) {
            Calculate_neighbors()
            if (Grid.getPixel(x, y) != 1) {
                if (Neighbors < 2 || Neighbors > 3) {
                    Current_state[index] = Dead
                }
            } else {
                if (Neighbors == 3) {
                    Current_state[index] = Alive
                }
            }
            index += 1
            x += 1
        }
        y += 1
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
function Calculate_neighbors () {
    Neighbors = 0
    if (Grid.getPixel((x + 1) % scene.screenWidth(), y) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel(x, (y + 1) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel((x + (scene.screenWidth() - 1)) % scene.screenWidth(), y) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel(x, (y + (scene.screenHeight() - 1)) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel((x + 1) % scene.screenWidth(), (y + 1) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel((x + (scene.screenWidth() - 1)) % scene.screenWidth(), (y + 1) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel((x + (scene.screenWidth() - 1)) % scene.screenWidth(), (y + (scene.screenHeight() - 1)) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
    if (Grid.getPixel((x + 1) % scene.screenWidth(), (y + (scene.screenHeight() - 1)) % scene.screenHeight()) != 1) {
        Neighbors += 1
    }
}
let Neighbors = 0
let x = 0
let y = 0
let index = 0
let Grid: Image = null
let Current_state: number[] = []
let Dead = 0
let Alive = 0
Alive = 1
Dead = 0
Current_state = []
Grid = image.create(scene.screenWidth(), scene.screenHeight())
for (let y = 0; y <= scene.screenHeight() - 1; y++) {
    for (let x = 0; x <= scene.screenWidth() - 1; x++) {
        if (Math.percentChance(20)) {
            Current_state.push(Alive)
            Grid.setPixel(x, y, 15)
        } else {
            Current_state.push(Dead)
            Grid.setPixel(x, y, 1)
        }
    }
}
scene.setBackgroundImage(Grid)
forever(function () {
    pause(100)
    Update_screen()
})
