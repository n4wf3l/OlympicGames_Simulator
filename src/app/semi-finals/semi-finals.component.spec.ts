import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiFinalsComponent } from './semi-finals.component';

describe('SemiFinalsComponent', () => {
  let component: SemiFinalsComponent;
  let fixture: ComponentFixture<SemiFinalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiFinalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiFinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
