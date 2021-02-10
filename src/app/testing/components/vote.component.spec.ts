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

//code-refactoring

/* describe('VoteComponent', () => {
    let component: VoteComponent;
    beforeEach(() => {
        component = new VoteComponent();
        it('==>Should increment totalVotes When upVoted', () => {
            let component = new VoteComponent();
            component.upVote();
            expect(component.totalVotes).toBe(1);
        })
    })

    afterEach(() => {
        it('==>Should decerment totalVotes When downVoted', () => {
            let component = new VoteComponent();
            component.downVote();
            expect(component.totalVotes).toBe(-1);
        })
    })
})

 */