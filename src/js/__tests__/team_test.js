import { Team } from "../team";
import { Daemon } from '../Daemon';

describe('Tests for the Team class', () => {
    const player1 = new Daemon('Tim');
    const player2= new Daemon('Ann');
    const player3 = new Daemon('Wow');
    const player4 = new Daemon('Hi');
    const team = new Team('My team');

    test('Add one character', () => {
        team.add(player1);
        expect(team.toArray()).toContain(player1);
    })

    test('re-add character', () => {
        expect(() => team.add(player1)).toThrow('This character is on the team');
    })

    test('add some characters', () => {
        team.addAll(player1, player2, player3);
        const arrayTeam = team.toArray();
        expect(arrayTeam).toContain(player2);
        expect(arrayTeam).toContain(player3);
        expect(arrayTeam.length).toBe(3);
    })

    test('convert to array', () => {
        team.add(player4);
        const arrayTeam = team.toArray();
        expect(Array.isArray(arrayTeam)).toBe(true);
        expect(arrayTeam.length).toBe(4);
    })

})


