import { VoteComponent } from './vote.component';

 describe('VoteComponent', () => {
    it('Should increment totalVotes When upVoted', () => {
        let component = new VoteComponent();
        component.upVote();
        expect(component.totalVotes).toBe(1);
    })

    it('Should decerment totalVotes When downVoted', () => {
        let component = new VoteComponent();
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    })
}) 



 