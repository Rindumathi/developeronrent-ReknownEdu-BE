import { Component, OnInit } from '@angular/core';
import { PageScrollInstance, PageScrollService, EasingLogic } from 'ngx-page-scroll';
import {PageScrollConfig} from 'ngx-page-scroll';
declare var $:any;
declare var jQuery: any;
@Component({
  selector: 'app-countrypage',
  templateUrl: './countrypage.component.html',
  styleUrls: ['./countrypage.component.css']
})
export class CountrypageComponent implements OnInit {
  
  constructor() { 
    
  }


  ngOnInit() {

    $('.dropdown-menu span').on('click', function(){    
        $('.dropdownfa1').html($(this).html());    
    });
    $('.dropdown-menu p').on('click', function(){    
        $('.dropdownfa2').html($(this).html());    
    });
    $('.dropdown-menu div').on('click', function(){    
        $('.dropdownfa3').html($(this).html());    
      });
      //filter 4
      $('.dropdown-menu option').on('click', function(){    
        $('.dropdownfa4').html($(this).html());    
      });

      
  }
  myEasing: EasingLogic = {
    ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
};

doSmth(reachedTarget: boolean): void {
    if (reachedTarget) {
        console.log('Yeah, we reached our destination');
    } else {
        console.log('Ohoh, something interrupted us');
    }
}

myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show Less"; 
      moreText.style.display = "inline";
    }
  }
  myVisaguide() {
    var dot = document.getElementById("dot");
    var moreText1 = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnText.innerHTML = "Show More"; 
      moreText1.style.display = "none";
    } else {
      dot.style.display = "none";
      btnText.innerHTML = "Show Less"; 
      moreText1.style.display = "inline";
    }
  }

}
