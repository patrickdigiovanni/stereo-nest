import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AudioContextModule } from "angular-audio-context";
import { AppComponent } from './app.component';
import { SceneComponent } from "./scene/scene.component";

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent
  ],
  imports: [
    BrowserModule,
    AudioContextModule.forRoot('balanced')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
