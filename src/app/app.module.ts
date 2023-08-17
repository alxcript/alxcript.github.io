import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AsideComponent } from './components/aside/aside.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GithubIconComponent } from './components/icons/github-icon/github-icon.component';
import { EmailIconComponent } from './components/icons/email-icon/email-icon.component';
import { IconComponent } from './components/icons/icon/icon.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PresentationComponent,
    ProjectsComponent,
    ProjectCardComponent,
    PageNotFoundComponent,
    AsideComponent,
    NavigationComponent,
    GithubIconComponent,
    EmailIconComponent,
    IconComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
