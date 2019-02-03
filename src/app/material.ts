import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule]
})

export class MaterialModule { }
