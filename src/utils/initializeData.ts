// Beispiel-Skript zum Anlegen von Beispielprofessoren und -studenten

// Importiere die Klassen
import Student from './classes/Person/Student';
import Employee from './classes/Person/Employee';

// Erstelle Beispielstudenten
const student1 = new Student();
student1.firstname = 'Max';
student1.lastname = 'Mustermann';
student1.mail = 'max.mustermann@example.com';
student1.address = 'Musterstraße 123';
student1.birthday = new Date('1995-01-01');
student1.attendedModuleIds = ['MATH101', 'PHYS201'];

const student2 = new Student();
student2.firstname = 'Maria';
student2.lastname = 'Musterfrau';
student2.mail = 'maria.musterfrau@example.com';
student2.address = 'Musterweg 456';
student2.birthday = new Date('1998-03-15');
student2.attendedModuleIds = ['CHEM301', 'COMP101'];

// Erstelle Beispielprofessoren
const professor1 = new Employee(); // Beachte, dass ein Professor ein Employee ist
professor1.firstname = 'Prof.';
professor1.lastname = 'Müller';
professor1.mail = 'prof.muller@example.com';
professor1.address = 'Professorenweg 789';
professor1.birthday = new Date('1970-05-20');
professor1.roomId = 'A 537';

const professor2 = new Employee();
professor2.firstname = 'Dr.';
professor2.lastname = 'Schmidt';
professor2.mail = 'dr.schmidt@example.com';
professor2.address = 'Doktorstraße 10';
professor2.birthday = new Date('1985-12-10');
professor2.roomId = 'A 541';

// Füge die erstellten Personen deinem System hinzu (z. B. in den PersonStore)
// Beispiel:
// personStore.add(student1);
// personStore.add(student2);
// personStore.add(professor1);
// personStore.add(professor2);

// Du musst möglicherweise entsprechende Methoden im PersonStore implementieren, um Personen hinzuzufügen.
