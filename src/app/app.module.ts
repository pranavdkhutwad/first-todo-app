import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';

import { FileSizePipe } from './pipes/file-size.pipe';
import { ListFilterPipe } from './pipes/list-filter.pipe';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    // Components
    AppComponent,

    // Directives

    // Pipes
    FileSizePipe,
    ListFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
