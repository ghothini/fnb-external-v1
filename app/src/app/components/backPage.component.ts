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
  selector: 'bh-backPage',
  templateUrl: './backPage.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class backPageComponent {
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
      this.sd_dG8fwbFepfxR8oqT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_dG8fwbFepfxR8oqT(bh) {
    try {
      bh = this.sd_bQxsUzANSK01pqMl(bh);
      //appendnew_next_sd_dG8fwbFepfxR8oqT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dG8fwbFepfxR8oqT');
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
      bh = this.sd_QqrATI9Y22VTNjcP(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LUanhjlgaDSNcOQ2');
    }
  }
  //appendnew_flow_backPageComponent_start

  sd_bQxsUzANSK01pqMl(bh) {
    try {
      //appendnew_next_sd_bQxsUzANSK01pqMl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bQxsUzANSK01pqMl');
    }
  }

  async sd_QqrATI9Y22VTNjcP(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.goBack();

      //appendnew_next_sd_QqrATI9Y22VTNjcP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QqrATI9Y22VTNjcP');
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
  //appendnew_flow_backPageComponent_Catch
}
