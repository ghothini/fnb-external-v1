// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
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
      this.sd_IrBub76ZsOSu5g7l(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IrBub76ZsOSu5g7l(bh) {
    try {
      bh = this.sd_GFC5KF4qFOjKHEBL(bh);
      //appendnew_next_sd_IrBub76ZsOSu5g7l
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IrBub76ZsOSu5g7l');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_GFC5KF4qFOjKHEBL(bh) {
    try {
      this.page.menuItems = undefined;
      bh = this.sd_2L9Ja47sI8UNIjDj(bh);
      //appendnew_next_sd_GFC5KF4qFOjKHEBL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GFC5KF4qFOjKHEBL');
    }
  }

  sd_2L9Ja47sI8UNIjDj(bh) {
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
      //appendnew_next_sd_2L9Ja47sI8UNIjDj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2L9Ja47sI8UNIjDj');
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
  //appendnew_flow_homeComponent_Catch
}
