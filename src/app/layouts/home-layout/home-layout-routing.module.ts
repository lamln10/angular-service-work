import {RouterModule, Routes} from "@angular/router";
import {HomeLayoutComponent} from "./home-layout.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule {}
