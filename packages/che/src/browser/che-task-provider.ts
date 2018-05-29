/*
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */

import { injectable } from 'inversify';
import { TaskProvider } from '@theia/task/lib/common';
import { CheTaskConfiguration } from '../common/task-protocol';

/**
 * Reads the commands from the current Che workspace and provides it as Task Configurations.
 */
@injectable()
export class CheTaskProvider implements TaskProvider {

    async provideTasks(): Promise<CheTaskConfiguration[]> {
        const detectedTask: CheTaskConfiguration = {
            type: 'che',
            label: 'Build (detected)',
            target: {
                workspaceId: 'workspace65834j0w3dkdqy1i',
                machineName: 'theia'
            },
            command: 'ls'
        };

        const tasks: CheTaskConfiguration[] = [];
        tasks.push(detectedTask);
        return tasks;
    }
}
