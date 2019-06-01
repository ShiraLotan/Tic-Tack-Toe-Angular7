import { Component, OnInit, ElementRef } from '@angular/core';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  board: string[][] = [[], [], []];
    col0=['','','']
    col1=['','','']
    col2=['','','']
   

  turn = true;
  user: string = 'X';
  winner: string;
  
  constructor(private service: MainService) { }

  ngOnInit() {
    this.service.allMoves().subscribe(data=>
      {
        data.map(function(item)
        {
         let i= document.getElementsByClassName(`${item.colum},${item.row}`)
         i[0].innerHTML=item.playerid
        }
        )
      })
  }

  move(col,row)
  {
    let currentDiv = event.currentTarget as HTMLInputElement;
    console.log(currentDiv.textContent)

    if (currentDiv.textContent=='' && this.turn) {
        this.service.sendPlayerMove({player:this.user, col: col, row:row}).subscribe(data=>
          {
          currentDiv.innerHTML = 'X';
           this.board[col][row]==='X';  

            if(col==0)
            {
              this.col0[row]='X'
            }else if(col==1)
            {
              this.col1[row]='X'
            }else{
              this.col2[row]='X'
            }

           this.turn=false;
           this.user='O';
           this.checkTheWinner()
          })
    }else if(currentDiv.textContent=='' && this.turn==false)
    {
      this.service.sendPlayerMove({player:this.user, col: col, row:row}).subscribe(data=>
        {
          currentDiv.innerHTML = 'O';
          this.board[col][row]==='O';
          if(col==0)
          {
            this.col0[row]='O';
          }else if(col==1)
          {
            this.col1[row]='O';
          }else{
            this.col2[row]='O';
          }


          this.turn = true;
          this.user = 'X';
          this.checkTheWinner();
        }
        );
    };

  }
 reset() {
    this.service.resetBoard().subscribe(data=>
      {
      this.turn = true;
      this.board = [['', '', ''], ['', '', ''], ['', '', '']];
      this.col0=['','',''];
      this.col1=['','',''];
      this.col2=['','',''];
      this.winner = '';
      this.user='X';
          let empty = document.getElementsByTagName('div')
          for(let i=1; i<empty.length ; i++ )
          {
            empty[i].innerHTML='';
          }
    }); 
  }

  checkTheWinner()
  {
    const Alloptions = [];
   Alloptions[0]= `${this.col0[0]}${this.col0[1]}${this.col0[2]}`;
   Alloptions[1]= `${this.col1[0]}${this.col1[1]}${this.col1[2]}`;
   Alloptions[2]= `${this.col2[0]}${this.col2[1]}${this.col2[2]}`;
   Alloptions[3]= `${this.col0[0]}${this.col1[0]}${this.col2[0]}`;
   Alloptions[4]= `${this.col0[1]}${this.col1[1]}${this.col2[1]}`;
   Alloptions[5]= `${this.col0[2]}${this.col1[2]}${this.col2[2]}`;
   Alloptions[6]= `${this.col0[0]}${this.col1[1]}${this.col2[2]}`;
   Alloptions[7]= `${this.col0[2]}${this.col1[1]}${this.col2[0]}`;

      for(let i=0; i<Alloptions.length; i++)
      {
        if(Alloptions[i] =='XXX' || Alloptions[i] == 'OOO')
        {
          this.service.resetBoard().subscribe(data=>
            {
              alert('We have a winner!!')
              this.reset()
            })
        }
      }






  }
}
