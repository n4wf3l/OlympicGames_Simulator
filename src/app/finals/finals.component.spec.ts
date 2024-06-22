import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalsComponent } from './finals.component';

describe('FinalsComponent', () => {
  let component: FinalsComponent;
  let fixture: ComponentFixture<FinalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
