import { Component } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  text: string | undefined;

  constructor() { }

  saveComment():void {
    if(this.text)
    {
      console.log('Saving comment:', this.text);
    }

    else{
      console.log('error');
    }

    

}

}


