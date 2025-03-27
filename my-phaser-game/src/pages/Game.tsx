import React, { useEffect } from 'react'
import Phaser from 'phaser'
import { Link } from 'react-router-dom'

function Game() {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
        },
      },
      scene: {
        preload: preload,
        create: create,
      },
    }

    function preload(this: Phaser.Scene) {
      this.load.setBaseURL('https://labs.phaser.io')
      this.load.image('sky', 'assets/skies/space3.png')
      this.load.image('star', 'assets/games/asteroids/star.png')
    }

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, 'sky')
      
      // Create some bouncing stars
      for (let i = 0; i < 12; i++) {
        const star = this.add.image(
          Math.random() * 800,
          Math.random() * 600,
          'star'
        )
        
        // Enable physics on the star
        this.physics.add.existing(star)
        
        // Add random velocity
        const body = (star.body as Phaser.Physics.Arcade.Body)
        body.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200))
        body.setBounce(1, 1)
        body.setCollideWorldBounds(true)
      }
    }

    const game = new Phaser.Game(config)

    return () => {
      game.destroy(true)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <div id="game-container"></div>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          marginTop: '1rem'
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Game 