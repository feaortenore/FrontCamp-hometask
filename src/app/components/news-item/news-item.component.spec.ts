import { NewsItemComponent } from "./news-item.component";
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { mockNews } from 'src/app/mocks/news';
import { By } from '@angular/platform-browser';

let mockItem = {
  news: mockNews[0],
  source: { isInternal: true },
  isFull: false
};

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<TestComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponentWrapper,
        NewsItemComponent
      ]
    }).compileComponents();

  }));

  it('should create', () => {
    fixture = TestBed.createComponent(TestComponentWrapper);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('@Input() source.isInternal', () => {
    let ctrlButtons: DebugElement;

    it('should not have ctrlButtons if not source.isInternal', () => {
      mockItem.source.isInternal = false;
      fixture = TestBed.createComponent(TestComponentWrapper);
      fixture.detectChanges();
      ctrlButtons = fixture.debugElement.query(By.css('.ctrl-buttons'));;
      expect(ctrlButtons).not.toBeTruthy();
    });

    describe('source.isInternal is true', () => {

      beforeEach(async(() => {
        mockItem.source.isInternal = true;
        fixture = TestBed.createComponent(TestComponentWrapper);
        fixture.detectChanges();
        ctrlButtons = fixture.debugElement.query(By.css('.ctrl-buttons'));
      }));

      it('should have ctrlButtons', () => {
        expect(ctrlButtons).toBeTruthy();
      });

      it('should rise edit event on \'Edit\' button click', () => {
        let spy = spyOn(fixture.componentInstance, 'onEdit').and.callThrough();
        ctrlButtons.children[0].nativeElement.click();
        expect(spy).toHaveBeenCalled();
      });

      it('should rise edit event on \'Delete\' button click', () => {
        let spy = spyOn(fixture.componentInstance, 'onDelete').and.callThrough();
        ctrlButtons.children[1].nativeElement.click();
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});

@Component({
  selector: 'test-component-wrapper',
  template: `<app-news-item
  [news]="item.news"
  [source]="item.source"
  (edit)="onEdit($event)"
  [isFull]="item.isFull"
  (delete)="onDelete($event)"></app-news-item>`
})
class TestComponentWrapper {
  item = mockItem;
  onEdit(event) { }
  onDelete(event) { }
}
