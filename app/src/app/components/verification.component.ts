// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-verification',
  templateUrl: './verification.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class verificationComponent {
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
      this.sd_1CIi3Gk3QFHFap3N(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1CIi3Gk3QFHFap3N(bh) {
    try {
      bh = this.sd_K00ER28O6vJJsUMB(bh);
      //appendnew_next_sd_1CIi3Gk3QFHFap3N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1CIi3Gk3QFHFap3N');
    }
  }

  verification(form: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form };
      bh.local = {};
      bh = this.sd_OCxZ3qDfGXvoZVDk(bh);
      //appendnew_next_verification
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4kWkbPkjpikfrhn');
    }
  }

  validateId(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_EplBO4hgPXNjmPWH(bh);
      //appendnew_next_validateId
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pn9NVGiN50g7TP8l');
    }
  }
  //appendnew_flow_verificationComponent_start

  sd_K00ER28O6vJJsUMB(bh) {
    try {
      bh = this.sd_L7i3iZGVOZIdAMpx(bh);
      //appendnew_next_sd_K00ER28O6vJJsUMB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_K00ER28O6vJJsUMB');
    }
  }

  sd_L7i3iZGVOZIdAMpx(bh) {
    try {
      this.page.verificationForm = undefined;
      this.page.result = this.page.result;
      this.page.isInvalidId = true;
      this.page.showSpinner = false;
      bh = this.sd_FrIJQ4NM15l3Z3Xp(bh);
      //appendnew_next_sd_L7i3iZGVOZIdAMpx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_L7i3iZGVOZIdAMpx');
    }
  }

  sd_FrIJQ4NM15l3Z3Xp(bh) {
    try {
      const page = this.page;
      page.verificationForm = new FormGroup({
        email: new FormControl(
          '',
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
        ),
        id: new FormControl('', Validators.required),
      });
      //appendnew_next_sd_FrIJQ4NM15l3Z3Xp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FrIJQ4NM15l3Z3Xp');
    }
  }

  sd_OCxZ3qDfGXvoZVDk(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_jPQoKkMqsQxEMdru(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_vYxVeJqQDCgfF20a(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OCxZ3qDfGXvoZVDk');
    }
  }

  sd_jPQoKkMqsQxEMdru(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID number is invalid!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_jPQoKkMqsQxEMdru
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jPQoKkMqsQxEMdru');
    }
  }

  async sd_vYxVeJqQDCgfF20a(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.verificationForm.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_zUiYQYNk75jvOV56(bh);
      } else {
        bh = await this.sd_vF3oHlpAdQkzoAEn(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vYxVeJqQDCgfF20a');
    }
  }

  sd_zUiYQYNk75jvOV56(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_4BPBswPMMDEJOWBi(bh);
      //appendnew_next_sd_zUiYQYNk75jvOV56
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zUiYQYNk75jvOV56');
    }
  }

  sd_4BPBswPMMDEJOWBi(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdUrl + 'verification';
      page.showSpinner = true;
      bh = this.verify(bh);
      //appendnew_next_sd_4BPBswPMMDEJOWBi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4BPBswPMMDEJOWBi');
    }
  }

  async verify(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.verificationForm.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_5LOcpmg28zZ5lQnz(bh);
      //appendnew_next_verify
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_D1onDjTy0vXPQwqZ');
    }
  }

  sd_5LOcpmg28zZ5lQnz(bh) {
    try {
      const page = this.page;
      if (page.result.message) {
        bh.isAddingAccount = true;
      } else {
        bh.isAddingAccount = false;
      }
      page.showSpinner = false;
      bh = this.sd_3EFJNXA4KS1Itfik(bh);
      //appendnew_next_sd_5LOcpmg28zZ5lQnz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5LOcpmg28zZ5lQnz');
    }
  }

  async sd_3EFJNXA4KS1Itfik(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isAddingAccount,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Zj9irMRjFofwgYJ3(bh);
      } else {
        bh = await this.sd_tbYpneKzV7YDbt5E(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3EFJNXA4KS1Itfik');
    }
  }

  async sd_Zj9irMRjFofwgYJ3(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/register');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_Zj9irMRjFofwgYJ3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Zj9irMRjFofwgYJ3');
    }
  }

  sd_tbYpneKzV7YDbt5E(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('User account already exist', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_tbYpneKzV7YDbt5E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tbYpneKzV7YDbt5E');
    }
  }

  sd_vF3oHlpAdQkzoAEn(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('All fields are required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_vF3oHlpAdQkzoAEn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vF3oHlpAdQkzoAEn');
    }
  }

  sd_EplBO4hgPXNjmPWH(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_4iLDY3FiLYNaGEKy(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_l0LWkvq7TBNpWWz6(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EplBO4hgPXNjmPWH');
    }
  }

  sd_4iLDY3FiLYNaGEKy(bh) {
    try {
      const page = this.page;
      if (page.verificationForm.value.id.toString().length === 13) {
        page.isInvalidId = false;
      }
      if (page.verificationForm.value.id.toString().length > 12) {
        bh.isReadyToValidate = true;
      } else {
        bh.isReadyToValidate = false;
      }
      bh = this.sd_ChAIkvKc1d6wAH0g(bh);
      //appendnew_next_sd_4iLDY3FiLYNaGEKy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4iLDY3FiLYNaGEKy');
    }
  }

  sd_ChAIkvKc1d6wAH0g(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_ufybFzHd16LslRVW(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.isInvalidId,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ChAIkvKc1d6wAH0g');
    }
  }

  sd_ufybFzHd16LslRVW(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isReadyToValidate,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_6usp9ft0r8uUROxq(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isReadyToValidate,
          undefined,
          undefined,
          undefined
        )
      ) {
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ufybFzHd16LslRVW');
    }
  }

  sd_6usp9ft0r8uUROxq(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('ID number is invalid!', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      bh = this.sd_srWngYep4CrMTvRN(bh);
      //appendnew_next_sd_6usp9ft0r8uUROxq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6usp9ft0r8uUROxq');
    }
  }

  sd_srWngYep4CrMTvRN(bh) {
    try {
      const page = this.page;
      if (page.verificationForm.value.id.toString().length > 12) {
        page.verificationForm.setValue({
          id: page.verificationForm.value.id.toString().substr(0, 13),
          email: page.verificationForm.value.email,
        });
        let id = page.verificationForm.controls.id.value.toString();
        let DOB = id.substring(0, 6);
        let year = DOB.substring(0, 2);
        let yeardigit = year.substring(0, 1);
        let yeardigit2 = year.substring(1, 2);
        let month = DOB.substring(2, 4);
        let day = DOB.substring(4, 6);
        let gender = id.substring(6, 10);
        let country = id.substring(10, 11);
        let eight = id.substring(11, 12);

        //year
        if (Number(yeardigit) < 0) {
          page.isInvalidId = true;
          return;
        }

        if (Number(yeardigit2) < 0) {
          page.isInvalidId = true;
          return;
        }
        //month
        if (Number(month) <= 12 && Number(month) >= 1) {
          // valid
        } else {
          page.isInvalidId = true;
          return;
        }
        //day
        if (Number(day) <= 31 && Number(day) >= 1) {
          // valid
        } else {
          page.isInvalidId = true;
          return;
        }

        //gender
        if (Number(gender) <= 4999 && Number(gender) >= 0) {
          // console.log("Female");
        } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
          // console.log("Male");
        } else {
          page.isInvalidId = true;
          return;
        }

        //country
        if (Number(country) === 1) {
          // console.log("citizen");
        } else if (Number(country) === 0) {
          // console.log("South Africa");
        } else {
          page.isInvalidId = true;
          return;
        }

        //eight
        if (Number(eight) === 8) {
          // valid
          // console.log('valid day')
        } else {
          page.isInvalidId = true;
          return;
        }
        page.isInvalidId = false;
      }
      //appendnew_next_sd_srWngYep4CrMTvRN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_srWngYep4CrMTvRN');
    }
  }

  sd_l0LWkvq7TBNpWWz6(bh) {
    try {
      const page = this.page;
      if (page.verificationForm.value.id.toString().length > 12) {
        page.verificationForm.setValue({
          id: page.verificationForm.value.id.toString().substr(0, 13),
          email: page.verificationForm.value.email,
        });
        let id = page.verificationForm.controls.id.value.toString();
        let DOB = id.substring(0, 6);
        let year = DOB.substring(0, 2);
        let yeardigit = year.substring(0, 1);
        let yeardigit2 = year.substring(1, 2);
        let month = DOB.substring(2, 4);
        let day = DOB.substring(4, 6);
        let gender = id.substring(6, 10);
        let country = id.substring(10, 11);
        let eight = id.substring(11, 12);

        //year
        if (Number(yeardigit) < 0) {
          page.isInvalidId = true;
          return;
        }

        if (Number(yeardigit2) < 0) {
          page.isInvalidId = true;
          return;
        }
        //month
        if (Number(month) <= 12 && Number(month) >= 1) {
          // valid
        } else {
          page.isInvalidId = true;
          return;
        }
        //day
        if (Number(day) <= 31 && Number(day) >= 1) {
          // valid
        } else {
          page.isInvalidId = true;
          return;
        }

        //gender
        if (Number(gender) <= 4999 && Number(gender) >= 0) {
          // console.log("Female");
        } else if (Number(gender) >= 5000 && Number(gender) <= 9999) {
          // console.log("Male");
        } else {
          page.isInvalidId = true;
          return;
        }

        //country
        if (Number(country) === 1) {
          // console.log("citizen");
        } else if (Number(country) === 0) {
          // console.log("South Africa");
        } else {
          page.isInvalidId = true;
          return;
        }

        //eight
        if (Number(eight) === 8) {
          // valid
          // console.log('valid day')
        } else {
          page.isInvalidId = true;
          return;
        }
        page.isInvalidId = false;
      }
      //appendnew_next_sd_l0LWkvq7TBNpWWz6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l0LWkvq7TBNpWWz6');
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
  //appendnew_flow_verificationComponent_Catch
}
