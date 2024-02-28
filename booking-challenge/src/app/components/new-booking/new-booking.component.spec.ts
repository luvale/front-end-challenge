import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewBookingComponent } from './new-booking.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewBookingComponent', () => {
  let component: NewBookingComponent;
  let fixture: ComponentFixture<NewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ NewBookingComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new-booking component', () => {
    expect(component).toBeTruthy();
  });
  
  it('must return invalid form', () => {
    const origin = component.newBooking.controls['origin'];
    origin.setValue('Lima');
    expect(component.newBooking.invalid).toBeTrue();
  })

  it('should disable the button when the form is invalid', () => {
    component.newBooking.get('date')?.setValue(new Date());
    component.newBooking.get('hour')?.setValue('8:00 am');
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(button.disabled).toBeTrue();
  });
  
  it('must return valid form', () => {
    component.newBooking.get('origin')?.setValue('Lima');
    component.newBooking.get('destination')?.setValue('Trujillo');
    component.newBooking.get('numPassengers')?.setValue(1);
    component.newBooking.get('date')?.setValue(new Date());
    component.newBooking.get('hour')?.setValue('8:00 am');
    expect(component.newBooking.invalid).toBeFalse();
  })

  it('should navigate to booking-list after form submission', () => {
    spyOn(component.router, 'navigate');
    component.saveForm();
    expect(component.router.navigate).toHaveBeenCalledWith(['booking-list']);
  });
});
