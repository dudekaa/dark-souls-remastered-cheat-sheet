import { Routes } from '@angular/router';
import {PlaythroughPageComponent} from "./playthrough-page/playthrough-page.component";
import {AchievementsPageComponent} from "./achievements-page/achievements-page.component";

export const routes: Routes = [
  {path: 'playthrough', component: PlaythroughPageComponent},
  {path: 'achievements', component: AchievementsPageComponent},
  { path: '',   redirectTo: '/playthrough', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];
