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

  onInput(member: string) {
    this.newMemberName = member;
  }

}
