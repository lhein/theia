/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { TaskConfiguration } from '@theia/task/lib/common';

export interface CheTaskConfiguration extends TaskConfiguration {
    type: 'che',
    command: string,
    target?: Target,
    previewUrl?: string
}

export interface Target {
    workspaceId?: string,
    machineName?: string
}
