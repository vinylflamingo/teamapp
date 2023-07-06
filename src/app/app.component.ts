import { Component } from '@angular/core';
import { isNullOrEmpty } from 'src/utilities/string';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Build some teams!';
  newMemberName: string = "";
  members: string[] = [];
  errorMessage: string = "";
  numberOfTeams: number = 0;
  teams: string[][] = [];
  
  onInput(member: string) {
    this.newMemberName = member;
  }

  onNumbersOfTeamsInput(numberOfTeams: string) {
    this.numberOfTeams = parseInt(numberOfTeams);
  }

  addMember() {
    if (!isNullOrEmpty(this.newMemberName)) {
      console.log("adding member: " + this.newMemberName);
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      console.log(this.members);
      this.errorMessage = "";
    }
    else {
      this.errorMessage = "Please enter a name";
    }
  }

  generateTeams() {
    if (this.numberOfTeams <= 0) {
      this.errorMessage = "Please enter a number of teams greater than 0";
    } else { 
      this.errorMessage = "";
    }

    const allMembers = [...this.members]

    while(allMembers.length) {
      for(let i = 0; i < this.numberOfTeams; i++){
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const randomMember = allMembers.splice(randomIndex, 1)[0];
  
        if(this.teams[i]){
          this.teams[i].push(randomMember);
        }
        else {
          this.teams[i] = [randomMember];
        }
  
        console.log(this.teams);
      }
    }
  }

}
