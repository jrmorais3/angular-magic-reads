import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicReadsComponent } from './magic-reads.component';

describe('MagicReadsComponent', () => {
  let component: MagicReadsComponent;
  let fixture: ComponentFixture<MagicReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicReadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
