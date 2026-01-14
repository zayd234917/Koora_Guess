import { Component, OnInit } from '@angular/core';
import { Player } from '../../modules/player';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-team-card',
  imports: [CommonModule,FormsModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard implements OnInit{
  
    public name : string = "";
    clicked : boolean = false;
     public  level : number = 0;
    Players : Player[] = []
    Team1 : Player[] = [];
    Team2 : Player[] = [];
    
   ngOnInit(): void {
     let bestDiff = Infinity;
     for(const teamA of this.conbination(this.Players,5)){
       const teamb = this.Players.filter(p => !teamA.includes(p));
       
       const scoreA = this.teamscore(teamA);
       const scoreB = this.teamscore(teamb);
       const diff = Math.abs(scoreA-scoreB);

       if(diff < bestDiff){
        bestDiff = diff;
        this.Team1 = teamA;
        this.Team2 = teamb;
       }

     }
     console.log(this.Players);
   }

   conbination<Player> (arr : Player[], k : number) : Player[][] {
    if( k == 0) return [[]];
    if(arr.length < k){
      return[];
    }
    const [first,...rest] = arr;
    const withFIrst = this.conbination(rest,k-1).map(c =>([first,...c]));
    const withoutFirst = this.conbination(rest,k);
    return [...withFIrst,...withoutFirst];
  }
  teamscore(team : Player[]) :number{
    return team.reduce((sum, p)=> sum + p.level,0)
  }
  addToPlayers(name : string , level : number){
       this.Players.push(new Player(name,level));
       this.name = "";
       this.level = 0;
  }
  createTeams(){
    this.clicked = true;
  }
}    

