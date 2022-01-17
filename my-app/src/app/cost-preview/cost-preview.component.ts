import { Component, OnInit } from '@angular/core';
import { CostPreviewService } from 'src/app/cost-preview/cost-preview-service';

@Component({
  selector: 'app-cost-preview',
  templateUrl: './cost-preview.component.html',
  styleUrls: ['./cost-preview.component.scss']
})
export class CostPreviewComponent implements OnInit {

  constructor(private costPreviewService: CostPreviewService) { }

  ngOnInit(): void {
  }

  async PreviewCostClick() {
    var list = (<HTMLInputElement>document.getElementById("employeeList")).value;

//  console.log(list);
    this.costPreviewService.getCostPreviewData(list).subscribe((res: any) => {
//    console.log(res);

      (<HTMLInputElement>document.getElementById("results")).innerHTML = "Your total benefits package will cost you " + parseFloat(res).toFixed( 2 ) + " per paycheck.";
    });
  }
}

