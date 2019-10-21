import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { HomepageComponent } from './pages/homepage.component';
import { MoviesGenreComponent } from './movies/movies-genre.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieThumbnailComponent } from './movies/movie-thumbnail.component';
import { PopoularMovieThumbnailComponent } from './movies/popular-movie-thumbnail.component';
import { MoviesService } from './movies/movies.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movies/movies-details';
import { MoviesByGenresComponent } from './pages/movies-by-genres.component';
import { FavoriteComponent } from './movies/favorite.component';
import { AuthService } from './user/auth.service';
import { FavoriteService } from './movies/favorite.service';
import { FavoriteMoviesComponent } from './pages/favorite-movies.component';
import { SearchComponent } from './movies/search-movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesListResolver } from './movies/movies-list-resolver.service';
import { MovieResolver } from './movies/movie-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    HomepageComponent,
    MoviesGenreComponent,
    MoviesListComponent,
    MovieThumbnailComponent,
    PopoularMovieThumbnailComponent,
    MovieDetailsComponent,
    PopoularMovieThumbnailComponent,
    MoviesByGenresComponent,
    FavoriteComponent,
    FavoriteMoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  
  providers: [
    MoviesService,
    AuthService,
    FavoriteService,
    MoviesListResolver,
    MovieResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
