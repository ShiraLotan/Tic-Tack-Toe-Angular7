import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
name1: string='';
name2: string='';

  constructor(private service: MainService, private router: Router) { }

  ngOnInit() {
  }

  play()
  {
    if(this.name1=="" || this.name2=="")
    {
      alert('Please add Players name');
    }else{
      alert('game starts');
      this.service.addPlayers({name1: this.name1, name2: this.name2}).subscribe(data=>
        {
          debugger;
          this.router.navigate(['/board']);
        })
    }
  }
}
