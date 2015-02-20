---
layout: post
status: draft
title: 'Unity Tutorial: Alien Attack (Part Two)'
author:
  display_name: nathan
  login: nathan
  email: ndemick@gmail.com
  url: ''
author_login: nathan
author_email: ndemick@gmail.com
wordpress_id: 499
wordpress_url: http://ganbarugames.com/?p=499
date: '2012-03-19 06:35:09 -0400'
categories:
- Tutorial
tags:
- tutorial
- unity3d
- unity
comments: []
---
<p>Hey kids! Time for part two of my basic Unity tutorial. If you haven't started following along yet, check out part one. At the end of the previous tutorial, we left our project in a somewhat half-completed state; the building blocks were there, but you definitely wouldn't call it a game yet. Today we'll give the player the capability to shoot, and give the aliens the capability to be blown up.</p>
<p>Now we need for our ship to shoot something. We'll just use a 1x1x1 cube with the default material for bullets. Create a new prefab, name it "Bullet," then create a new cube in the Hierarchy and drag it on to the Bullet prefab. Done! You can now delete the cube, as it has already served its' purpose in being the archetype for the prefab. To control the behavior of the bullet object, we'll create a new script, predictably called "bullet." Whenever a bullet is created, we want it to move straight up at a constant speed. However, the bullet object should be destroyed if it goes too far off the screen without hitting anything; otherwise, if a player played for a long time, there would be lots of bullet objects in the game world that would have to be tracked, but would never hit anything or even be displayed on-screen. To this end, we'll give each bullet a lifespan of five seconds, which is more than enough time for it to fly off the screen. Notice how there's no collision detection code in this script. The bullet doesn't care what it hits, it just has to move in a straight line. We'll program the "enemy" script to worry about tracking collisions. </p>
<pre class="brush:js">
// bullet.js
#pragma strict

// We want the bullet to move pretty fast
var moveSpeed:float = 40.0;

// Bullets should automatically "die" if they don't hit anything
// Basically this value will be how long the bullet will exist (in seconds)
var life:float = 5.0;

function Update () {
	// Every frame, the bullet will move towards the top of the screen
	transform.Translate(0, 0, moveSpeed * Time.deltaTime);
	
	// Subtract from the "life" value
	life -= Time.deltaTime;
	
	// If no "life" left, the bullet self-destructs
	if (life <= 0) {
		Destroy(gameObject);
	}
}
</pre>
<p>Save the script, then drag the script from the Project widget onto the Bullet prefab. This means that every bullet prefab you create will automatically have this script component attached to it. OK, so bullets know how to behave when they get created, but how do they get created? Well, the obvious answer is that the player's ship needs to create them in response to the "fire" button being pressed. This calls for another script component. Create a new one and name it "shoot."</p>
<pre class="brush:js">
// shoot.js
#pragma strict

// Will hold the prefab bullet object that the ship shoots
var prefab:Transform;

function Update () {
	// "Jump" is the space key by default. You can set up your own key mappings by going to Edit > Project Settings > Input
	if (Input.GetButtonDown("Jump")) {
		// Create a new instance of the prefab object, using the position/rotation of the ship
		var bullet = Instantiate(prefab, transform.position, transform.rotation);
		
		// Play the sound effect if the GameObject has an audio component
		if (audio) {
			audio.Play();
		}
	}
}
</pre>
<p>This script holds a reference to a prefab object. When the space button is pressed, the script creates an instance of the prefab at the location of the attached GameObject. If there's an audio component on the attached GameObject, play it. As you may have guessed, we'll be attaching this script to the player's ship, and the prefab that will be created is the "bullet" prefab we just made. Save the script and drag it on to the Ship prefab. Now, click the Ship prefab, and you'll be able to see the "shoot" script in the Inspector widget. Drag the Bullet prefab into the "prefab" variable of the "shoot" script to complete the process. Now, try running the game. You should be able to both move the ship <em>and</em> shoot bullets.</p>
<p>Not bad; we've got a decently functioning player object. What we need next is to add some enemies to the level for the player to shoot at. Drag the Alien prefab that you created earlier from the Project widget into the Scene view; this will create an instance of the alien that will exist as soon as the level is loaded. Select the newly-created alien in the Hierarchy and update its position so that it's near the top of the screen. Remember to set the Y position to zero, since objects in our game will only move on the x- and z-axes. Duplicate that alien a few times until you have two or three rows of 'em at the top of the screen. If we shoot at these enemies, though, nothing will happen, 'cos we haven't created a script which makes them react to bullets. Also, they'll just sit there waiting to be killed, which is kind of boring... they should at least move a little, right?</p>
<pre class="brush:js">
// enemy.js
#pragma strict

// How fast the enemy should move
var moveSpeed:float = 10.0;

// How long the enemy should move in a certain direction
// Starts at 1/3 value since enemies will be centered to begin with
var moveDuration:float = 1.5;

function Update () {
	// Movement psuedocode:
	// 1. Move left
	// 2. Jump downwards
	// 3. Move right
	// 4. Repeat
	
	// Move the enemy to the left or right
	transform.Translate(moveSpeed * Time.deltaTime, 0, 0);
	
	// Subtract from the amount of time the enemy is allowed to move in a specific direction
	moveDuration -= Time.deltaTime;
	
	if (moveDuration <= 0) {
		// Reset this value
		moveDuration = 4.5;
		
		// Move downwards
		transform.Translate(0, 0, -5);
		
		// Invert the direction the enemy is moving
		moveSpeed *= -1;
	}
}

function OnDamage() {
	// Remove the collider component so the enemy can't be hit again
	Destroy(collider);
	
	// Get all the "child" cubes that make up the enemy
	var children = GetComponentsInChildren(Transform, true);
	
	// Loop through all the cube children
	for (var child:Component in children) {
		// Add a RigidBody component to each of the cubes that make up this enemy
		if (!child.gameObject.rigidbody) {
			child.gameObject.AddComponent(Rigidbody);
		}
	}
	
	// Play the sound effect if the GameObject has an audio component
	if (audio) {
		audio.Play();
	}

	// Wait 3 seconds to destroy the entire GameObject, so we can see the effect of it "falling apart"
	Destroy(gameObject, 3.0);
}
</pre>
