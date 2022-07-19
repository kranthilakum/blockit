import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditListingComponent } from './create-or-edit-listing.component';

describe('CreateOrEditListingComponent', () => {
  let component: CreateOrEditListingComponent;
  let fixture: ComponentFixture<CreateOrEditListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrEditListingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrEditListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
