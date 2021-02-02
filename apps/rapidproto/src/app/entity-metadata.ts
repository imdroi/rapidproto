import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Message: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { Message: 'Messages' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
