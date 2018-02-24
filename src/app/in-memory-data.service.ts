import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Mrms } from './interface/mrms';
import { PersonList } from './interface/person-model';

export class InMemoryDataService implements InMemoryDbService {

  // Creating empty DB for person and one for honorific that populates dropdown values.
  createDb() {
    const persons: PersonList[] = [];
    const honorific: Mrms[] = [
      { "honorific": "Mr. " }, { "honorific": "Ms. " }
    ];
    return { persons, honorific };
  }
}