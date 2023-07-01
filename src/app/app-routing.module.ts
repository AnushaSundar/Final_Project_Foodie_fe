import { PaymentComponent } from './payment/payment.component';
import { VendorGuard } from './services/vendor.guard';
import { FavouriteDashboardComponent } from './favourite-dashboard/favourite-dashboard.component';
import { FavouriteCardComponent } from './favourite-card/favourite-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { VendorCusisineDashboardComponent } from './vendor-cusisine-dashboard/vendor-cusisine-dashboard.component';
import { EditAddressFormComponent } from './edit-address-form/edit-address-form.component';
import { CuisineEditComponent } from './cuisine-edit/cuisine-edit.component';
import { VendorRestaurantDashboardComponent } from './vendor-restaurant-dashboard/vendor-restaurant-dashboard.component';
import { VendorRestaurantCardComponent } from './vendor-restaurant-card/vendor-restaurant-card.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { CuisineCardsComponent } from './cuisine-cards/cuisine-cards.component';
import { CuisineDashboardComponent } from './cuisine-dashboard/cuisine-dashboard.component';
import { AddCuisineComponent } from './add-cuisine/add-cuisine.component';
import { RestaurantDashboardComponent } from './restaurant-dashboard/restaurant-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VendorComponent } from './vendor/vendor.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { InfoResturantComponent } from './info-resturant/info-resturant.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
 {
  path: "login",
  component: LoginComponent,

},{
  path: "header",
  component: HeaderComponent,
},
{
  path: "register",
  component: RegistrationComponent,

},
{
  path: "userEdit",
  component: UserEditComponent,
  canActivate:[AuthGuard]

}
,
{
  path: "addRestaurant",
  component: AddRestaurantComponent,
  canActivate:[AuthGuard]
}
,
{
  path: "vendor",
  component: VendorComponent,
  canActivate:[AuthGuard]
}
,
{
  path: "notFound",
  component: NotFoundComponent,


}
,
{
  path: "dashboard",
  component: DashboardComponent,

},
{
  path: ":id/restaurantDashboard",
  component: RestaurantDashboardComponent,

},
{
  path: ":id/addCuisine",
  component: AddCuisineComponent,
  canActivate:[AuthGuard]

},
{
  path: "cuisineDashboard/:id",
  component: CuisineDashboardComponent,

},

{
  path: "vendorcuisineDashboard/:id",
  component: VendorCusisineDashboardComponent,
  canActivate:[AuthGuard]

},
{
  path: "VendorcuisineForm/:id/cuisineId/:cuisineId",
  component: CuisineEditComponent,
  canActivate:[VendorGuard]
},
// {
//   path: "VendorcuisineForm/:id",
//   component: CuisineEditComponent,
//   canActivate:[AuthGuard]
// },
{
  path: "cuisineCard",
  component: CuisineCardsComponent,


},


{
  path: "cart",
  component: CartComponent,
  canActivate:[AuthGuard]

}
,
{
  path: "order",
  component: OrderComponent,
  canActivate:[AuthGuard]

},
{
  path:"vendorRestaurantDashboard",
  component: VendorRestaurantDashboardComponent,
  canActivate:[VendorGuard]
},
{
  path: "address",
  component: AddressComponent,
  canActivate:[AuthGuard]

},
{
  path: "editAddressForm/:id",
  component: EditAddressFormComponent,
  canActivate:[AuthGuard]

},
{
  path: "info",
  component: InfoResturantComponent,

},
{
  path: "vendorResturantEdit",
  component: VendorRestaurantCardComponent,
  canActivate:[VendorGuard]

},
// {
//   path: "vendorResturantdash",
//   component: VendorRestaurantDashboardComponent,
//   canActivate:[AuthGuard]

// },
{
  path: ":id/resturantEditForm",
  component: RestaurantEditComponent,
  canActivate:[VendorGuard]

}
,
{
  path: "addressdash",
  component: AddressEditComponent ,
  canActivate:[AuthGuard]

},
{
  path: "favorite",
  component: FavouriteDashboardComponent ,
  canActivate:[AuthGuard]

},
{
  path: ":id/payment",
  component: PaymentComponent,

},
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
