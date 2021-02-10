
export class VoteComponent {
    totalVotes = 0;

    upVote() {
        return this.totalVotes++;
    }

    downVote() {
        return this.totalVotes--;
    }
}