// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { Common } from 'app/sd-services/Common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-Login',
  templateUrl: './Login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class LoginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_GjMoL6KHykrzlJLW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GjMoL6KHykrzlJLW(bh) {
    try {
      bh = this.sd_cPFVoyxjSOEO4LA1(bh);
      //appendnew_next_sd_GjMoL6KHykrzlJLW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GjMoL6KHykrzlJLW');
    }
  }

  submit(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xR7mNZVflpAE3XOE(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_imZuIadbb8nFY2xH');
    }
  }

  goBack(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_PKm9uu1gIrvdUTtm(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ENLxgoEU3XX0UBwO');
    }
  }
  //appendnew_flow_LoginComponent_start

  sd_cPFVoyxjSOEO4LA1(bh) {
    try {
      bh = this.sd_ncSLz9Boc4CsUqI0(bh);
      //appendnew_next_sd_cPFVoyxjSOEO4LA1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cPFVoyxjSOEO4LA1');
    }
  }

  sd_ncSLz9Boc4CsUqI0(bh) {
    try {
      this.page.loginForm = undefined;
      bh = this.sd_Qj4832oyZMd6zQQE(bh);
      //appendnew_next_sd_ncSLz9Boc4CsUqI0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ncSLz9Boc4CsUqI0');
    }
  }

  sd_Qj4832oyZMd6zQQE(bh) {
    try {
      const page = this.page;
      page.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
      });

      console.log('page', page);
      //appendnew_next_sd_Qj4832oyZMd6zQQE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qj4832oyZMd6zQQE');
    }
  }

  async sd_xR7mNZVflpAE3XOE(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.loginForm.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_OuNkwmBoNaWGFpEl(bh);
      } else {
        bh = await this.sd_DSuRJ321KoU6Gh4C(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xR7mNZVflpAE3XOE');
    }
  }

  sd_OuNkwmBoNaWGFpEl(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please download the FNB Application to Login', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_OuNkwmBoNaWGFpEl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OuNkwmBoNaWGFpEl');
    }
  }

  sd_DSuRJ321KoU6Gh4C(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill all the input', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_DSuRJ321KoU6Gh4C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DSuRJ321KoU6Gh4C');
    }
  }

  async sd_PKm9uu1gIrvdUTtm(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.goBack();

      //appendnew_next_sd_PKm9uu1gIrvdUTtm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PKm9uu1gIrvdUTtm');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_LoginComponent_Catch
}
