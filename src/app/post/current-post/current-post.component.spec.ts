import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPostComponent } from './current-post.component';

describe('CurrentPostComponent', () => {
  let component: CurrentPostComponent;
  let fixture: ComponentFixture<CurrentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
