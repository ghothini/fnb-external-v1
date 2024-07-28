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
import { Common } from 'app/sd-services/Common'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
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
      this.sd_yWnnzHhLZWKu6ZG8(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yWnnzHhLZWKu6ZG8(bh) {
    try {
      bh = this.sd_CrCcre20qRV4tpPJ(bh);
      //appendnew_next_sd_yWnnzHhLZWKu6ZG8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yWnnzHhLZWKu6ZG8');
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
      bh = this.sd_eWumEgN06CVxqsEc(bh);
      //appendnew_next_submit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jm9PJvmykhcix8YS');
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
      bh = this.sd_EpaoexcTgthHfxV2(bh);
      //appendnew_next_goBack
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c75t1EgWOBHrdv1q');
    }
  }

  fileUpload(event: any = undefined, docType: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event, docType };
      bh.local = {};
      bh = this.sd_bvzUcoWDbm3cBKQm(bh);
      //appendnew_next_fileUpload
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vyoBFVHNWiJCKrm9');
    }
  }

  validateNoDependents(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_8aHAOofNWCzh1etZ(bh);
      //appendnew_next_validateNoDependents
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NF8r9zaxt8DfR1e6');
    }
  }

  allowNumbers(event: any = undefined, ...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { event };
      bh.local = {};
      bh = this.sd_rBHsHlT8DPkeqsDG(bh);
      //appendnew_next_allowNumbers
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tegRQ212ZNRlOle7');
    }
  }

  submitt(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_Cjq3ODHJmitcncT7(bh);
      //appendnew_next_submitt
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iV6Rs5IXlikxJnaW');
    }
  }
  //appendnew_flow_registerComponent_start

  sd_CrCcre20qRV4tpPJ(bh) {
    try {
      bh = this.sd_yHRyLOrjvHvKSU4g(bh);
      //appendnew_next_sd_CrCcre20qRV4tpPJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CrCcre20qRV4tpPJ');
    }
  }

  async sd_yHRyLOrjvHvKSU4g(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.getVariable();
      bh.result = outputVariables.local.data;

      bh = this.sd_ZzOvZ6UEt9Cuxr6f(bh);
      //appendnew_next_sd_yHRyLOrjvHvKSU4g
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yHRyLOrjvHvKSU4g');
    }
  }

  sd_ZzOvZ6UEt9Cuxr6f(bh) {
    try {
      this.page.stateGroups = undefined;
      this.page.filteredOptions = undefined;
      this.page.registerForm = undefined;
      this.page.result = this.page.result;
      this.page.loader = false;
      this.page.uploadedFile1 = undefined;
      this.page.uploadedFile2 = undefined;
      this.page.idUploadResult = undefined;
      this.page.isValidatedUpload = false;
      this.page.showSpinner = false;
      this.page.email = bh.result.email;
      bh = this.sd_Iu8ygKxUV790J4YD(bh);
      //appendnew_next_sd_ZzOvZ6UEt9Cuxr6f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZzOvZ6UEt9Cuxr6f');
    }
  }

  sd_Iu8ygKxUV790J4YD(bh) {
    try {
      const page = this.page; // page.stateGroups = [
      //   { letter: 'A', names: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'] },
      //   { letter: 'B', names: ['Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi'] },
      //   { letter: 'C', names: ['Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic'] },
      //   { letter: 'D', names: ['Denmark', 'Djibouti', 'Dominica', 'Dominican Republic'] },
      //   { letter: 'E', names: ['Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia'] },
      //   { letter: 'F', names: ['Fiji', 'Finland', 'France'] },
      //   { letter: 'G', names: ['Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana'] },
      //   { letter: 'H', names: ['Haiti', 'Honduras', 'Hungary'] },
      //   { letter: 'I', names: ['Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Ivory Coast'] },
      //   { letter: 'J', names: ['Jamaica', 'Japan', 'Jordan'] },
      //   { letter: 'K', names: ['Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan'] },
      //   { letter: 'L', names: ['Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg'] },
      //   { letter: 'M', names: ['Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar'] },
      //   { letter: 'N', names: ['Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway'] },
      //   { letter: 'O', names: ['Oman'] },
      //   { letter: 'P', names: ['Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'] },
      //   { letter: 'Q', names: ['Qatar'] },
      //   { letter: 'R', names: ['Romania', 'Russia', 'Rwanda'] },
      //   { letter: 'S', names: ['Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria'] },
      //   { letter: 'T', names: ['Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu'] },
      //   { letter: 'U', names: ['Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan'] },
      //   { letter: 'V', names: ['Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam'] },
      //   { letter: 'Y', names: ['Yemen'] },
      //   { letter: 'Z', names: ['Zambia', 'Zimbabwe'] }
      // ]

      page.registerForm = new FormGroup({
        _id: new FormControl(new Date().getTime()),
        createDate: new FormControl(new Date()),
        title: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        race: new FormControl('', Validators.required),
        email: new FormControl(bh.result.email, [
          Validators.required,
          Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/),
        ]),
        income: new FormControl('', Validators.required),
        depedents: new FormControl('', Validators.required),
        marital: new FormControl('', Validators.required),
        qualification: new FormControl('', Validators.required),
        country: new FormControl('South Africa', Validators.required),
        address: new FormControl('', Validators.required),
        sourceOfIncome: new FormControl('', Validators.required),
        additionalIncome: new FormControl(false),
        tax: new FormControl(false),
        idDocument: new FormControl(''),
        idFileName: new FormControl(''),
        paySlipDocument: new FormControl(''),
        paySlipFileName: new FormControl(''),
      });

      console.log('this is from the get service ==>', bh.result);

      //appendnew_next_sd_Iu8ygKxUV790J4YD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iu8ygKxUV790J4YD');
    }
  }

  async sd_eWumEgN06CVxqsEc(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.registerForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_pMLNfYntoY1nXS2C(bh);
      } else {
        bh = await this.fileUploadSwitch(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eWumEgN06CVxqsEc');
    }
  }

  async fileUploadSwitch(bh) {
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          this.page.filesUploadResult,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_8Dv0HBVOSfuZkhli(bh);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_ElXOGun9OaMZvb2a(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2461cxLecc33OmmS');
    }
  }

  sd_8Dv0HBVOSfuZkhli(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_dhR5DPOD5a9k57cQ(bh);
      //appendnew_next_sd_8Dv0HBVOSfuZkhli
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Dv0HBVOSfuZkhli');
    }
  }

  sd_dhR5DPOD5a9k57cQ(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_rDjEZ0e2bK4GQJSH(bh);
      //appendnew_next_sd_dhR5DPOD5a9k57cQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dhR5DPOD5a9k57cQ');
    }
  }

  sd_rDjEZ0e2bK4GQJSH(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdUrl + 'upload-file';
      // page.loader = true;

      bh = this.uploadId(bh);
      //appendnew_next_sd_rDjEZ0e2bK4GQJSH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rDjEZ0e2bK4GQJSH');
    }
  }

  async uploadId(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile1,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_9o6PHfoPvF89JZrg(bh);
      //appendnew_next_uploadId
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_u7CdvaantyUgpc8z');
    }
  }

  sd_9o6PHfoPvF89JZrg(bh) {
    try {
      const page = this.page;
      page.registerForm.get('idDocument').setValue(page.result.filename);
      bh = this.sd_EaxnrpzkzZGcYO9r(bh);
      //appendnew_next_sd_9o6PHfoPvF89JZrg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9o6PHfoPvF89JZrg');
    }
  }

  async sd_EaxnrpzkzZGcYO9r(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile2,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_5VSVE2W4jXtFApjh(bh);
      //appendnew_next_sd_EaxnrpzkzZGcYO9r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EaxnrpzkzZGcYO9r');
    }
  }

  sd_5VSVE2W4jXtFApjh(bh) {
    try {
      const page = this.page;
      page.registerForm.get('paySlipDocument').setValue(page.result.filename);
      bh = this.sd_gQZAvvRMz5G5uysH(bh);
      //appendnew_next_sd_5VSVE2W4jXtFApjh
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5VSVE2W4jXtFApjh');
    }
  }

  sd_gQZAvvRMz5G5uysH(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_tBTHLjmwz5Q0mftK(bh);
      //appendnew_next_sd_gQZAvvRMz5G5uysH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gQZAvvRMz5G5uysH');
    }
  }

  sd_tBTHLjmwz5Q0mftK(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdUrl + 'register';
      page.loader = true;

      bh = this.sd_8hnxYK0buXPRZf6Z(bh);
      //appendnew_next_sd_tBTHLjmwz5Q0mftK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tBTHLjmwz5Q0mftK');
    }
  }

  async sd_8hnxYK0buXPRZf6Z(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.registerForm.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_qCRXFjBkKQWQ7H1W(bh);
      //appendnew_next_sd_8hnxYK0buXPRZf6Z
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8hnxYK0buXPRZf6Z');
    }
  }

  sd_qCRXFjBkKQWQ7H1W(bh) {
    try {
      const page = this.page;
      page.registerForm.reset();
      page.showSpinner = false;
      if (page.result.message) {
        bh.isApprovingApplication = false;
      } else {
        bh.isApprovingApplication = true;
      }
      bh = this.sd_38jNYaSATmsjQxjd(bh);
      //appendnew_next_sd_qCRXFjBkKQWQ7H1W
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qCRXFjBkKQWQ7H1W');
    }
  }

  sd_38jNYaSATmsjQxjd(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isApprovingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_b0wDVtLpQBWtosez(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isApprovingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_BzPPiwY870EJu1Ld(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_38jNYaSATmsjQxjd');
    }
  }

  async sd_b0wDVtLpQBWtosez(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/home/landing');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)]);
      bh = this.sd_GxLXK1FyBtZ8i93O(bh);
      //appendnew_next_sd_b0wDVtLpQBWtosez
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_b0wDVtLpQBWtosez');
    }
  }

  sd_GxLXK1FyBtZ8i93O(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Registration successful', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_GxLXK1FyBtZ8i93O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GxLXK1FyBtZ8i93O');
    }
  }

  sd_BzPPiwY870EJu1Ld(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('User account application already exists!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_BzPPiwY870EJu1Ld
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BzPPiwY870EJu1Ld');
    }
  }

  sd_ElXOGun9OaMZvb2a(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please upload ID and Payslip', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_ElXOGun9OaMZvb2a
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ElXOGun9OaMZvb2a');
    }
  }

  sd_pMLNfYntoY1nXS2C(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill all the fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_pMLNfYntoY1nXS2C
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pMLNfYntoY1nXS2C');
    }
  }

  async sd_EpaoexcTgthHfxV2(bh) {
    try {
      const CommonInstance: Common = this.__page_injector__.get(Common);

      let outputVariables = await CommonInstance.goBack();

      //appendnew_next_sd_EpaoexcTgthHfxV2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EpaoexcTgthHfxV2');
    }
  }

  sd_bvzUcoWDbm3cBKQm(bh) {
    try {
      const page = this.page;
      const file: File | null = bh.input.event.target.files?.[0] || null;
      const filesTypeArr = ['pdf', 'docx', 'jpeg', 'jpg', 'webp', 'png'];
      //CURRENT

      page.isValidatedUpload = false;

      if (file) {
        if (bh.input.docType === 'ID') {
          page.registerForm.get('idFileName').setValue(file.name);
          page.uploadedFile1 = new FormData();
          page.uploadedFile1.append('file', file);
          filesTypeArr.forEach((fileType) => {
            if (fileType === file.name.split('.')[1]) {
              page.idUploadResult = true;
              page.isValidatedUpload = true;
            }
          });

          console.log('results', page.idUploadResult);
        }
        if (bh.input.docType === 'POP') {
          page.registerForm.get('paySlipFileName').setValue(file.name);
          page.uploadedFile2 = new FormData();
          page.uploadedFile2.append('file', file);
          filesTypeArr.forEach((fileType) => {
            if (fileType === file.name.split('.')[1]) {
              page.popUploadResult = true;
              page.isValidatedUpload = true;
            }
          });

          console.log('page.uploadedFile2', page.popUploadResult);
        }
        if (page.idUploadResult && page.popUploadResult) {
          page.filesUploadResult = true;
        }
      } else {
        console.log('No file is uploaded');
        // Handle the case where no file is selected
      }
      bh = this.sd_avB5lBVVGBIfifqF(bh);
      //appendnew_next_sd_bvzUcoWDbm3cBKQm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bvzUcoWDbm3cBKQm');
    }
  }

  async sd_avB5lBVVGBIfifqF(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.isValidatedUpload,
          undefined,
          undefined,
          undefined
        )
      ) {
      } else {
        bh = await this.sd_4SG022CLgpG8eArD(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_avB5lBVVGBIfifqF');
    }
  }

  sd_4SG022CLgpG8eArD(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open(
          'Please upload the support file types (docx, pdf, image, png, jpeg, webp, jpg)',
          'OK',
          {
            duration: 3000,
            direction: 'ltr',
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          }
        );
      //appendnew_next_sd_4SG022CLgpG8eArD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4SG022CLgpG8eArD');
    }
  }

  sd_8aHAOofNWCzh1etZ(bh) {
    try {
      const page = this.page;
      if (page.registerForm.value.depedents < 0) {
        page.registerForm.get('depedents').setValue(0);
      }
      //appendnew_next_sd_8aHAOofNWCzh1etZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8aHAOofNWCzh1etZ');
    }
  }

  sd_rBHsHlT8DPkeqsDG(bh) {
    try {
      const page = this.page;
      bh.allowedKeys = [
        'Backspace',
        'ArrowLeft',
        'ArrowRight',
        'Delete',
        'Control',
      ]; // Add any other allowed keys here
      if (
        bh.allowedKeys.includes(bh.input.event.key) ||
        (bh.input.event.ctrlKey &&
          (bh.input.event.key === 'v' || bh.input.event.key === 'c'))
      ) {
        return; // Allow these keys
      }

      if (!/^\d$/.test(bh.input.event.key)) {
        bh.input.event.preventDefault(); // Prevent non-numeric keys
      }
      //appendnew_next_sd_rBHsHlT8DPkeqsDG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rBHsHlT8DPkeqsDG');
    }
  }

  async sd_Cjq3ODHJmitcncT7(bh) {
    try {
      if (
        this.sdService.operators['true'](
          this.page.registerForm.invalid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3dOXvh5qhRftl143(bh);
      } else {
        bh = await this.fileUploadSwitch1(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cjq3ODHJmitcncT7');
    }
  }

  async fileUploadSwitch1(bh) {
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          this.page.filesUploadResult,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_iXeJm2qvF0nsYQNs(bh);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_3p0IWT4kqgyllO5j(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nXKDYHXMXlo6RZUq');
    }
  }

  sd_iXeJm2qvF0nsYQNs(bh) {
    try {
      const page = this.page;
      page.showSpinner = true;
      bh = this.sd_EVo0ftoTQPK5tg63(bh);
      //appendnew_next_sd_iXeJm2qvF0nsYQNs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iXeJm2qvF0nsYQNs');
    }
  }

  sd_EVo0ftoTQPK5tg63(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_zZgpF53rVBthEoVL(bh);
      //appendnew_next_sd_EVo0ftoTQPK5tg63
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EVo0ftoTQPK5tg63');
    }
  }

  sd_zZgpF53rVBthEoVL(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdUrl + 'upload-file';
      // page.loader = true;

      bh = this.uploadId1(bh);
      //appendnew_next_sd_zZgpF53rVBthEoVL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zZgpF53rVBthEoVL');
    }
  }

  async uploadId1(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile1,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_pWt9Xg6SEhgM8yad(bh);
      //appendnew_next_uploadId1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nH6GFVU06WYEh2Vp');
    }
  }

  sd_pWt9Xg6SEhgM8yad(bh) {
    try {
      const page = this.page;
      page.registerForm.get('idDocument').setValue(page.result.filename);
      bh = this.sd_liLNNISAMqEKNmSF(bh);
      //appendnew_next_sd_pWt9Xg6SEhgM8yad
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pWt9Xg6SEhgM8yad');
    }
  }

  async sd_liLNNISAMqEKNmSF(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.uploadedFile2,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_hVK942Kbq0bNivBW(bh);
      //appendnew_next_sd_liLNNISAMqEKNmSF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_liLNNISAMqEKNmSF');
    }
  }

  sd_hVK942Kbq0bNivBW(bh) {
    try {
      const page = this.page;
      page.registerForm.get('paySlipDocument').setValue(page.result.filename);
      bh = this.sd_VSAavyFmoDI0YPMI(bh);
      //appendnew_next_sd_hVK942Kbq0bNivBW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hVK942Kbq0bNivBW');
    }
  }

  sd_VSAavyFmoDI0YPMI(bh) {
    try {
      bh.ssdUrl = bh.system.environment.properties.ssdURL;
      bh = this.sd_81Cz54GCRnrpnzoV(bh);
      //appendnew_next_sd_VSAavyFmoDI0YPMI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VSAavyFmoDI0YPMI');
    }
  }

  sd_81Cz54GCRnrpnzoV(bh) {
    try {
      const page = this.page;
      bh.url = bh.ssdUrl + 'register';
      page.loader = true;

      bh = this.sd_sr1xLF1KddmdIbco(bh);
      //appendnew_next_sd_81Cz54GCRnrpnzoV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_81Cz54GCRnrpnzoV');
    }
  }

  async sd_sr1xLF1KddmdIbco(bh) {
    try {
      let requestOptions = {
        url: bh.url,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: this.page.registerForm.value,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_EBLlWBKY7EN3bdVC(bh);
      //appendnew_next_sd_sr1xLF1KddmdIbco
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sr1xLF1KddmdIbco');
    }
  }

  sd_EBLlWBKY7EN3bdVC(bh) {
    try {
      const page = this.page;
      page.registerForm.reset();
      page.showSpinner = false;
      if (page.result.message) {
        bh.isApprovingApplication = false;
      } else {
        bh.isApprovingApplication = true;
      }
      bh = this.sd_eSlhi8KiCRVnyaJ1(bh);
      //appendnew_next_sd_EBLlWBKY7EN3bdVC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EBLlWBKY7EN3bdVC');
    }
  }

  sd_eSlhi8KiCRVnyaJ1(bh) {
    try {
      if (
        this.sdService.operators['true'](
          bh.isApprovingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_5hCoDPVoeiZ7rKz7(bh);
      } else if (
        this.sdService.operators['false'](
          bh.isApprovingApplication,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Isl40qS3R6uUAwpy(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eSlhi8KiCRVnyaJ1');
    }
  }

  async sd_5hCoDPVoeiZ7rKz7(bh) {
    try {
      const { paramObj: qprm, path: path } =
        this.sdService.getPathAndQParamsObj('/regulations');
      await this.__page_injector__
        .get(Router)
        .navigate([this.sdService.formatPathWithParams(path, undefined)], {
          queryParams: Object.assign(qprm, ''),
        });
      //appendnew_next_sd_5hCoDPVoeiZ7rKz7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5hCoDPVoeiZ7rKz7');
    }
  }

  sd_Isl40qS3R6uUAwpy(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('User account application already exists!', 'Ok', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_Isl40qS3R6uUAwpy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Isl40qS3R6uUAwpy');
    }
  }

  sd_3p0IWT4kqgyllO5j(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please upload ID and Payslip', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_3p0IWT4kqgyllO5j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3p0IWT4kqgyllO5j');
    }
  }

  sd_3dOXvh5qhRftl143(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Please fill all the fields', 'OK', {
          duration: 3000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_3dOXvh5qhRftl143
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3dOXvh5qhRftl143');
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
  //appendnew_flow_registerComponent_Catch
}
