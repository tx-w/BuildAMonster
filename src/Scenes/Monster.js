class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 350;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 45;

        this.smileX = this.bodyX - 15;
        this.smileY = this.bodyY + 15;
        
        this.leftHandX = this.bodyX - 110;
        this.lefthandY = this.bodyY + 40;

        this.rightHandX = this.bodyX + 110;
        this.rightHandY = this.bodyY + 40;

        this.rightLegX = this.bodyX + 40;
        this.rightLegY = this.bodyY + 150;

        this.leftLegX = this.bodyX - 70;
        this.leftLegY = this.bodyY + 150;

        this.sKey = null;
        this.dKey = null;
        this.fKey = null;
        this.aKey = null;

     
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_cute_light.png");
        
        my.sprite.rightArm = this.add.sprite(this.rightHandX - 16, this.rightHandY, "monsterParts", "arm_whiteA.png");
        my.sprite.leftArm = this.add.sprite(this.leftHandX + 15, this.lefthandY, "monsterParts", "arm_whiteA.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.rightLeg = this.add.sprite(this.rightLegX + 15, this.rightLegY, "monsterParts", "leg_whiteC.png");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX + 15, this.leftLegY, "monsterParts", "leg_whiteC.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.face = this.add.sprite(this.smileX + 15, this.smileY, "monsterParts", "mouth_closed_sad.png");

        my.sprite.smile = this.add.sprite(this.smileX + 15, this.smileY, "monsterParts", "mouth_closed_happy.png");

        my.sprite.fang = this.add.sprite(this.smileX + 15, this.smileY - 3.5, "monsterParts", "mouth_closed_fangs.png");

        my.sprite.fang.visible = false;
        my.sprite.smile.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.fKey.on('down', (key, event) => {
            my.sprite.fang.visible = true;
            my.sprite.face.visible = false;
            my.sprite.smile.visible = false;
        });

        this.sKey.on('down', (key, event) => {
            my.sprite.smile.visible = true;
            my.sprite.face.visible = false;
            my.sprite.fang.visible = false;
        });
        
        if (this.aKey.isDown){
            my.sprite.body.x -= 10;
            my.sprite.rightArm.x -= 10;
            my.sprite.leftArm.x -= 10;
            my.sprite.rightLeg.x -= 10;
            my.sprite.leftLeg.x -= 10;
            my.sprite.fang.x -= 10;
            my.sprite.face.x -= 10;
            my.sprite.smile.x -= 10;
            my.sprite.eye.x -= 10;
            
            
        }

        if (this.dKey.isDown){
            my.sprite.body.x += 10;
            my.sprite.rightArm.x += 10;
            my.sprite.leftArm.x += 10;
            my.sprite.rightLeg.x += 10;
            my.sprite.leftLeg.x += 10;
            my.sprite.fang.x += 10;
            my.sprite.face.x += 10;
            my.sprite.smile.x += 10;
            my.sprite.eye.x += 10;
        }
        

    }

}