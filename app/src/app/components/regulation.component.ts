// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-regulation',
  templateUrl: './regulation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class regulationComponent {
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
      this.sd_nHD1aAS1VlNkamo4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_nHD1aAS1VlNkamo4(bh) {
    try {
      bh = this.sd_xROL0Y2fL8shU23C(bh);
      //appendnew_next_sd_nHD1aAS1VlNkamo4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nHD1aAS1VlNkamo4');
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
      bh = this.sd_g9qp3nwYlXcyMm4S(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OvrEB4pafD6TtOXo');
    }
  }
  //appendnew_flow_regulationComponent_start

  sd_xROL0Y2fL8shU23C(bh) {
    try {
      this.page.regulation = undefined;
      this.page.imageData = [];
      this.page.Signature = undefined;
      this.page.data = undefined;
      //appendnew_next_sd_xROL0Y2fL8shU23C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xROL0Y2fL8shU23C');
    }
  }

  sd_g9qp3nwYlXcyMm4S(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Registration succesful', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_RRaQEP3tCMNSlNQZ(bh);
      //appendnew_next_sd_g9qp3nwYlXcyMm4S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g9qp3nwYlXcyMm4S');
    }
  }

  async sd_RRaQEP3tCMNSlNQZ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_RRaQEP3tCMNSlNQZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RRaQEP3tCMNSlNQZ');
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
  //appendnew_flow_regulationComponent_Catch
}
