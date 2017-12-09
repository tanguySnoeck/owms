var sprite, platforms, hidePlatforms, traversePlatforms, player, cursors, kalash, bullet,trap,pickTrap, trapKey,timer, timerCoord, timerFin;
var portal, portalPlatform, portalLeft, portalRight;
var scoreText, sword, isPickedUp = null, isCollected = false;
var booleenBloque = false;
var booleenFin = false;
var playerMap = {};
var hitTraversePlatform;
var activeWeapon;
var kalashPlayer;
var fire;
var kalashSprite;
var y;
var myBullets;
var ennemyBullets;
var Play = function(){};

var Play = {
  create: function(){
    console.log('play create !');
    var bg = game.add.sprite(0,0,'sky');
    bg.fixedToCamera=true;
    platforms = game.add.group();
    platforms.enableBody =true;
    hidePlatforms = game.add.group();
    hidePlatforms.enableBody=true;
    traversePlatforms=game.add.group();
    traversePlatforms.enableBody=true;

    /*var barConfig = {x:150, y:50};
    this.myHealthBar = new HealthBar(this.game, barConfig);
    this.myHealthBar.setFixedToCamera(true);
    this.myHealthBar.setPercent(50);*/

    var ground;
    for(var i=1400; i<6000; i+=400){
      if(i>1000 && i<4600){
        ground = platforms.create(i,game.world.height-64,'ground');
        ground.scale.setTo(1,2);
        ground.body.immovable=true;
        ground.body.checkCollision.down=false;
      }
    }
    ground = platforms.create(0,700,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(5600,700,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(390,716,'ground');
    ground.scale.setTo(0.025,2);
    ground.body.immovable=true;
    ground.body.checkCollision.left = false;

    ground = platforms.create(0,930,'ground');
    ground.scale.setTo(0.70,1);
    ground.body.immovable=true;
    ground.body.checkCollision.left = false;

    ground = platforms.create(5600,716,'ground');
    ground.scale.setTo(0.025,2);
    ground.body.immovable=true;

    ground = platforms.create(5720,930,'ground');
    ground.scale.setTo(0.70,1);
    ground.body.immovable=true;
    ground.body.checkCollision.left = false;

    //traversePlatforms
    ground = platforms.create(400,764,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    //traversePlatforms
    ground = platforms.create(5200,764,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(975,764,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(4625,764,'ground');
    ground.scale.setTo(1,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(1500,650,'ground');
    ground.scale.setTo(1.5,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3900,650,'ground');
    ground.scale.setTo(1.5,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2300,650,'ground');
    ground.scale.setTo(0.5,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3500,650,'ground');
    ground.scale.setTo(0.5,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2650,650,'ground');
    ground.scale.setTo(1.75,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2400,500,'ground');
    ground.scale.setTo(0.125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2500,380,'ground');
    ground.scale.setTo(0.125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2750,250,'ground');
    ground.scale.setTo(1.25,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3550,500,'ground');
    ground.scale.setTo(0.125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3450,380,'ground');
    ground.scale.setTo(0.125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2525,800,'ground');
    ground.scale.setTo(0.25,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3375,800,'ground');
    ground.scale.setTo(0.25,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(885,950,'ground');
    ground.scale.setTo(0.0125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(5110,950,'ground');
    ground.scale.setTo(0.0125,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(2750,800,'ground');
    ground.scale.setTo(1.25,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(3750,800,'ground');
    ground.scale.setTo(1.5,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    ground = platforms.create(1650,800,'ground');
    ground.scale.setTo(1.5,0.5);
    ground.body.immovable = true;
    ground.body.checkCollision.down=false;

    portal = platforms.create(6,686,'portalDown');
    portal.body.immovable=true;
    portal = platforms.create(5955,686,'portalDown');
    portal.body.immovable=true;

    /*ground = hidePlatforms.create(405,900,'ground');
    ground.scale.setTo(0.75,0.5);
    ground.body.immovable=true;
    ground.body.checkCollision.down=false;

    ground = hidePlatforms.create(5295,900,'ground');
    ground.scale.setTo(0.75,0.5);
    ground.body.immovable=true;*/

    sword = game.add.sprite(200,500,'sword');
    sword.scale.setTo(0.5,1);

    portalLeft = game.add.sprite(0,615,'portal');
    portalLeft.frame=1;
    portalRight = game.add.sprite(5949,615,'portal');
    portalRight.frame=1;


    trapKey = game.input.keyboard.addKey(Phaser.KeyCode.A);


    timer = game.time.create(false);
    timer.add(4000,stopPlayer,this);

    timerCoord = game.time.create(false);
    timerCoord.loop(100,getCoord,this);



    pickTrap = game.add.sprite(300,500,'trap');
    pickTrap.scale.setTo(0.1,0.1);
    pickTrap.frame=1;
    game.physics.arcade.enable(pickTrap);
    pickTrap.body.gravity.y=2700;

    game.physics.arcade.enable(sword);
    sword.body.gravity.y=2700;


    //kalash
    kalash = game.add.weapon(30, 'bullet');
    kalash.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    kalash.bulletSpeed = 4000;
    kalash.fireRate = 60;
    spritek = game.add.sprite(100, 500, 'kalash');
    spritek.frame = 1;


    game.physics.arcade.enable(spritek);
    spritek.inputEnabled = true;
    spritek.body.gravity.y=3000;
    spritek.scale.setTo(0.25, 0.25);
    spritek.anchor.setTo(0.5,0.3);
    kalash.trackSprite(spritek, 14, 0);


    cursors = game.input.keyboard.createCursorKeys();
    //getCoordinates(32,game.world.height-150);
    Client.askNewPlayer();
  },

  update: function(){
     //pas sur
     /*game.physics.arcade.collide(kalash, platforms);
     game.physics.arcade.collide(player, spritek, pickUpItem, null, this);*/


    //console.log(y++);
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    var hitHidePlatform;
    for(var pl in playerMap){
      var player2=playerMap[pl];
      player2.body.velocity.x=0;

      if(player2.id!==player.id){
        game.physics.arcade.overlap(myBullets,player2,playerTouched);
      }

        //hitHidePlatform = game.physics.arcade.collide(player2,hidePlatforms);
    	//hitTraversePlatform = game.physics.arcade.overlap(player2,traversePlatforms);
      if(ennemyBullets!==undefined){
      for(var bullets in ennemyBullets.children){
          if(ennemyBullets.owner!==player2.id){
            game.physics.arcade.overlap(ennemyBullets.children[bullets],player2,ennemyTouched);
          }
      }
    }

      game.physics.arcade.collide(player2,platforms);
      game.physics.arcade.collide(player2, sword, pickUpItem, null, this);

      //kalash
      game.physics.arcade.collide(spritek, platforms);
      game.physics.arcade.collide(player, spritek, pickUpItem, null, this);
      game.physics.arcade.collide(spritek, platforms, collisionItemPlatform(spritek), null, this);
      //pas sur
      game.physics.arcade.collide(kalash, platforms);
      game.physics.arcade.collide(player, spritek, pickUpItem, null, this);
      //game.physics.arcade.collide(kalash, platforms, collisionItemPlatform(kalash), null, this);

      if(isPickedUp == sword){
        sword.body.x = player2.body.x
        sword.body.y = player2.body.y
        if(game.input.activePointer.isDown){
          isPickedUp = null;
          sword.body.velocity.x = 500;

          game.physics.arcade.moveToPointer(sword, 3000)
          sword.body.moveTo(2000, 300, Phaser.ANGLE_RIGHT)
        }
      }else if(isPickedUp == spritek){
        if(game.input.activePointer.isDown){
          isPickedUp = null;
        }
      }*/


  }
  if(hitPlatform && (player.position.x <20||player.position.x>5960)&& player.position.y==638){
    Client.finish(player.id);
  }


	if(player !== undefined){
		player.body.velocity.x=0;

    if(cursors.left.isDown)
		{
			player.body.velocity.x=-300;
    	player.animations.play('left');
      kalashPlayer.fireAngle = 180;
      kalashSprite.frame = 0;
      kalashSprite.alignIn(player, Phaser.RIGHT_CENTER);
		}else if (cursors.right.isDown) {
			player.body.velocity.x=300;
			player.animations.play('right');
       kalashPlayer.fireAngle = 0;
       kalashSprite.frame = 1;
       kalashSprite.alignIn(player, Phaser.LEFT_CENTER);
		}else {
			player.animations.stop();
			player.frame=4;
      kalashSprite.alignIn(player, Phaser.CENTER);
		}
		 // saut de 130 y.
		 if(hitTraversePlatform){
			if(cursors.down.isDown && player.body.touching.down){

			}else{
					game.physics.arcade.collide(player,traversePlatforms);
				}
		}

		if(cursors.up.isDown && player.body.touching.down && (hitPlatform /*|| hitHidePlatform||hitTraversePlatform*/)){
			player.body.velocity.y=-1000;
		}
		if(cursors.down.isDown && !player.body.touching.down)
		{
			player.body.velocity.y=1000;
		}

    var  fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    if (fireButton.isDown) {
        kalashPlayer.fire();
        fire=true;
    }else{
        fire=false;
    }
    //game.physics.arcade.collide(sword, platforms, collisionItemPlatform(sword), null, this);

    /*var hitPlayerTrap;
    game.physics.arcade.collide(pickTrap, platforms, collisionItemPlatform(pickTrap), null, this);
    var hitPickTrap = game.physics.arcade.overlap(player,pickTrap);
    if(hitPickTrap){
    count=1;
    pickTrap.kill();
  }
  console.log(""+trapKey);
  if(trapKey.isDown && count>0){
  trap = lanceTrap(trap);
}
if(trap!==undefined){
game.physics.arcade.collide(trap, platforms, collisionItemPlatform(trap), null, this);
hitPlayerTrap = game.physics.arcade.overlap(player,trap);

}
if(hitPlayerTrap){
trap.animations.play('close',60,false,true);
booleenBloque = true;
player.animations.stop();
timer.start();
console.log("timer lancé");

}*/

if(hitPlatform && (player.position.x <20||player.position.x>5960)&& player.position.y==638){
  Client.finish(player.id);
}

  addNewPlayer : function(data){
    var id=data.id;
    var sprite= game.add.sprite(30,500,'dude');
    game.physics.arcade.enable(sprite);
    sprite.body.bounce.y=0;
    sprite.body.gravity.y=2700;
    sprite.body.collideWorldBounds=true;
    sprite.animations.add('left',[0,1,2,3],10,true);
    sprite.animations.add('right',[5,6,7,8],10,true);
    sprite.scale.setTo(0.5,1);

    sprite.body.collideWorldBounds=true;
    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(resetPlayer,sprite);
    sprite.id=data.id;
    data.sprite=sprite;


    kalash = game.add.weapon(1000, 'bullet');
    kalash.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    kalash.bulletSpeed = 1000;
    kalash.bulletKillDistance=500;
    kalash.fireRate = 150;
    var spritek = game.add.sprite(100, 500, 'kalash');
    spritek.frame = 1;
    spritek.alignIn(player, Phaser.LEFT_CENTER);
  }else {
    player.animations.stop();
    player.frame=4;
  }
  // saut de 130 y.
  if(hitTraversePlatform){
    if(cursors.down.isDown && player.body.touching.down){


    game.physics.arcade.enable(spritek);
    spritek.inputEnabled = true;
    spritek.scale.setTo(0.25, 0.25);
    spritek.anchor.setTo(0.5,0.3);
    kalash.trackSprite(spritek, 14, 0);

    data.activeWeapon=kalash;
    data.activeWeaponSprite=spritek;

    playerMap[id]=data;
    if(player===undefined){
      playerData=playerMap[id];
      player=playerMap[id].sprite;
      game.camera.follow(player,Phaser.Camera.FOLLOW_LOCKON);
      myBullets=kalash.bullets;
    }else{
      if(ennemyBullets===undefined){
        kalash.bullets.owner=data.id;
        ennemyBullets=kalash.bullets;
      }else{
        ennemyBullets.add(kalash.bullets);
      }
    }



    if(kalashPlayer===undefined){
      kalashPlayer=kalash;
      kalashSprite=spritek;
    }
  }

  if(cursors.up.isDown && player.body.touching.down && (hitPlatform /*|| hitHidePlatform||hitTraversePlatform*/)){
    player.body.velocity.y=-1000;
  }
  if(cursors.down.isDown && !player.body.touching.down)
  {
    player.body.velocity.y=1000;
  }

  getCoordinates(player.position.x,player.position.y);
  //timerCoord.start();

}

},

/*render : function (){
  game.debug.cameraInfo(game.camera, 32, 32, "#000000");

  game.debug.pointer( game.input.activePointer,false,null,null,"#0000000" );
},*/

addNewPlayer : function(id,x,y){
  playerMap[id] = game.add.sprite(x,y,'dude');
  game.physics.arcade.enable(playerMap[id]);
  playerMap[id].body.bounce.y=0;
  playerMap[id].body.gravity.y=2700;
  playerMap[id].body.collideWorldBounds=true;
  playerMap[id].animations.add('left',[0,1,2,3],10,true);
  playerMap[id].animations.add('right',[5,6,7,8],10,true);
  playerMap[id].scale.setTo(0.5,1);

  playerMap[id].body.collideWorldBounds=true;
  playerMap[id].checkWorldBounds = true;
  playerMap[id].events.onOutOfBounds.add(killPlayer,this);
  playerMap[id].events.onOutOfBounds.add(resetPlayer,this);

  if(player===undefined){
    player=playerMap[id];
    game.camera.follow(player,Phaser.Camera.FOLLOW_LOCKON);
  }
},

  movePlayer : function(movedPlayer,isFired){

	var player2=playerMap[movedPlayer.id].sprite;
  var player2KalashSprite = playerMap[movedPlayer.id].activeWeaponSprite;
  var player2Kalash=playerMap[movedPlayer.id].activeWeapon;

	var deplacementH=player2.position.x-movedPlayer.x;
	var deplacementV=player2.position.y-movedPlayer.y;

	if(deplacementV>0){
		player2.body.velocity.y=10;
		player2.position.y=movedPlayer.y;
	}else if(deplacementV<0){
		player2.body.velocity.y=-10;
		player2.position.y=movedPlayer.y;
	}

	if(deplacementH>0){
		player2.animations.play('left');
		player2.body.velocity.x=deplacementH;
		player2.position.x=movedPlayer.x;
    player2Kalash.fireAngle = 180;
    player2KalashSprite.frame = 0;
    player2KalashSprite.alignIn(player2, Phaser.RIGHT_CENTER);
	}else if(deplacementH<0){
		player2.animations.play('right');
		player2.body.velocity.x=deplacementH;
		player2.position.x=movedPlayer.x;
    player2Kalash.fireAngle = 0;
    player2KalashSprite.frame = 1;
    player2KalashSprite.alignIn(player2, Phaser.LEFT_CENTER);
	}else{
		player2.animations.stop();
		player2.body.velocity.x=0;
		player2.frame=4;
    player2KalashSprite.alignIn(player2, Phaser.CENTER);
	}

    if(isFired){
      player2Kalash.fire();
    }


  removePlayer : function(id){
      if(playerMap[id]!==undefined){
              playerMap[id].sprite.destroy();
              playerMap[id].activeWeaponSprite.destroy();
              delete playerMap[id];
        }
    },

    fin : function(){
      portalLeft.frame=0;
      portalRight.frame=0;
      timerFin = game.time.create(false);
      timerFin.add(2000,function(){
        game.state.start('GameOver');
      },this);
      player.animations.stop();
      timerFin.start();
      //booleenFin=true;
    },


  ajoutActive:  function(idPlayer,idItem){
    var it=weapons[idItem];
    var player2=playerMap[idPlayer];

    it.owner=player2;
    player2.activeWeapon=it;
  },

  var deplacementH=player2.position.x-movedPlayer.x;
  var deplacementV=player2.position.y-movedPlayer.y;

  if(deplacementV>0){
    player2.body.velocity.y=10;
    player2.position.y=movedPlayer.y;
  }else if(deplacementV<0){
    player2.body.velocity.y=-10;
    player2.position.y=movedPlayer.y;
  }

  if(deplacementH>0){
    player2.animations.play('left');
    player2.body.velocity.x=deplacementH;
    player2.position.x=movedPlayer.x;

  }else if(deplacementH<0){
    player2.animations.play('right');
    player2.body.velocity.x=deplacementH;
    player2.position.x=movedPlayer.x;
  }else{
    player2.animations.stop();
    player2.body.velocity.x=0;
    player2.frame=4;
  }
},

function playerTouched(playerToucher,bullet){
  console.log(playerToucher);
  bullet.kill();
}

function ennemyTouched(bullet,ennemyToucher){
  console.log(ennemyToucher);
  bullet.kill();
}

function resetKalashPostion(playerData){
  playerData.activeWeaponSprite.psoition=playerData.sprite.position;
}

};


function pickUpItem(player, item){
}

function collisionItemPlatform(item){
  item.body.velocity.x = 0;
  return false;
}

function getCoordinates (x,y){
  Client.sendClick(x,y);
}

function killWeapon(weapon){
  if(weapon.sprite!==undefined){
    weapon.sprite.kill();
    delete weapons[weapon.id];
  }
}

function resetPlayer(playerReset){
  playerReset.reset(32,500);
}

function lanceTrap(trap){
  trap = game.add.sprite(player.position.x+33,player.position.y,'trap');
  trap.scale.setTo(0.15,0.15);
  trap.frame=4;
  trap.animations.add('close', [4,5,0,1,2],10);
  game.physics.arcade.enable(trap);
  trap.body.gravity.y=2700;
  count--;
  return trap;
}
function stopPlayer(){
  booleenBloque=false;
}
function getCoord(){
  getCoordinates(player.position.x,player.position.y)
}
