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
import { Common } from 'app/sd-services/Common'; //_splitter_
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
      bh = this.sd_oTdZ5kAT09SXH4V7(bh);
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
      bh = this.sd_U0Gk1hYeS4PzM6eh(bh);
      //appendnew_next_disagree
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bUOnXMDTHtOaWVh2');
    }
  }
  //appendnew_flow_regulationComponent_start

  async sd_oTdZ5kAT09SXH4V7(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_xROL0Y2fL8shU23C(bh);
      //appendnew_next_sd_oTdZ5kAT09SXH4V7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oTdZ5kAT09SXH4V7');
    }
  }

  sd_xROL0Y2fL8shU23C(bh) {
    try {
      this.page.regulation = undefined;
      this.page.imageData = [];
      this.page.Signature = undefined;
      this.page.data = undefined;
      this.page.checkForm = undefined;
      this.page.email = bh.result.email;
      bh = this.sd_4ysxRLck0ldIbEvh(bh);
      //appendnew_next_sd_xROL0Y2fL8shU23C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xROL0Y2fL8shU23C');
    }
  }

  sd_4ysxRLck0ldIbEvh(bh) {
    try {
      const page = this.page;
      page.checkForm = {
        checkBox: '',
      };
      this.sd_F6UKAVTh67Ara15T(bh);
      //appendnew_next_sd_4ysxRLck0ldIbEvh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4ysxRLck0ldIbEvh');
    }
  }

  sd_F6UKAVTh67Ara15T(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.result);
      //appendnew_next_sd_F6UKAVTh67Ara15T
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F6UKAVTh67Ara15T');
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
      bh = this.sd_RRaQEP3tCMNSlNQZ(bh);
      //appendnew_next_sd_TTGTz5bhDRy0z9wV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TTGTz5bhDRy0z9wV');
    }
  }

  async sd_RRaQEP3tCMNSlNQZ(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/register');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      //appendnew_next_sd_RRaQEP3tCMNSlNQZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RRaQEP3tCMNSlNQZ');
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
      console.log('initial ==>', bh.result);
      bh.url = page.ssdURL + 'delete';

      bh.body = {
        email: page.email,
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
      bh = this.sd_wfSh3qwCrvjMkFRg(bh);
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
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_aTiBR7WSVw0JfRD9(bh);
      bh = this.sd_d29JjT3BHsdxwFSx(bh);
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

  sd_d29JjT3BHsdxwFSx(bh) {
    try {
      const page = this.page;
      console.log('after navigate ==>', bh.result);
      console.log('after navigate body ==>', bh.body);

      //appendnew_next_sd_d29JjT3BHsdxwFSx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_d29JjT3BHsdxwFSx');
    }
  }

  sd_wfSh3qwCrvjMkFRg(bh) {
    try {
      const page = this.page;
      console.log('after API call ==>', bh.result);
      console.log('after API call body ==>', bh.body);

      //appendnew_next_sd_wfSh3qwCrvjMkFRg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wfSh3qwCrvjMkFRg');
    }
  }

  sd_U0Gk1hYeS4PzM6eh(bh) {
    try {
      const page = this.page;
      console.log('after button click ==>', bh.result);

      //appendnew_next_sd_U0Gk1hYeS4PzM6eh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_U0Gk1hYeS4PzM6eh');
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
