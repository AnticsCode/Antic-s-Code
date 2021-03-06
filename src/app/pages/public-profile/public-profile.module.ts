import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicProfileComponent } from './public-profile.component';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@app/shared/components/layout/layout.module';
import { PublicProfileRouting } from './public-profile.routing';
import { ArticlesSidebarModule } from '@app/pages/articles/components/articles-sidebar/articles-sidebar.module';

@NgModule({
  declarations: [
    PublicProfileComponent
  ],
  imports: [
    CommonModule,
    PublicProfileRouting,
    SharedModule,
    LayoutModule,
    ArticlesSidebarModule
  ]
})

export class PublicProfileModule { }
