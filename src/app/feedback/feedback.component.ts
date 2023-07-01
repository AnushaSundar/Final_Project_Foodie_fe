import { Feedback } from './../models/feedback';
import { RestaurantService } from './../services/restaurant.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor(private service:RestaurantService){}
  feedBacks:Feedback[]=[];
  ngOnInit(): void {
    this.service.getFeedbacks(this.restaurantId).subscribe(res=>{console.log("sucess"+res);
    this.feedBacks=res;
    },err=>{"error"})
  }
  @Input() restaurantId:any
  @Input() feed:boolean = false
  @Output() feed1:EventEmitter<boolean> = new EventEmitter<boolean>()
  ngOnChanges(changes: SimpleChanges){
      if(this.feed)
      {
        this.ngOnInit()
        this.feed1.emit(false)
      }
  }
}
