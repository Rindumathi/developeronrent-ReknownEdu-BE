import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery: any;

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
          $('.dropdown-menu a').on('click', function(){    
        $('.dropdownfa').html($(this).html());    
    })
  }

}
