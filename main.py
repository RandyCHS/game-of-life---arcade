class SpriteKindLegacy(Enum):
    Player = 0
    Projectile = 1
    Food = 2
    Enemy = 3
def Update_screen():
    Update_list()
    index = 0
    y = 0
    for index2 in range(scene.screen_height()):
        x = 0
        for index22 in range(scene.screen_width()):
            if Current_state[index] == Alive:
                Grid.setPixel(x, y, 15)
            else:
                Grid.setPixel(x, y, 1)
            index += 1
            x += 1
        y += 1
    scene.set_background_image(Grid)
def Update_list():
    index = 0
    y = 0
    for index23 in range(scene.screen_height()):
        x = 0
        for index24 in range(scene.screen_width()):
            Calculate_neighbors()
            if Grid.getPixel(x, y) != 1:
                if Neighbors < 2 or Neighbors > 3:
                    Current_state[index] = Dead
            else:
                if Neighbors == 3:
                    Current_state[index] = Alive
            index += 1
            x += 1
        y += 1
def button_pressed():
    game.reset()
controller.any_button.onEvent(ControllerButtonEvent.PRESSED, button_pressed)
def Calculate_neighbors():
    Neighbors = 0
    if Grid.getPixel((x + 1) % scene.screen_width(), y) != 1:
        Neighbors += 1
    if Grid.getPixel(x, (y + 1) % scene.screen_height()) != 1:
        Neighbors += 1
    if Grid.getPixel((x + (scene.screen_width() - 1)) % scene.screen_width(), y) != 1:
        Neighbors += 1
    if Grid.getPixel(x, (y + (scene.screen_height() - 1)) % scene.screen_height()) != 1:
        Neighbors += 1
    if Grid.getPixel((x + 1) % scene.screen_width(), (y + 1) % scene.screen_height()) != 1:
        Neighbors += 1
    if Grid.getPixel((x + (scene.screen_width() - 1)) % scene.screen_width(), (y + 1) % scene.screen_height()) != 1:
        Neighbors += 1
    if Grid.getPixel((x + (scene.screen_width() - 1)) % scene.screen_width(), (y + (scene.screen_height() - 1)) % scene.screen_height()) != 1:
        Neighbors += 1
    if Grid.getPixel((x + 1) % scene.screen_width(), (y + (scene.screen_height() - 1)) % scene.screen_height()) != 1:
        Neighbors += 1
Neighbors = 0
x = 0
y = 0
index = 0
Grid: Image = None
Current_state: List[number] = []
Dead = 0
Alive = 0
Alive = 1
Dead = 0
Current_state = []
Grid = image.create(scene.screen_width(), scene.screen_height())
z = 0
while z <= scene.screen_height() - 1:
    a = 0
    while a <= scene.screen_width() - 1:
        if Math.percent_chance(20):
            Current_state.push(Alive)
            Grid.setPixel(a, z, 15)
        else:
            Current_state.push(Dead)
            Grid.setPixel(a, z, 1)
        a += 1
    z += 1
scene.set_background_image(Grid)
def on_forever():
    pause(100)
    Update_screen()
forever(on_forever)