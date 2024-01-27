import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GameData } from '../dto/GameData';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  gameNameInput = '';
  gameDataList: GameData[] = [];
  isToastOpen = false;

  constructor(private alertController: AlertController) {}

  onSubmit() {
    console.log('Form submitted with text:', this.gameNameInput);
    const newItem: GameData = {
      title: this.gameNameInput,
      imageUrl: this.generateRandomImageUrl(), // Call your image URL generation function
      summary: this.generateRandomSummary(), // Call your summary generation function
    };
    this.gameDataList.push(newItem);
  }
  generateRandomSummary(): string {
    return 'some gibbrish';
  }
  generateRandomImageUrl(): string {
    return 'http:\\\\random.pic';
  }

  saveGameData(item: any) {
    console.log('Saved item:', item);
    this.isToastOpen = true;
  }
}
