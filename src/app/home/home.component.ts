import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchTerm:any = '';
  results:any=[]
  inputfied =false
  valueFromChild: any;

  getData(data:any){

  }
HomeData:any

  constructor(private homeService:HomeService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

   this.homeService.getData().subscribe((result)=>{

    this.HomeData =result

    this.HomeData.forEach((post: any, i: number) => {
      this.homeService.getCommentsByPostId(post.id).subscribe((likes:any)=>{
        this.HomeData[i].totalComments = likes.length;
      });
      console.log(this.HomeData.countComment)
    });
   })



  }




  onboxClick(id:number){
    this.router.navigate(['detailpage',id])
      }


      search() {
        this.http.get(`http://localhost:3200/search?q=${this.searchTerm}`)
          .subscribe(results => {
            this.results = results;
          });
       this.inputfied=true
      }
}
