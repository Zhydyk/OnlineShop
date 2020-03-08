import { Component } from '@angular/core';
export interface Post{
  title: string,
  text: string,
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 post: Post[] = [
   {title: "Learn JS", text: "Two days", id: 1},
   {title: "Learn Angular", text: "Three days", id: 2}
 ]

  updatePost(post: Post){
   this.post.unshift(post);
  }

  removePost(id: number){
    this.post = this.post.filter(p => p.id !== id)
 }

}
