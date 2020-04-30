import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSiteComponent } from './comment-site.component';

describe('CommentSiteComponent', () => {
  let component: CommentSiteComponent;
  let fixture: ComponentFixture<CommentSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
