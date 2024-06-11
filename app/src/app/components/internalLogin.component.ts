// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-internalLogin',
  templateUrl: './internalLogin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class internalLoginComponent {
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
      this.sd_MZ7rko3RLXSBSUNq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_MZ7rko3RLXSBSUNq(bh) {
    try {
      bh = this.sd_Bzxky0vzwJv7M0L9(bh);
      //appendnew_next_sd_MZ7rko3RLXSBSUNq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MZ7rko3RLXSBSUNq');
    }
  }

  //appendnew_flow_internalLoginComponent_start

  sd_Bzxky0vzwJv7M0L9(bh) {
    try {
      bh = this.sd_T5cLGy6tL1HWsSwj(bh);
      //appendnew_next_sd_Bzxky0vzwJv7M0L9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bzxky0vzwJv7M0L9');
    }
  }

  sd_T5cLGy6tL1HWsSwj(bh) {
    try {
      bh = this.sd_s96toLDLkjs455FO(bh);
      //appendnew_next_sd_T5cLGy6tL1HWsSwj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T5cLGy6tL1HWsSwj');
    }
  }

  sd_s96toLDLkjs455FO(bh) {
    try {
      const page = this.page;
      page.loginAdminForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });

      console.log('page', page);
      //appendnew_next_sd_s96toLDLkjs455FO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s96toLDLkjs455FO');
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
  //appendnew_flow_internalLoginComponent_Catch
}
