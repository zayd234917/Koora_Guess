import { Component, OnInit } from '@angular/core';
import { Player } from '../../modules/player';
@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.css',
})
export class PlayerCard  {
  players !: Player;
  

}
