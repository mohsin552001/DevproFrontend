import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss'],
})
export class DetailpageComponent implements OnInit {
  singledata: any;
  countComment: any;
  comments: any;
  comment: any;
  nameforcomment:any
  getLikes:any
  constructor(
    private homeService: HomeService,
    private activatRouter: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    let id = this.activatRouter.snapshot.paramMap.get('id');
    this.homeService.getsingledata(id).subscribe((result) => {
      this.singledata = result;
    });

    this.homeService.getComments(id).subscribe((result) => {
      this.comments = result;


    });

    this.homeService.getCommentCount(id).subscribe((result: any) => {
      this.countComment = result[0]['COUNT(*)'];

    });







  }

  likePost(id: number) {
    this.http.put(`http://localhost:3200/data/${id}/like`, {}).subscribe(() => {
      this.ngOnInit();
    });
  }


  onSubmit() {
    const id = this.activatRouter.snapshot.paramMap.get('id');
    this.http
      .post(
        'http://localhost:3200/comments',
        { foreignId: id, comments: this.comment,nameforcomment:this.nameforcomment },
        { responseType: 'text' }
      )

      .subscribe();
    this.comment = '';
    this.nameforcomment=''

  }

  incrementValue() {
    this.homeService.incrementValue().subscribe((response) => {
      console.log(response);
    });
  }
}
