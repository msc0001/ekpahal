import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FuturePerspectiveComponent } from './components/future-perspective/future-perspective.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EnquiryComponent } from './components/enquiry/enquiry.component';
import { DonateComponent } from './components/donate/donate.component';
import { AboutComponent } from './components/about/about.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { UpdatesComponent } from './components/updates/updates.component';
import { AllJnvsComponent } from './components/all-jnvs/all-jnvs.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    FuturePerspectiveComponent,
    SignUpComponent,
    ContactUsComponent,
    EnquiryComponent,
    DonateComponent,
    AboutComponent,
    SuggestionsComponent,
    UpdatesComponent,
    AllJnvsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : '',
        component: HomeComponent
      },
      {
        path : 'Future-perspective',
        component: FuturePerspectiveComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'enquiry',
        component: EnquiryComponent
      },
      {
        path: 'donate',
        component: DonateComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'suggestions',
        component: SuggestionsComponent
      },
      {
        path: 'alljnvs',
        component: AllJnvsComponent
      },
      {
        path: 'updates',
        component: UpdatesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Ek Pahal';
  
 }
