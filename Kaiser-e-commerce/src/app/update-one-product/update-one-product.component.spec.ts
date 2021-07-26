import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneProductComponent } from './update-one-product.component';

describe('UpdateOneProductComponent', () => {
  let component: UpdateOneProductComponent;
  let fixture: ComponentFixture<UpdateOneProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOneProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
