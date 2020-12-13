import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoomLiftsComponent } from './boom-lifts/boom-lifts.component';
import { ScissorLiftsComponent } from './scissor-lifts/scissor-lifts.component';
import { ForkliftsMaterialHandlingComponent } from './forklifts-material-handling/forklifts-material-handling.component';
import { SingleManLiftsComponent } from './single-man-lifts/single-man-lifts.component';
import { EarthmovingEquipmentComponent } from './earthmoving-equipment/earthmoving-equipment.component';
import { CompactionEquipmentComponent } from './compaction-equipment/compaction-equipment.component';
import { ConstructionSiteServicesComponent } from './construction-site-services/construction-site-services.component';
import { CranesComponent } from './cranes/cranes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoomLiftsComponent,
    ScissorLiftsComponent,
    ForkliftsMaterialHandlingComponent,
    SingleManLiftsComponent,
    EarthmovingEquipmentComponent,
    CompactionEquipmentComponent,
    ConstructionSiteServicesComponent,
    CranesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
