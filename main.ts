namespace SpriteKind {
    export const Veggie = SpriteKind.create()
    export const Sprout = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Sprout, function (enemy, sprout) {
    notYouScore = notYouScore + 1
    notyoutext.setText("Not You " + notYouScore)
    winOrLose()
    sprout.destroy()
    if (targetSprout == sprout) {
        targetSprout = null
cowGoAfterSprout()
    }
})
function cowGoAfterSprout () {
    if (targetSprout == null) {
        sprouts = sprites.allOfKind(SpriteKind.Sprout)
        if (sprouts.length > 0) {
            sproutIndex = randint(0, sprouts.length - 1)
            targetSprout = sprouts[sproutIndex]
            // sprout! cry for help! you bout to die fool.
            targetSprout.say("monney monney")
            cow.follow(targetSprout)
        }
    }
}
function winOrLose () {
    if (youScore >= 25) {
        game.showLongText("good news. betty is back in the pen and you have all your food.", DialogLayout.Full)
        game.over(true, effects.smiles)

    }
    if (notYouScore >= 25) {
        game.showLongText("the cows are taking over! run and hide!", DialogLayout.Full)
        game.over(false, effects.slash)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sprout, function (player2, sprout) {
    youScore = youScore + 1
    youtext.setText("Score: " + youScore)
    winOrLose()
    sprout.setKind(SpriteKind.Veggie)
    veggieIndex = randint(0, veggieImgs.length - 1)
    veggieImg = veggieImgs[veggieIndex]
    sprout.setImage(veggieImg)
    sprout.follow(player2)
    sprout.say("")
    if (targetSprout == sprout) {
        targetSprout = null
cowGoAfterSprout()
    }
})
let dirtyDirt: tiles.Location = null
let dirtyDirtIndex = 0
let sprout: Sprite = null
let veggieImg: Image = null
let veggieIndex = 0
let sproutIndex = 0
let sprouts: Sprite[] = []
let notYouScore = 0
let notyoutext: TextSprite = null
let youScore = 0
let youtext: TextSprite = null
let cow: Sprite = null
let veggieImgs: Image[] = []
let blah = 0
let targetSprout: Sprite = null
veggieImgs = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 b b b . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . b b 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 b 4 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . b 4 4 . . . . . . . 
    . . . . . . . 4 4 . . . . . . . 
    . . . . . . . 4 . . . . . . . . 
    `, img`
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 4 4 4 b 4 4 4 4 b 4 4 4 . . 
    . 4 4 4 4 b 4 4 4 4 b 4 4 4 4 . 
    . 4 4 4 b 4 4 4 4 4 b 4 4 4 b . 
    . 4 4 4 b 4 4 4 4 b 4 4 4 4 b . 
    . 4 4 b 4 4 4 4 4 b 4 4 4 b 4 . 
    . 4 4 4 4 4 4 4 b 4 4 4 4 b 4 . 
    . 4 4 4 4 b 4 4 4 4 4 4 4 b 4 . 
    . 4 4 4 b 4 4 4 4 4 4 4 b 4 4 . 
    . 4 4 4 b 4 4 4 4 4 4 4 b 4 4 . 
    . 4 4 b 4 4 4 4 b 4 4 b 4 4 4 . 
    . 4 b 4 4 4 4 4 b 4 4 4 4 4 4 . 
    . b 4 4 4 4 4 b 4 4 4 4 4 4 4 . 
    . . 4 4 4 4 b 4 4 4 4 4 4 4 . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 b 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 b 7 7 7 b b 7 7 7 . 
    . . . 7 7 b 7 7 7 7 b 7 7 7 7 . 
    . . . 7 7 b 7 7 7 b b 7 7 7 7 . 
    . . . 7 b b 7 7 7 b 7 7 7 7 7 . 
    . . . 7 b 7 7 7 b b 7 7 b 7 7 . 
    . . . 7 b 7 7 7 b 7 7 b b 7 . . 
    . . . 7 b 7 7 7 b 7 7 b 7 7 . . 
    . . . 7 b 7 7 7 7 7 b 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 b 7 7 7 . . 
    . . . . 7 7 7 7 7 b b 7 7 . . . 
    . . . . 7 7 7 7 b b 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . 7 7 1 1 d 1 1 7 7 7 . . 
    . . . 7 1 1 1 d d 1 1 d d 7 . . 
    . . 7 7 1 1 1 d 1 1 d d 1 7 . . 
    . . 7 7 1 1 1 1 1 1 d 1 1 7 . . 
    . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
    . . . 7 7 1 d 1 1 1 7 7 7 . . . 
    . . . 7 7 d d 1 7 7 7 7 . . . . 
    . . . 7 7 d 1 7 7 . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 4 . . . . . . . . . . . . 
    . 4 4 4 b 4 4 4 . . . . . . . . 
    . 4 4 b b 4 4 4 b b . . . . . . 
    . 4 4 b 4 4 4 b b 4 4 4 . . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 b . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 b 4 . . 
    . . 4 4 4 4 b b b 4 4 b b 4 . . 
    . . . 4 4 b b 4 4 4 4 b 4 4 . . 
    . . . . . b 4 4 4 4 4 4 4 4 . . 
    . . . . . . 4 4 4 4 4 4 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
let oldManJoe = sprites.create(img`
    . . . . e e e e e e e . . . . . 
    . . . e e e e e e e e e . . . . 
    . . . . . d d d d d . . . . . . 
    . . . . d f d f d d d . . . . . 
    . . . . d d d d d d d . . . . . 
    . . . . d d f d d d d . . . . . 
    . . . . . d d d d d . . . . . . 
    . . f f . . f f f . . f f . . . 
    . . f f f f f f f f f f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f . . . f f . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
oldManJoe.z = 20
cow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . e e e f e . 
    . . . . . . . . . . e e e e e . 
    . . e e e f e e e e f e e f f . 
    . e e e f f e e e f f e e e . . 
    . e e e f f e e e f f e e e . . 
    . e e e e e e e e f e e e e . . 
    . e e e e e f e e e e e e e . . 
    . e e e f f f e e e e f e e . . 
    . e e f f f e e e e e f e e . . 
    . e e e e e . . . e e f f e . . 
    . e e e . . . . . . e e f e . . 
    . e f f . . . . . . . e e e . . 
    . e f e . . . . . . . e e e . . 
    . e e e . . . . . . . e e e . . 
    `, SpriteKind.Enemy)
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`level_0`)
controller.moveSprite(oldManJoe, 150)
scene.cameraFollowSprite(oldManJoe)
youtext = textsprite.create("you:  " + youScore)
youtext.left = 1
youtext.top = 0
youtext.setFlag(SpriteFlag.RelativeToCamera, true)
notyoutext = textsprite.create("not you:  " + notYouScore)
notyoutext.left = 90
notyoutext.top = 0
notyoutext.setFlag(SpriteFlag.RelativeToCamera, true)
let meNameDirt = tiles.getTilesByType(myTiles.tile1)
game.onUpdateInterval(1000, function () {
    if (meNameDirt.length > 0) {
        sprout = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . b b 7 7 7 7 7 7 7 7 7 7 b b . 
            . b 7 7 7 7 7 b b 7 7 7 7 7 b . 
            . 7 7 7 7 7 b 7 b 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 b 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 b 7 7 7 7 7 7 . 
            . b 7 7 7 7 7 b b b 7 7 7 7 b . 
            . b b 7 7 7 7 7 7 7 7 7 7 b b . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Sprout)
        dirtyDirtIndex = randint(0, meNameDirt.length - 1)
        dirtyDirt = meNameDirt[dirtyDirtIndex]
        tiles.placeOnTile(sprout, dirtyDirt)
        meNameDirt.removeAt(dirtyDirtIndex)
        cowGoAfterSprout()
    }
})

game.showLongText("Your cow has escaped. betty wants to eat everything. get your crops before betty does!", DialogLayout.Full)