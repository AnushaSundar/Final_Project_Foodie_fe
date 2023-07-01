import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import{MatInputModule} from'@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { VendorComponent } from './vendor/vendor.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { RestaurantCardsComponent } from './restaurant-cards/restaurant-cards.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { CuisineCardsComponent } from './cuisine-cards/cuisine-cards.component';
import { CuisineDashboardComponent } from './cuisine-dashboard/cuisine-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule} from '@angular/forms';
import { OrderComponent } from './order/order.component';
import { InfoResturantComponent } from './info-resturant/info-resturant.component';
import { AddressComponent } from './address/address.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { CuisineEditComponent } from './cuisine-edit/cuisine-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { VendorRestaurantDashboardComponent } from './vendor-restaurant-dashboard/vendor-restaurant-dashboard.component';
import { VendorRestaurantCardComponent } from './vendor-restaurant-card/vendor-restaurant-card.component';
import {MatSelectModule} from '@angular/material/select';
import { EditAddressFormComponent } from './edit-address-form/edit-address-form.component';
import { VendorCusisineCardComponent } from './vendor-cusisine-card/vendor-cusisine-card.component';
import { VendorCusisineDashboardComponent } from './vendor-cusisine-dashboard/vendor-cusisine-dashboard.component';
import { FavouriteDashboardComponent } from './favourite-dashboard/favourite-dashboard.component';
import { FavouriteCardComponent } from './favourite-card/favourite-card.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    VendorComponent,
    AddRestaurantComponent,
    RestaurantDashboardComponent,
    RestaurantCardsComponent,
    NotFoundComponent,
    AddCuisineComponent,
    CuisineCardsComponent,
    CuisineDashboardComponent,
    CartComponent,
    OrderComponent,
    InfoResturantComponent,
    AddressComponent,
    FeedbackComponent,
    RestaurantEditComponent,
    UserEditComponent,
    CuisineEditComponent,
    AddressEditComponent,
    VendorRestaurantDashboardComponent,
    VendorRestaurantCardComponent,
    EditAddressFormComponent,
    VendorCusisineCardComponent,
    VendorCusisineDashboardComponent,
    FavouriteDashboardComponent,
    FavouriteCardComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,MatFormFieldModule,MatDatepickerModule,MatNativeDateModule,MatInputModule, HttpClientModule,
    ReactiveFormsModule,MatSidenavModule,MatListModule,MatMenuModule,MatCheckboxModule, NgxStarRatingModule,FormsModule,MatSelectModule,MatSnackBarModule,MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
