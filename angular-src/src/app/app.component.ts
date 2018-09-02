import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {

    $('header ul li a').click(function(e){				
      e.preventDefault();		//evitar el eventos del enlace normal
      var strAncla=$(this).attr('href'); //id del ancla
        $('body,html').stop(true,true).animate({				
          scrollTop: $(strAncla).offset().top
        },1000);
    });

  }

}
