
import { Routes} from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MaindashboardComponent } from './pages/maindashboard/maindashboard.component';
import { StartNewProjectComponent } from './pages/start-new-project/start-new-project.component';
import { FindcontractorComponent } from './pages/findcontractor/findcontractor.component';
import { CostestimationComponent } from './pages/costestimation/costestimation.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContractorformComponent } from './pages/contractordashboard/contractorform/contractorform.component';
import { Feature1Component } from './pages/feature1/feature1.component';
import { Feature2Component } from './pages/feature2/feature2.component';
import { Feature3Component } from './pages/feature3/feature3.component';
import { Feature4Component } from './pages/feature4/feature4.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HelpcentreComponent } from './pages/helpcentre/helpcentre.component';
import { ActiveprojectsComponent } from './pages/contractordashboard/activeprojects/activeprojects.component';
import { ContractorSettingsComponent } from './pages/contractordashboard/contractor-settings/contractor-settings.component';
import { ContractorHelpcentreComponent } from './pages/contractordashboard/contractor-helpcentre/contractor-helpcentre.component';
import { ProjectDashboardComponent } from './pages/project-dashboard/project-dashboard.component';
import { ContractorHomeComponent } from './pages/contractordashboard/contractor-home/contractor-home.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { ClientformComponent } from './pages/clientform/clientform.component';
import { ClientprofileComponent } from './pages/clientprofile/clientprofile.component';
import { ContractorprofileComponent } from './pages/contractordashboard/contractorprofile/contractorprofile.component';
import { VistContractorProfileComponent } from './pages/vist-contractor-profile/vist-contractor-profile.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ReviewProjectInfoComponent } from './pages/review-project-info/review-project-info.component';
import { CostdetailsComponent } from './pages/costdetails/costdetails.component';
import { RequestviewComponent } from './pages/contractordashboard/requestview/requestview.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },         // Default route
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'maindashboard', component: MaindashboardComponent},
    { path: 'startnewproject', component: StartNewProjectComponent},
    { path: 'findcontractor', component: FindcontractorComponent},
    { path: 'costestimation', component: CostestimationComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'contractorform', component: ContractorformComponent},
    { path: 'feature1', component: Feature1Component },
    { path: 'feature2', component: Feature2Component },
    { path: 'feature3', component: Feature3Component },
    { path: 'feature4', component: Feature4Component },
    { path: 'settings', component: SettingsComponent},
    { path: 'helpcentre', component: HelpcentreComponent},
    { path: 'activeprojects', component:ActiveprojectsComponent},
    { path: 'contractorsettings', component:ContractorSettingsComponent},
    { path: 'contractorhelpcentre', component:ContractorHelpcentreComponent},
    { path: 'projectdashboard' , component:ProjectDashboardComponent},
    { path: 'contractorhome' , component:ContractorHomeComponent},
    { path: 'privacypolicy' , component:PrivacypolicyComponent},
    { path: 'termsandconditions' , component:TermsandconditionsComponent},
    { path: 'clientform' , component:ClientformComponent},
    { path: 'clientprofile' , component:ClientprofileComponent},
    { path: 'contractorprofile' , component:ContractorprofileComponent},
    { path: 'visitcontractorprofile' , component:VistContractorProfileComponent},
    { path: 'notification' , component:NotificationComponent},
    { path: 'reviewprojectinfo' , component:ReviewProjectInfoComponent},
    { path: 'costdetails',component:CostdetailsComponent},
    {path:'requestview',component:RequestviewComponent},
    { path: '**', redirectTo: '' }
];
