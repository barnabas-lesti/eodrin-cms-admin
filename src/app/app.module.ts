import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IconComponent } from './common/icon/icon.component';

// TODO: Modularize
import { DirectoryTreeComponent } from './directory-tree/directory-tree.component';

@NgModule({
	declarations: [
		AppComponent,
		IconComponent,

		DirectoryTreeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
