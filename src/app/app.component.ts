import { Component ,ViewChild,ElementRef,AfterViewInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

    currenttSlideNumber:number;
    btn:boolean[]=[false,false,false];

    onShow(el){
      
      let id = el.attributes.id.nodeValue;
      console.log(id);
      this.btn[id]=true;
      this.btn.forEach((element,index)=>{
        if(id!=index)this.btn[index]=false;
      });

    }

}
