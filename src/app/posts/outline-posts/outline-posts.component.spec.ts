import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinePostsComponent } from './outline-posts.component';

describe('OutlinePostsComponent', () => {
  let component: OutlinePostsComponent;
  let fixture: ComponentFixture<OutlinePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlinePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlinePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
