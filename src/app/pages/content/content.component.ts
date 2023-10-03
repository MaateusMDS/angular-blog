import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() fotoCover: String = "";
  @Input() titlePage: String = "";
  @Input() titleDescricao: String = "";
  private id: string = "0"

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fotoCover = params['fotoCover'];
      this.titlePage = params['titlePage'];
      this.titleDescricao = params['titleDescricao'];

      this.setValuesToContent(this.id)
    }
    )}

    setValuesToContent(id: string){
      const result = dataFake.filter((item) => {
        return item.id === Number(id)
      })
      this.titlePage = result[0].titlePage
      this.titleDescricao = result[0].titleDescricao
      this.fotoCover = result[0].fotoCover
    }

}
