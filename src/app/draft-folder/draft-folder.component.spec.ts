import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftFolderComponent } from './draft-folder.component';

describe('DraftFolderComponent', () => {
  let component: DraftFolderComponent;
  let fixture: ComponentFixture<DraftFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
