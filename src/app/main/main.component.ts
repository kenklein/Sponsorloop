import { Component} from '@angular/core';
import { STUDENT_DATA } from '../../_services/student-data-service';
import {CAROUSEL_ITEMS} from '../../_services/carousel-item-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  carouselItems = CAROUSEL_ITEMS;
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  studentData = STUDENT_DATA;
  currentSection = 'section1';

  constructor() { }


  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

}
