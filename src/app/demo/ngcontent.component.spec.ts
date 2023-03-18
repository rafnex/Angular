import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoxComponent } from './box.component';

import { NgcontentComponent } from './ngcontent.component';

describe('NgcontentComponent', () => {
  let component: NgcontentComponent;
  let fixture: ComponentFixture<NgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcontentComponent, BoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
