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

  submit(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_a9oNpJZtVEuT3LUA(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OvrEB4pafD6TtOXo');
    }
  }

  disagree(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_lXyRgsA130Jn3aoY(bh);
      //appendnew_next_disagree
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bUOnXMDTHtOaWVh2');
    }
  }
  //appendnew_flow_regulationComponent_start

  sd_xROL0Y2fL8shU23C(bh) {
    try {
      this.page.regulation = undefined;
      this.page.imageData = [];
      this.page.Signature = undefined;
      this.page.data = undefined;
      this.page.checkForm = undefined;
      bh = this.sd_c4fxdNmR9QDXBFiB(bh);
      //appendnew_next_sd_xROL0Y2fL8shU23C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xROL0Y2fL8shU23C');
    }
  }

  sd_c4fxdNmR9QDXBFiB(bh) {
    try {
      this.page.user = JSON.parse(sessionStorage.getItem('User'));
      bh = this.sd_4ysxRLck0ldIbEvh(bh);
      //appendnew_next_sd_c4fxdNmR9QDXBFiB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c4fxdNmR9QDXBFiB');
    }
  }

  sd_4ysxRLck0ldIbEvh(bh) {
    try {
      const page = this.page;
      page.checkForm = {
        checkBox: '',
      };
      console.log(page.checkForm);
      //appendnew_next_sd_4ysxRLck0ldIbEvh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ysxRLck0ldIbEvh');
    }
  }

  async sd_a9oNpJZtVEuT3LUA(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.form.status,
          'VALID',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_TTGTz5bhDRy0z9wV(bh);
      } else {
        bh = await this.sd_fRCO5JdPJo23WCOy(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a9oNpJZtVEuT3LUA');
    }
  }

  sd_TTGTz5bhDRy0z9wV(bh) {
    try {
      const page = this.page;
      console.log(bh.input.form);
      bh = this.sd_g9qp3nwYlXcyMm4S(bh);
      //appendnew_next_sd_TTGTz5bhDRy0z9wV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TTGTz5bhDRy0z9wV');
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
      //appendnew_next_sd_g9qp3nwYlXcyMm4S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g9qp3nwYlXcyMm4S');
    }
  }

  sd_fRCO5JdPJo23WCOy(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Checkbox is not checked', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_fRCO5JdPJo23WCOy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fRCO5JdPJo23WCOy');
    }
  }

  sd_lXyRgsA130Jn3aoY(bh) {
    try {
      this.page.ssdURL = bh.system.environment.properties.ssdURL;
      bh = this.sd_kmJ6eAkC89PMiJgV(bh);
      //appendnew_next_sd_lXyRgsA130Jn3aoY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lXyRgsA130Jn3aoY');
    }
  }

  sd_kmJ6eAkC89PMiJgV(bh) {
    try {
      const page = this.page;
      bh.url = page.ssdURL + 'delete';

      bh.body = {
        email: page.user.email,
        collection: 'users',
      };

      sessionStorage.clear();
      bh = this.sd_xYBdmlJOZgZmyvwK(bh);
      //appendnew_next_sd_kmJ6eAkC89PMiJgV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kmJ6eAkC89PMiJgV');
    }
  }

  async sd_xYBdmlJOZgZmyvwK(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'delete',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.body,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_ULtCQj0a7XSiLrUU(bh);
      //appendnew_next_sd_xYBdmlJOZgZmyvwK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xYBdmlJOZgZmyvwK');
    }
  }

  async sd_ULtCQj0a7XSiLrUU(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      bh = this.sd_aTiBR7WSVw0JfRD9(bh);
      //appendnew_next_sd_ULtCQj0a7XSiLrUU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ULtCQj0a7XSiLrUU');
    }
  }

  sd_aTiBR7WSVw0JfRD9(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Registration cancelled', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_aTiBR7WSVw0JfRD9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aTiBR7WSVw0JfRD9');
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
