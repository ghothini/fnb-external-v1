// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, HostListener, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-signaturePad',
  templateUrl: './signaturePad.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class signaturePadComponent {
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
      this.sd_uMfxa7ES1YMNQkWK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_uMfxa7ES1YMNQkWK(bh) {
    try {
      bh = this.sd_rwd3m5sAQn8XvuOW(bh);
      //appendnew_next_sd_uMfxa7ES1YMNQkWK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uMfxa7ES1YMNQkWK');
    }
  }

  submitSignature(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hDFNvfJsgjXEkTgq(bh);
      //appendnew_next_submitSignature
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V8hOsYYzic0Wnhnc');
    }
  }

  clearSignature(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_tHqnv1TaKmQJvpPv(bh);
      //appendnew_next_clearSignature
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lrR8KMs6QcR681DR');
    }
  }
  @HostListener('window:resize', ['$event']) sd_kuXsml47C4A9QKtL(event) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.$event = event;
      bh = this.sd_dPYHbKsAoXkz2DTL(bh);
      //appendnew_next_sd_kuXsml47C4A9QKtL
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kuXsml47C4A9QKtL');
    }
  }

  //appendnew_flow_signaturePadComponent_start

  sd_rwd3m5sAQn8XvuOW(bh) {
    try {
      bh = this.sd_g5G9ozNbZmQHIU4L(bh);
      //appendnew_next_sd_rwd3m5sAQn8XvuOW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rwd3m5sAQn8XvuOW');
    }
  }

  sd_g5G9ozNbZmQHIU4L(bh) {
    try {
      this.page.base64String = undefined;
      this.page.signaturePad = undefined;
      this.page.canvas = undefined;
      this.page.invalidSignature = false;
      bh = this.sd_f3W8q09BJ3zS5M8Z(bh);
      //appendnew_next_sd_g5G9ozNbZmQHIU4L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g5G9ozNbZmQHIU4L');
    }
  }

  sd_f3W8q09BJ3zS5M8Z(bh) {
    try {
      const page = this.page; // page.canvas = document.querySelector("canvas") as HTMLCanvasElement;
      // page.signaturePad = new SignaturePad(page.canvas);
      this.sd_Kn9shEn1VPkknnpe(bh);
      //appendnew_next_sd_f3W8q09BJ3zS5M8Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f3W8q09BJ3zS5M8Z');
    }
  }

  sd_Kn9shEn1VPkknnpe(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.signaturePad);
      //appendnew_next_sd_Kn9shEn1VPkknnpe
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Kn9shEn1VPkknnpe');
    }
  }

  sd_hDFNvfJsgjXEkTgq(bh) {
    try {
      const page = this.page;
      if (page.signaturePad.isEmpty()) {
        page.invalidSignature = true;
      } else {
        page.invalidSignature = false;
        page.base64String = page.signaturePad.toDataURL('image/png');
      }
      bh = this.sd_e3E1DYsDOaedw3qE(bh);
      //appendnew_next_sd_hDFNvfJsgjXEkTgq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hDFNvfJsgjXEkTgq');
    }
  }

  sd_e3E1DYsDOaedw3qE(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.invalidSignature,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_2chJWlkXezegJIBK(bh);
      } else if (
        this.sdService.operators['false'](
          this.page.invalidSignature,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8yHTxZHnFYJbbBNU(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e3E1DYsDOaedw3qE');
    }
  }

  sd_2chJWlkXezegJIBK(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Signature is required', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_2chJWlkXezegJIBK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2chJWlkXezegJIBK');
    }
  }

  sd_8yHTxZHnFYJbbBNU(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.base64String);
      //appendnew_next_sd_8yHTxZHnFYJbbBNU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8yHTxZHnFYJbbBNU');
    }
  }

  sd_tHqnv1TaKmQJvpPv(bh) {
    try {
      const page = this.page;
      page.signaturePad.clear();
      page.base64String = '';

      //appendnew_next_sd_tHqnv1TaKmQJvpPv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tHqnv1TaKmQJvpPv');
    }
  }

  sd_dPYHbKsAoXkz2DTL(bh) {
    try {
      const page = this.page;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      page.canvas.width = page.canvas.offsetWidth * ratio;
      page.canvas.height = page.canvas.offsetHeight * ratio;
      page.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
      //appendnew_next_sd_dPYHbKsAoXkz2DTL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dPYHbKsAoXkz2DTL');
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
  //appendnew_flow_signaturePadComponent_Catch
}
