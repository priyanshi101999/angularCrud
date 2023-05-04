import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeListComponent } from './emloyee-list.component';

describe('EmloyeeListComponent', () => {
  let component: EmloyeeListComponent;
  let fixture: ComponentFixture<EmloyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmloyeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmloyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
