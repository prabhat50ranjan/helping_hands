import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatToolbarModule,
         MatGridListModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatListModule,
         MatDividerModule
         } from '@angular/material';

const material=[
 MatButtonModule,
 MatToolbarModule,
 MatGridListModule,
 MatCardModule,
 MatFormFieldModule,
 MatInputModule,
 MatListModule,
 MatDividerModule
];

@NgModule({
    imports: [material],
    exports: [material]
})
export class MaterialModule { }
