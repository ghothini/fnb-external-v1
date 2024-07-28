// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Location } from '@angular/common'; //_splitter_
import { Injectable, Injector } from '@angular/core'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { Router } from '@angular/router'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class Common {
  public data: any;

  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_Common

  async goBack(...others) {
    let bh: any = {
      input: {},
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_DGw05dILlW4iCtsw(bh);
      //appendnew_next_goBack
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ICNt0OG5fw5WUhW5');
    }
  }

  async setVariable(data: any = undefined, ...others) {
    let bh: any = {
      input: {
        data,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_NjgqgwT0q4ApBjJZ(bh);
      //appendnew_next_setVariable
      return (
        // formatting output variables
        {
          input: {
            data: bh.input.data,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r23HTguCAPYbDfnt');
    }
  }

  async getVariable(...others) {
    let bh: any = {
      input: {},
      local: {
        data: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);

      bh = await this.sd_dmPATmPoFR3xocqB(bh);
      //appendnew_next_getVariable
      return (
        // formatting output variables
        {
          input: {},
          local: {
            data: bh.local.data,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tDoX4wm57TuTdmoh');
    }
  }
  //appendnew_flow_Common_start

  async sd_DGw05dILlW4iCtsw(bh) {
    try {
      bh.location = this.__service_injector__.get(Location);
      bh = await this.sd_JBQGNtMZWWxBCwsR(bh);
      //appendnew_next_sd_DGw05dILlW4iCtsw
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DGw05dILlW4iCtsw');
    }
  }

  async sd_JBQGNtMZWWxBCwsR(bh) {
    try {
      bh.location.back();
      //appendnew_next_sd_JBQGNtMZWWxBCwsR
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JBQGNtMZWWxBCwsR');
    }
  }

  async sd_NjgqgwT0q4ApBjJZ(bh) {
    try {
      this.data = bh.input.data;
      //appendnew_next_sd_NjgqgwT0q4ApBjJZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NjgqgwT0q4ApBjJZ');
    }
  }

  async sd_dmPATmPoFR3xocqB(bh) {
    try {
      bh.local.data = this.data;
      //appendnew_next_sd_dmPATmPoFR3xocqB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dmPATmPoFR3xocqB');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_Common_Catch
}
