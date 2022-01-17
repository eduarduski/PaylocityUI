import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable( {
	providedIn: 'root'
} )
export class CostPreviewService {
    private baseUrl = "https://localhost:44313/EmployeeOnboarding/AnnualCostPreview";
    constructor ( private http: HttpClient ) { }

	getCostPreviewData (employeeList: string) {
        let requestHeaders: HttpHeaders = new HttpHeaders();

//		console.log( `${ this.baseUrl }/api/members/${ usermemberId }?include=currentbenefits,chronic-care-benefits,currentbenefits.benefit-plans` );
		return this.http.get( `${ this.baseUrl }?employeeList=${ employeeList }`, { headers: requestHeaders } );
	}    
}
