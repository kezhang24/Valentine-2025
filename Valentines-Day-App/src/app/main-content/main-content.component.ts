import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  imports: [
    NgIf,
    CommonModule
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
  noButtonTop: number = 75;
  noButtonLeft: number = 75;
  yesButtonTop: number = 75;
  yesButtonLeft: number = 50;
  noButtonScale: number = 1;
  noButtonText: string = 'No';
  phrases: string[] = [
    'NO!',
    'That is rude',
    'Super rude',
    'wow whatever',
    'Missed!',
    'Wrong Button!',
    'Not This Time!'
  ];
  count = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.centerButtons();
  }

  centerButtons() {
    const gifHeight = 332; // Adjust based on actual GIF height
    const buttonHeight = 20; // Adjust based on actual button height
    const buttonWidth = 100; // Adjust based on actual button width
    const gap = 20; // Gap between GIF and buttons

    this.noButtonTop = (window.innerHeight / 2);
    this.noButtonLeft = (window.innerWidth / 2);
    this.yesButtonTop = (window.innerHeight / 2);
    this.yesButtonLeft = (window.innerWidth /2) - 50;
  }
  
  onYesClick() {
    this.router.navigate(['/yes']);
  }

  onNoClick() {
    this.noButtonTop = Math.abs(Math.random() * (window.innerHeight - 100) - 100); // Adjust for button height
    this.noButtonLeft = Math.abs(Math.random() * (window.innerWidth - 100) - 100) // Adjust for button width
    this.noButtonScale += 1;
    this.noButtonText = this.phrases[this.count];
    this.count += 1;
    this.count = this.count % 7;
  }

}
