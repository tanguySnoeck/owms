var sprite, playerData, platforms, hidePlatforms, traversePlatforms, player, cursors, kalash, bullet,trap,pickTrap, trapKey,timer, timerCoord, timerFin;
var scoreText, sword, isPickedUp = false;
var portal, portalPlatform, portalLeft, portalRight;
var playerMap = {};
var booleenBloque = false;
var booleenFin = false;
var weapons= {};
var hitTraversePlatform;
var activeWeapon;
var kalashPlayer;
var fire;
var kalashSprite;
var y;
var myBullets;
var ennemyBullets;
var portail;
var x;
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



		ground = platforms.create(5600,716,'ground');
		ground.scale.setTo(0.025,2);
		ground.body.immovable=true;


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
    portal = platforms.create(6,686,'portalDown');
    portal.body.immovable=true;
    portal = platforms.create(5955,686,'portalDown');
    portal.body.immovable=true;

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

  	cursors = game.input.keyboard.createCursorKeys();
  	getCoordinates(32,game.world.height-150);
  	Client.askNewPlayer();


    y=0;
  },

  update: function(){
     //pas sur
     /*game.physics.arcade.collide(kalash, platforms);
     game.physics.arcade.collide(player, spritek, pickUpItem, null, this);*/


    //console.log(y++);
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    var hitHidePlatform;
  	for(var pl in playerMap){
      var player2Data=playerMap[pl];
  		var player2=playerMap[pl].sprite;
  		player2.body.velocity.x=0;

      if(player2.id!==player.id){
        game.physics.arcade.overlap(myBullets,player2,playerTouched);
      }

        //hitHidePlatform = game.physics.arcade.collide(player2,hidePlatforms);
    	//hitTraversePlatform = game.physics.arcade.overlap(player2,traversePlatforms);
      if(ennemyBullets!==undefined){
          if(ennemyBullets.owner!==player2.id){
            game.physics.arcade.overlap(ennemyBullets,player2,ennemyTouched);
          }

    }

    	game.physics.arcade.collide(player2,platforms);

      //kalash
      game.physics.arcade.collide(player2Data.activeWeapon, platforms);
      //game.physics.arcade.collide(player, spritek, pickUpItem, null, this);
      //game.physics.arcade.collide(player2Data.activeWeapon, platforms, collisionItemPlatform(spritek), null, this);

      if(player2Data !== playerData){
        resetKalashPostion(player2Data);
      }
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


      /*for(var id in weapons){
        var weap=weapons[id];

        if(weap.owner===undefined){
          function cb1(){
            pickUpItem(playerMap[pl],weap);
          }
          function cb2(){
            collisionItemPlatform(weap)
          }
          game.physics.arcade.collide(weap.sprite, platforms, cb2, null, this);
          game.physics.arcade.overlap(player2, weap.sprite,cb1, null, this);
        }
      }*/


  }
  if(hitPlatform &&player.position.y==638){
    if(portail && player.position.x <20){
      Client.finish(player.id);
    }else if (!portail && player.position.x>5960){
      Client.finish(player.id);
    }
  }


	if(player !== undefined && !booleenBloque){
		player.body.velocity.x=0;

    if(cursors.left.isDown)
		{
			player.body.velocity.x=-300;
    	player.animations.play('left');
      kalashPlayer.fireAngle = 180;
      kalashSprite.frame = 0;
      kalashSprite.alignIn(player, Phaser.RIGHT_CENTER,0,8);
		}else if (cursors.right.isDown) {
			player.body.velocity.x=300;
			player.animations.play('right');
       kalashPlayer.fireAngle = 0;
       kalashSprite.frame = 1;
       kalashSprite.alignIn(player, Phaser.LEFT_CENTER,0,8);
		}else {
			player.animations.stop();
			player.frame=4;
      kalashSprite.alignIn(player, Phaser.CENTER,0,8);
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

    getCoordinates(player.position.x,player.position.y,fire);


    /*if(playerData.activeWeapon!==undefined){
      playerData.activeWeapon.sprite.position.x=player.position.x;
      playerData.activeWeapon.sprite.position.y=player.position.y;
      playerData.activeWeapon.sprite.body.gravity=0;
    }*/

  }

},

  render : function (){
    //game.debug.cameraInfo(game.camera, 32, 32, "#000000");

    //game.debug.pointer( game.input.activePointer,false,null,null,"#0000000" );
  },

  addNewPlayer : function(data){
    var id=data.id;
    var xAdd;
    if(data.portail>0){
      xAdd=5920;
    }else{
      xAdd=50;
    }
    var sprite= game.add.sprite(xAdd,500,'dude');
    game.physics.arcade.enable(sprite);
    sprite.body.bounce.y=0;
    sprite.body.gravity.y=2700;
    sprite.body.collideWorldBounds=true;
    sprite.animations.add('left',[0,1,2,3],10,true);
    sprite.animations.add('right',[5,6,7,8],10,true);
    sprite.scale.setTo(0.5,1);

    sprite.body.collideWorldBounds=true;
    sprite.checkWorldBounds = true;
    sprite.events.onOutOfBounds.add(resetOnExecute,data);
    sprite.id=data.id;
    data.sprite=sprite;


    kalash = game.add.weapon(100, 'bullet');
    kalash.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    kalash.bulletSpeed = 1000;
    kalash.bulletKillDistance=500;
    kalash.fireRate = 150;
    var spritek = game.add.sprite(100, 500, 'kalash');
    spritek.frame = 1;


    game.physics.arcade.enable(spritek);
    spritek.inputEnabled = true;
    spritek.scale.setTo(0.25, 0.25);
    spritek.anchor.setTo(0.5,0.3);
    kalash.trackSprite(spritek, 14, 0);

    data.activeWeapon=kalash;
    data.activeWeaponSprite=spritek;
    data.hp=10;

    playerMap[id]=data;
    if(player===undefined){
      console.log("Dans condition player undefined de addNewPlayer");
      playerData=playerMap[id];
      player=playerMap[id].sprite;
      x = player.position.x;
      console.log("x de if undefined : "+x);
      if(x >3000){
        portail=true;
      }else{
        portail=false;
      }
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
    weapon.sprite.events.onOutOfBounds.add(function() {killWeapon(weapon);},this);
    weapons[arme.id]=weapon;
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
    player2KalashSprite.alignIn(player2, Phaser.RIGHT_CENTER,0,8);
	}else if(deplacementH<0){
		player2.animations.play('right');
		player2.body.velocity.x=deplacementH;
		player2.position.x=movedPlayer.x;
    player2Kalash.fireAngle = 0;
    player2KalashSprite.frame = 1;
    player2KalashSprite.alignIn(player2, Phaser.LEFT_CENTER,0,8);
	}else{
		player2.animations.stop();
		player2.body.velocity.x=0;
		player2.frame=4;
    player2KalashSprite.alignIn(player2, Phaser.CENTER,0,8);
	}

    if(isFired){
      player2Kalash.fire();
    }

  },

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
      player.animations.stop();
      booleenBloque = true;
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

  supprArme : function(idWeapon){
    var weap = weapons[idWeapon];

      weap.sprite.kill();
        for(var idplayer in playerMap){
          var tmp=playerMap[idplayer];
          if(tmp.activeWeapon!==undefined && tmp.activeWeapon.id===idWeapon){
            console.log("test");
            tmp.activeWeapon=undefined;
            break;
          }
        }
        delete weapons[idWeapon];
      }


};

