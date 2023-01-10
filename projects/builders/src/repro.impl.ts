import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';

export default createBuilder<JsonObject>(() => ({ success: true }));

