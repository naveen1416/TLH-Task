import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsupdateComponent } from './skillsupdate.component';

describe('SkillsupdateComponent', () => {
  let component: SkillsupdateComponent;
  let fixture: ComponentFixture<SkillsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
