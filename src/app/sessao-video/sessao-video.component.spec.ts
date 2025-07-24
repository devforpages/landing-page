import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoVideoComponent } from './sessao-video.component';

describe('SessaoVideoComponent', () => {
  let component: SessaoVideoComponent;
  let fixture: ComponentFixture<SessaoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessaoVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessaoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
