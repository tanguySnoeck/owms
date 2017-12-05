var toDestroy=[];
var tabTxt=[];
var textInfo;
var Select = function(game) {};
console.log('select');
Select.prototype = {
    btnConfig: {

    },
    menuConfig: {
        className: "inverse",
        startY: 230,
        startX: 30
    },
    init: function() {
        this.titleText = game.make.text(game.world.centerX, 100, "OWMS", {
            font: 'bold 60pt TheMinion',
            fill: '#FDFFB5',
            align: 'center'
        });
        this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
        this.titleText.anchor.set(0.5);
        this.optionCount = 1;
    },
    create: function() {
        var local = this;
        /*var playSound = gameOptions.playSound,
            playMusic = gameOptions.playMusic;
        */
        var conf ={
            default: true,
            x1: 50,
            y1: 230,
            x2: 120,
            y2: 255,
            txt: 'Start',
            font:'16px TheMinion',
            color:'black',
            size: 0,
            height:0
        }

        //background image and title text
        game.add.sprite(0, 0, 'bg');
        game.add.existing(this.titleText);

        //connexion messages: info and debug
        textInfo = game.add.text(10, 50, '', {
            font: '18px Arial'
        });

        //creating the user and password input
        var userBg = createUserInput();
        var passBg = createPassInput();

        // button submit
        conf.x1=game.width / 2 - 100,conf.y1 = 320,conf.x2 = game.width / 2 - 80, conf.y2 = 340, conf.txt="Submit",conf.size=100;
        var submitBtn = this.addButtonCanvas(function() {

            var confTxtInfo ={
                color:'red',
                x2:10,
                y2:50,
                txt:'',
                font: '18px Arial'
            };

            textInfo.destroy();

            if (user.value === '' && password.value === '') {
                //not connected
                confTxtInfo.txt = 'Password or username is empty !\n user :' + user.value + '\n password :' + password.value, 'red';
                textInfo = local.addButtonTxt(confTxtInfo);
            }
            //MAUVAIIIIIIIIIIIS 's"e(drtfcvgybrezxw'ddtcfg vh)
        /*    if (user.value.length <= 5 || password.value.length <= 5 && user.value.length >0 || password.value.length >0) {
                 //not connected
                confTxtInfo.txt='User or password is too short ! Must be greater than 5.';
                textInfo = local.addButtonTxt(confTxtInfo);
            }*/
            else {
                // connected
                // check user or create one
                // then displaying the play button
                conf.x1=1000,conf.y1 = 415,conf.x2 = 1070, conf.y2 = 440, conf.txt="Play !",conf.size=0;
                Client.newUser(user.value, password.value);
                local.addButtonCanvas(function() {
                    game.state.start("Waiting");
                }, conf);
                local.addButtonTxt(conf);
            }
        }, conf);
        var submit=this.addButtonTxt(conf);

        // button => reset
        conf.x1=game.width / 2 + 10,conf.y1 = 320,conf.x2 = game.width / 2 +35, conf.y2 = 340, conf.txt="Reset",conf.size=100;
        var resetBtn = this.addButtonCanvas(function() {
            console.log('cc')
        }, conf);
        var reset=this.addButtonTxt(conf);

        // button => disconnect
        // todo

        //button => back
        conf.x1=50,conf.y1 = 415,conf.x2 = 130, conf.y2 = 440, conf.txt="Back", conf.size=0;
        var backBtn = this.addButtonCanvas(function() {
            game.state.start('GameMenu');
        }, conf);

        var back = this.addButtonTxt(conf);

        PhaserInput.onKeyboardOpen.add(function() {
            console.error("keyboard open", PhaserInput.KeyboardOpen)
        });
        PhaserInput.onKeyboardClose.add(function() {
            console.error("keyboard close", PhaserInput.KeyboardOpen)
        });

    }
};
Phaser.Utils.mixinPrototype(Select.prototype, mixins);

function createUserInput(){
    userBg = game.add.nineSlice(game.width / 2 + 5, 180, 'input', null, 200, 50);
    userBg.anchor.set(0.5);
    user = game.add.inputField(game.width / 2 - 85, 180 - 17, {
        font: '18px Arial',
        fill: '#212121',
        fillAlpha: 0,
        fontWeight: 'bold',
        forceCase: PhaserInput.ForceCase.upper,
        width: 150,
        max: 20,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Username',
        textAlign: 'center',
        zoom: true
    });
}

function createPassInput(){
    passBg = game.add.nineSlice(game.width / 2 + 5, 250, 'input', null, 200, 50);
    passBg.anchor.set(0.5);
    password = game.add.inputField(game.width / 2 - 85, 250 - 17, {
        font: '18px Arial',
        fill: '#212121',
        fillAlpha: 0,
        fontWeight: 'bold',
        width: 150,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Password',
        textAlign: 'center',
        type: PhaserInput.InputType.password,
        zoom: true
    });
    password.focusOutOnEnter = false;
    testHolder = password;
}
