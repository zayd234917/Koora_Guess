import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamCard } from "./team-card/team-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TeamCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TeamGuess');
}
