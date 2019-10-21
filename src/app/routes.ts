import {Routes} from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { MovieDetailsComponent } from './movies/movies-details';
import {  MoviesByGenresComponent } from './pages/movies-by-genres.component';
import { FavoriteMoviesComponent } from './pages/favorite-movies.component';
import { SearchComponent } from './movies/search-movies.component';
import { MoviesListResolver } from './movies/movies-list-resolver.service';
import { MovieResolver } from './movies/movie-resolver.service';

export  const appRoutes: Routes = [
    
    {path:'movies/genres/:genre', component: MoviesByGenresComponent, data: {animation:'genre'}},

    {path:'movies/favorites', component: FavoriteMoviesComponent, data: {animation:'favorite'}},

    {path:'movies/search/:searchTerm', component: SearchComponent},

    {path:'', component: HomepageComponent, resolve: {movies: MoviesListResolver}, data:{animation: 'movies'}},

    {path:'movies/:id', component:MovieDetailsComponent, resolve:{movie: MovieResolver}, data: {animation:'movie'}},
    
    {path: 'user', loadChildren:'./user/user.module#UserModule'},
    
]