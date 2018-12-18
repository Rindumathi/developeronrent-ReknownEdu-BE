import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
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
    //sort by
          $('.dropdown-menu a').on('click', function(){    
        $('.dropdownfa').html($(this).html());    
    });
    // filter Js
    $('.dropdown-menu span').on('click', function(){    
      $('.dropdownfa1').html($(this).html());    
  });
//   //filter 2
  $('.dropdown-menu p').on('click', function(){    
    $('.dropdownfa2').html($(this).html());    
});
//filter 3
$('.dropdown-menu div').on('click', function(){    
  $('.dropdownfa3').html($(this).html());    
});
  }

}
