import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserseComponent } from './create-userse.component';

describe('CreateUserseComponent', () => {
  let component: CreateUserseComponent;
  let fixture: ComponentFixture<CreateUserseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