function playerTouched(playerToucher,bullet){
  console.log("playerToucher");
  playerMap[playerToucher.id].hp--;
  if(playerMap[playerToucher.id].hp===0){
    killPlayer(playerToucher.id);
  }
  bullet.kill();
}

function ennemyTouched(ennemyToucher,bullet){
  console.log("ennemyToucher");
  playerMap[ennemyToucher.id].hp--;
  if(playerMap[ennemyToucher.id].hp===0){
    killPlayer(ennemyToucher.id);
  }
  bullet.kill();
}

function resetKalashPostion(playerData){
  playerData.activeWeaponSprite.psoition=playerData.sprite.position;
}

function killPlayer(idPlayer){
    resetPlayer(playerMap[idPlayer]);
}


/*function pickUpItem(player2, item){
	if(item.owner===undefined){

    if(player2.activeWeapon!==undefined){
        Client.supprimerArme(player2.activeWeapon);
    }
    //console.log(player2);
    //console.log(playerData);
    if(player2.id===playerData.id){
      item.owner=player2;
      player2.activeWeapon=item;
      playerData.activeWeapon=item;
    }

    Client.ajouterActiveWeapon(player2.id,item.id);
  }
}*/

function collisionItemPlatform(item){
    if(item!== undefined && item.sprite!==undefined)
	   item.sprite.body.velocity.x = 0;
}

function getCoordinates (x,y,fire){
    Client.sendClick(x,y,fire);
}

function killWeapon(weapon){
  if(weapon.sprite!==undefined){
    weapon.sprite.kill();
    delete weapons[weapon.id];
  }
}

function resetPlayer(playerReset){
  console.log(playerReset);
  playerReset.hp=10;
  playerReset.sprite.reset(32,500);
}

function resetOnExecute(playerReset){
  playerReset.reset(x,500);
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
  getCoordinates(player.position.x,player.position.y);
}
