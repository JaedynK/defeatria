import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    logoTween;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        const { width, height } = this.scale;

        // Ensure the game container dimensions match the canvas size
        this.cameras.main.setBounds(0, 0, width, height); // Set the bounds to the game container

        // Add the background image
        const background = this.add.image(width / 2, height / 2, 'map');

        // Scale the background to fit the game screen size
        // Subtract the padding defined in CSS (e.g., 40px from game-container)
        const padding = 40; // Match this with your CSS padding
        background.setDisplaySize(width - padding * 2, height - padding * 2);

        // Center the background image
        background.setOrigin(0.5, 0.5);

        // this.logo = this.add.image(512, 300, 'X').setDepth(100); // Logo removed

        this.add.text(512, 460, 'Main Menu', {
            fontFamily: 'Arial Black', 
            fontSize: 38, 
            color: '#ffffff',
            stroke: '#000000', 
            strokeThickness: 8,
            align: 'center'
        }).setDepth(100).setOrigin(0.5);
        
        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        if (this.logoTween)
        {
            this.logoTween.stop();
            this.logoTween = null;
        }

        this.scene.start('Game');
    }
}
