import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDefaultComponent } from './AdminPortal/admin-default/admin-default.component';
import { CreateProductComponent } from './AdminPortal/AdminComponent/create-product/create-product.component';
import { DashboardComponent } from './AdminPortal/AdminComponent/dashboard/dashboard.component';
import { ProductAnalyticsComponent } from './AdminPortal/AdminComponent/product-analytics/product-analytics.component';
import { UserListComponent } from './AdminPortal/AdminComponent/user-list/user-list.component';
import { SigninFormComponent } from './forms/signin-form/signin-form.component';
import { AboutUsComponent } from './main-portal/about-us/about-us.component';
import { CartComponent } from './main-portal/cart/cart.component'; 
import { ContactUsComponent } from './main-portal/contact-us/contact-us.component';
import { ProductComponent } from './main-portal/product/product.component';


const routes: Routes = [
 {  
  path:'',
  component:ProductComponent
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'cart',
  component:CartComponent
},
{
  path:'sign-in',
  component:SigninFormComponent
},
{



  path:"about-us",
  component:AboutUsComponent
},
{
  path:"contact-us",
  component:ContactUsComponent
},


{
  path:'AdminPortal', component:AdminDefaultComponent,

children: [

{path:'',component:DashboardComponent},
{path:'Dashboard',component:DashboardComponent},
{path:'User-list',component:UserListComponent},
{path:'create-product',component:CreateProductComponent},
{path:'Product-Analytics',component:ProductAnalyticsComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
