import { Component } from '@angular/core';
import { Navbar2Component } from "../../shared/navbar2/navbar2.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ActivatedRoute, Router,RouterOutlet } from '@angular/router';
import { ProfileService } from '../../services/profile/profile.service';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-vist-contractor-profile',
  standalone: true,
  imports: [Navbar2Component, FooterComponent,RouterOutlet,CurrencyPipe,NgIf],
  templateUrl: './vist-contractor-profile.component.html',
  styleUrl: './vist-contractor-profile.component.css'
})
export class VistContractorProfileComponent {
contractor: any;
contractorId:any;
constructor(private router:Router,private profileService: ProfileService, private route: ActivatedRoute){
}

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.contractorId = params['contractorId'];
  });
  
  const companyId =  this.route.snapshot.paramMap.get('companyId');
  
  if (companyId) {
    this.fetchContractorDetails(companyId);
  }
}

fetchContractorDetails(contractorId: string): void {
  this.profileService.getContractorDetails(contractorId).subscribe({
    next: (contractor) => {
      this.contractor = contractor;
    },
    error: (error) => {
      console.error('Error fetching contractor details:', error);
    }
  });
}

navigateToStartnewproject(companyId:string) {
  this.router.navigate(['/startnewproject',companyId]);
}
}
