import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Education } from '../../models/education/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  accesoEducationService = " education running..";
  private dbPath = '/education';
  educationRef: AngularFirestoreCollection<Education>;

  constructor(private db: AngularFirestore) {
  this.educationRef = db.collection(this.dbPath);
}
getEducation(): AngularFirestoreCollection<Education> {
 return this.educationRef;
 }
}
