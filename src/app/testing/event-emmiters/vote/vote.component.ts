import { Component, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent {

  totalVotes = 0;
  voteChanged = new EventEmitter();

  constructor() { }

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }



}
