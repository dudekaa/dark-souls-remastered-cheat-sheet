import { Routes } from '@angular/router';
import { PlaythroughPageComponent } from "./playthrough-page/playthrough-page.component";
import { AchievementsPageComponent } from "./achievements-page/achievements-page.component";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

export const routes: Routes = [
  { path: 'playthrough', title: 'Playthrough', component: PlaythroughPageComponent },
  { path: 'achievements', title: 'Achievements', component: AchievementsPageComponent },
  { path: '',   redirectTo: '/playthrough', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotFoundPageComponent },  // Wildcard route for a 404 page
];
