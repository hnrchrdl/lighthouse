/**
 * @license Copyright 2020 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Config for new audits that aren't quite ready for
 * being enabled by default.
 */

/** @type {LH.Config.Json} */
const config = {
  extends: 'lighthouse:default',
  audits: [
    'autocomplete',
    'large-javascript-libraries',
    'csp-xss',
  ],
  categories: {
    // @ts-ignore: `title` is required in CategoryJson. setting to the same value as the default
    // config is awkward - easier to omit the property here. Will defer to default config.
    'performance': {
      auditRefs: [
        {id: 'large-javascript-libraries', weight: 0, group: 'diagnostics'},
      ],
    },
    // @ts-ignore: `title` is required in CategoryJson. setting to the same value as the default
    // config is awkward - easier to omit the property here. Will defer to default config.
    'best-practices': {
      auditRefs: [
        {id: 'csp-xss', weight: 0, group: 'best-practices-trust-safety'},
        {id: 'autocomplete', weight: 0, group: 'best-practices-ux'},
      ],
    },
  },
};

module.exports = config;
