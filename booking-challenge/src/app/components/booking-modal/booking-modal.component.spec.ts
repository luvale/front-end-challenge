import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookingModalComponent } from './booking-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Booking } from '../interfaces';

describe('BookingModalComponent', () => {
  let component: BookingModalComponent;
  let fixture: ComponentFixture<BookingModalComponent>;
  const mockData: Booking = {
    origin: 'Origin',
    destination: 'Destination',
    numPassengers: 3,
    date: new Date(),
    hour: '10:00 AM'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: mockData }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create booking-modal component', () => {
    expect(component).toBeTruthy();
  });
});
