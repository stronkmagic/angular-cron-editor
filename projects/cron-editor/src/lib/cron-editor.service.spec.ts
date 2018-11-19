import { TestBed } from '@angular/core/testing';

import { CronEditorService } from './cron-editor.service';

describe('CronEditorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CronEditorService = TestBed.get(CronEditorService);
    expect(service).toBeTruthy();
  });
});
