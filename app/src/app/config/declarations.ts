// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-internalLoginComponent
import { internalLoginComponent } from '../components/internalLogin.component';
//CORE_REFERENCE_IMPORT-regulationComponent
import { regulationComponent } from '../components/regulation.component';
//CORE_REFERENCE_IMPORT-Common
import { Common } from '../sd-services/Common';
//CORE_REFERENCE_IMPORT-backPageComponent
import { backPageComponent } from '../components/backPage.component';
//CORE_REFERENCE_IMPORT-LoginComponent
import { LoginComponent } from '../components/Login.component';
//CORE_REFERENCE_IMPORT-signaturePadComponent
import { signaturePadComponent } from '../components/signaturePad.component';
//CORE_REFERENCE_IMPORT-verificationComponent
import { verificationComponent } from '../components/verification.component';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/register.component';
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/landing.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-accountsComponent
import { accountsComponent } from '../components/accounts.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-internalLoginComponent
  internalLoginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-regulationComponent
  regulationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-backPageComponent
  backPageComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-LoginComponent
  LoginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-signaturePadComponent
  signaturePadComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-verificationComponent
  verificationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
  registerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-accountsComponent
  accountsComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-Common
  Common,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [{ path: 'landing', component: landingComponent }],
  },
  { path: 'accounts', component: accountsComponent },
  { path: 'register', component: registerComponent },
  { path: 'verification', component: verificationComponent },
  { path: 'signaturePad', component: signaturePadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'backpage', component: backPageComponent },
  { path: 'regulations', component: regulationComponent },
  { path: 'internal', component: internalLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
