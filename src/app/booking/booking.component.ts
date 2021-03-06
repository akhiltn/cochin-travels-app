import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { finalize, switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PackageInfo } from "../common/package-info";
import { PackageInfoService } from "../common/package-info.service";
import { environment } from 'src/environments/environment';
/** Error when invalid control is dirty, touched, or submitted. */
export class CrossFieldStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    let hasEndDateError = false;
    if (form.errors) {
      hasEndDateError =
        form.errors.isStartGraterThanEndDateValidator === null ? false : true;
    }
    return !!(
      (control && control.invalid && (control.dirty || control.touched)) ||
      (control.touched && hasEndDateError)
    );
  }
}

@Component({
  selector: "booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  contactUsForm: FormGroup;
  mobnumPattern = "^[0-9]*$";
  minDate: Date;
  errorMatcher = new CrossFieldStateMatcher();
  isSubmitted = false;
  isKnownBooking = false;
  serviceRequestedValue: string;
  packageId: string;
  packageInfo: PackageInfo;

  errorMessages = {
    firstName: "Please enter valid name",
    email: "Please enter valid email id",
    mobile: "Please enter valid mobile number",
    serviceRequested: "Please enter valid input",
    startDate: "Please enter valid date",
    startDateEndDate: "Please check start and end date"
  };

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute, private packageInfoService: PackageInfoService
  ) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.packageId = params["id"];
      if(this.packageId){
        this.packageInfoService
      .getpackageById(this.packageId).subscribe(res => {
        this.packageInfo = res;
        this.serviceRequestedValue = this.packageInfo.packageType + " - " + this.packageInfo.title;
          this.isKnownBooking = !!this.serviceRequestedValue;
          this.serviceRequested.patchValue(this.serviceRequestedValue);
          this.serviceRequested.disable({onlySelf: this.isKnownBooking });
      });
      }
    });


    this.contactUsForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        mobile: [
          "",
          [Validators.required, Validators.pattern(this.mobnumPattern)]
        ],
        serviceRequested: ['', Validators.required],
        startDate: ["", Validators.required],
        endDate: ["", Validators.required],
        additionalDetails: [""],
        recaptchaReactive: ["", Validators.required],
      },
      { validators: this.startEndDateValidator }
    );
  }

  onSubmit() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Access-Control-Allow-Origin", "*")
      .set("recaptchaReactive", this.recaptchaReactive.value);
    this.http
      .post(
        environment.UTIL_API+"/email/postContactForm",
        JSON.stringify(this.contactUsForm.value),
        { headers }
      )
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          alert("Sorry!! Web page ERROR.\nPlease send query to mail@cochintravels.com")
        }
      );
      this.isSubmitted = true
  }

  startEndDateValidator: ValidatorFn = (
    control: FormGroup
  ): ValidationErrors | null => {
    let startDate = new Date(control.get("startDate").value);
    let endDate = new Date(control.get("endDate").value);
    return startDate > endDate
      ? { isStartGraterThanEndDateValidator: true }
      : null;
  };

  get firstName() {
    return this.contactUsForm.get("firstName");
  }
  get lastName() {
    return this.contactUsForm.get("lastName");
  }
  get email() {
    return this.contactUsForm.get("email");
  }
  get mobile() {
    return this.contactUsForm.get("mobile");
  }
  get startDate() {
    return this.contactUsForm.get("startDate");
  }
  get endDate() {
    return this.contactUsForm.get("endDate");
  }
  get additionalDetails() {
    return this.contactUsForm.get("additionalDetails");
  }
  get serviceRequested() {
    return this.contactUsForm.get("serviceRequested");
  }

  get recaptchaReactive() {
    return this.contactUsForm.get("recaptchaReactive");
  }
}
