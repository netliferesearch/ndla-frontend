/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const resources = [
  {
    topicId: 'urn:topic:170363',
    id: 'urn:resource:883281e0-c5ec-42d8-8365-ceb12265ce9b',
    name: 'Teknikker for idéutvikling',
    resourceTypes: [],
    contentUri: 'urn:learningpath:1',
  },
  {
    topicId: 'urn:topic:170363',
    id: 'urn:resource:116ce6b7-2abe-4977-9fa9-11641bfc9b2b',
    name: 'Klar, ferdig, kreativ!',
    resourceTypes: [],
    contentUri: 'urn:learningpath:2',
  },
  {
    topicId: 'urn:topic:170363',
    id: 'urn:resource:345297a3-4134-4622-b325-c8245edb11dd',
    name: 'Hva er en idé?',
    resourceTypes: [],
    contentUri: 'urn:article:1',
  },
  {
    topicId: 'urn:topic:170363',
    id: 'urn:resource:6fd9f440-d91d-4bb0-89d4-757e564f77b9',
    name: 'Ideer og idéutvikling',
    resourceTypes: [],
    contentUri: 'urn:article:2',
  },
  {
    topicId: 'urn:topic:170363',
    id: 'urn:resource:0079aa08-8ed9-484a-bbd6-71d9297d8cab',
    name: 'Kreativ kommunikasjon',
    resourceTypes: [],
    contentUri: 'urn:article:3',
  },
];

export const resourceData = [
  {
    name: 'Teknikker for idéutvikling',
    resourceTypes: [{ id: 'urn:resource-type:1' }],
    contentUri: 'urn:learningpath:1',
  },
  {
    name: 'Hva er en idé?',
    resourceTypes: [
      { id: 'urn:resource-type:1' },
      { id: 'urn:resource-type:2' },
    ],
    contentUri: 'urn:article:1',
  },
  {
    name: 'Ideer og idéutvikling',
    resourceTypes: [{ id: 'urn:resource-type:3' }],
    contentUri: 'urn:article:2',
  },
];

export const resourceTypes = [
  {
    id: 'urn:resource-type:1',
    name: 'Lærestoff',
    subtypes: [
      {
        id: 'urn:resource-type:3',
        name: 'Artikler',
      },
      {
        id: 'urn:resource-type:4',
        name: 'Video',
      },
    ],
  },
  {
    id: 'urn:resource-type:2',
    name: 'Læringsstier',
  },
  {
    id: 'urn:resource-type:5',
    name: 'Vedlegg',
  },
  {
    id: 'urn:resource-type:6',
    name: 'Interaktivitet',
  },
  {
    id: 'urn:resource-type:7',
    name: 'Oppgaver og aktiviteter',
  },
  {
    id: 'urn:resource-type:8',
    name: 'Simulering',
  },
];
