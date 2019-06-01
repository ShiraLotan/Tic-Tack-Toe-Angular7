export class Board
{
    board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
    turn = true;
    user: string = 'X';
    winner: string;
}