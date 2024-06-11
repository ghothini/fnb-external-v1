// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { Common } from 'app/sd-services/Common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-accounts',
  templateUrl: './accounts.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class accountsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_Oe1nlzZcCoB3dKDh(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Oe1nlzZcCoB3dKDh(bh) {
    try {
      bh = this.sd_SpcshhEFBbCayRMP(bh);
      //appendnew_next_sd_Oe1nlzZcCoB3dKDh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Oe1nlzZcCoB3dKDh');
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
      bh = this.sd_rTSIkuV7JsONrGV5(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qi46neUX4UBsGNDq');
    }
  }
  //appendnew_flow_accountsComponent_start

  sd_SpcshhEFBbCayRMP(bh) {
    try {
      bh = this.sd_0df1qLt8siTSbzn7(bh);
      //appendnew_next_sd_SpcshhEFBbCayRMP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SpcshhEFBbCayRMP');
    }
  }

  sd_0df1qLt8siTSbzn7(bh) {
    try {
      const page = this.page;
      page.menuItems = [
        { label: 'Home', id: 'landing', route: '/home/landing' },
        { label: 'For me & my family', id: 'family', route: '/home/family' },
        { label: 'For my Business', id: 'business', route: '/home/business' },
        {
          label: 'Corporates + Public Sector',
          id: 'business',
          route: '/home/business',
        },
        { label: 'Private Banking', id: 'private', route: '/home/private' },
        { label: 'Calculators', id: 'business', route: '/home/business' },
        { label: 'Rates + Pricing', id: 'business', route: '/home/business' },
        { label: 'News + Insight', id: 'business', route: '/home/business' },
        { label: 'About FNB + Legal', id: 'business', route: '/home/business' },
        { label: 'Contacts Us Tools', id: 'contact', route: '/home/contact' },
        { label: 'Careers at FNB', id: 'business', route: '/home/business' },
      ];
      //appendnew_next_sd_0df1qLt8siTSbzn7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0df1qLt8siTSbzn7');
    }
  }

  async sd_rTSIkuV7JsONrGV5(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.goBack();

      //appendnew_next_sd_rTSIkuV7JsONrGV5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rTSIkuV7JsONrGV5');
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
  //appendnew_flow_accountsComponent_Catch
}
