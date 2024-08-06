import { Component } from '@angular/core';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  text: string | undefined;
  isEditing: boolean = true;

  constructor() { }

  saveComment():void {
    if(this.text)
    {
      console.log('Saving comment:', this.text);
      this.isEditing=false;
    }

    else{
      console.log('error');
    }

  }

  editComment():void{
    if(this.text)
    {
      console.log('Editing comment:', this.text);
      this.isEditing=true;

    }

    else{
      console.log('error');
    }
  }
 

    



}


