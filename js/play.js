var sprite, platforms, hidePlatforms, traversePlatforms, player, cursors,trap,pickTrap, trapKey,timer;
var portal, portalPlatform, portalLeft, portalRight;
var scoreText, sword, isPickedUp = false;
var booleenBloque = false;
var playerMap = {};
var weapons= {};
var hitTraversePlatform;
var activeWeapon;
var count;

var playState = {
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

  	/*sword = game.add.sprite(200,500,'sword');
    console.log("le joueur"+player);
    sword.scale.setTo(0.5,1);

  	game.physics.arcade.enable(sword);
  	sword.body.gravity.y=2700;*/

    portalLeft = game.add.sprite(0,615,'portal');
    portalLeft.frame=1;
    portalRight = game.add.sprite(5949,615,'portal');
    portalRight.frame=1;

    trapKey = game.input.keyboard.addKey(Phaser.KeyCode.A);
    console.log(""+trapKey);

    pickTrap = game.add.sprite(300,500,'trap');
    pickTrap.scale.setTo(0.1,0.1);
    pickTrap.frame=1;
    game.physics.arcade.enable(pickTrap);
    pickTrap.body.gravity.y=2700;

    timer = game.time.create(false);
    timer.add(4000,stopPlayer,this);

  	cursors = game.input.keyboard.createCursorKeys();
  	getCoordinates(32,game.world.height-150);
  	Client.askNewPlayer();
  },

  update: function(){
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    var hitHidePlatform;
  	for(var pl in playerMap){
  		var player2=playerMap[pl];
  		player2.body.velocity.x=0;

        //hitHidePlatform = game.physics.arcade.collide(player2,hidePlatforms);
    	//hitTraversePlatform = game.physics.arcade.overlap(player2,traversePlatforms);

    	game.physics.arcade.collide(player2,platforms);

    	//game.physics.arcade.collide(player2, weapon, pickUpItem, null, this);

      /*
      if(isPickedUp){
    		weapon.body.x = player2.body.x
    		weapon.body.y = player2.body.y


        if(game.input.activePointer.isDown){
    			isPickedUp = false;
    			sword.body.velocity.x = 500;

    			game.physics.arcade.moveToPointer(sword, 3000)
    			sword.body.moveTo(2000, 300, Phaser.ANGLE_RIGHT)
    		}
    	}*/

      for(var id in weapons){
        var weap=weapons[id];
        if(weap.owner===player2){
            weap.sprite.body.x=player2.body.x;
            weap.sprite.body.y=player2.body.y;
        }else if(weap.owner===undefined){
          function cb1(){
            pickUpItem(player2,weap);
          }
          function cb2(){
            collisionItemPlatform(weap)
          }
          game.physics.arcade.collide(weap.sprite, platforms, cb2, null, this);
          game.physics.arcade.collide(player2, weap.sprite,cb1, null, this);
        }
      }
  }

    var hitPlayerTrap;
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

    }

  if(hitPlatform && (player.position.x <20||player.position.x>5960)&& player.position.y==638){
      game.lockRender=true;
      /*booleenBloque=true;
        portalLeft.frame=0;
        portalRight.frame=0;
        player.animations.stop();*/
        //player.kill();
      }

	if(player !== undefined && !booleenBloque){
    console.log("position y : "+ player.position.y);
		player.body.velocity.x=0;

    if(cursors.left.isDown)
		{
			player.body.velocity.x=-300;
			player.animations.play('left');

		}else if (cursors.right.isDown) {
			player.body.velocity.x=300;
			player.animations.play('right');
		}else {
			player.animations.stop();
			player.frame=4;
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

    getCoordinates(player.position.x,player.position.y);

  }

  },

  render : function (){
    game.debug.cameraInfo(game.camera, 32, 32, "#000000");

    game.debug.pointer( game.input.activePointer,false,null,null,"#0000000" );
  },

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

  addWeapon:function(x,y,arme){
    var weapon;

    var armetmp=game.add.sprite(x,y,arme.spriteName);
    arme.sprite=armetmp;

    weapon=arme;

    weapon.sprite.scale.setTo(0.5,1);

  	game.physics.arcade.enable(weapon.sprite);
  	weapon.sprite.body.gravity.y=2700;
    weapon.sprite.checkWorldBounds = true;
    weapon.sprite.events.onOutOfBounds.add(killWeapon,weapon);
    weapons[arme.id]=weapon;
    console.log(weapons);
  },


  movePlayer : function(movedPlayer){


	var player2=playerMap[movedPlayer.id];

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

  removePlayer : function(id){
      playerMap[id].destroy();
      delete playerMap[id];
  },

  supprArme : function(id){

    for(var idweap in weapons){
      if(weapons[idweap].id === id){
        weapons[idweap].sprite.kill();
        delete weapons[idweap];
        if(activeWeapon.id===id)
          activeWeapon=undefined;
        break;
      }
    }
  }
};


function pickUpItem(player2, item){
	if(item.owner===undefined){
    item.owner=player2;
    if(player2===player)
      if(activeWeapon!==undefined){
        Client.supprimerArme(activeWeapon);
      }
      activeWeapon=item;
  }
}

function collisionItemPlatform(item){
  if(item!== undefined && item.sprite!==undefined)
	   item.sprite.body.velocity.x = 0;
}

function getCoordinates (x,y){
    Client.sendClick(x,y);
}
function killPlayer(){
	player.kill();
}

function stopPlayer(){
   booleenBloque=false;
   console.log("timer fini");
 }

function killWeapon(weapon){
  if(weapon.sprite!==undefined)
    weapon.sprite.kill();
}
function resetPlayer(){
	player.reset(32,500);
  if(activeWeapon!==undefined)
    Client.supprimerArme(activeWeapon);
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
