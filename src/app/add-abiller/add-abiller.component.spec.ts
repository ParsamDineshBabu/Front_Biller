import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbillerComponent } from './add-abiller.component';

describe('AddAbillerComponent', () => {
  let component: AddAbillerComponent;
  let fixture: ComponentFixture<AddAbillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAbillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAbillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
