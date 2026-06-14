import type { FromSchema } from 'json-schema-to-ts';

export const createEnvironmentSchema = {
    $id: '#/components/schemas/createEnvironmentSchema',
    type: 'object',
    additionalProperties: false,
    required: ['name', 'type'],
    description:
        'Data required to create a new [environment](https://docs.getunleash.io/concepts/environments).',
    properties: {
        name: {
            type: 'string',
            example: 'staging',
            pattern: '^[a-zA-Z0-9~_.-]+$',
            description:
                'The name of the environment. Must be a URL-friendly string.',
        },
        type: {
            type: 'string',
            minLength: 1,
            example: 'preproduction',
            description:
                'The [type of environment](https://docs.getunleash.io/concepts/environments#environment-types).',
        },
        sortOrder: {
            type: 'integer',
            example: 4,
            description:
                'Defines where in the list of environments to place this environment. Lower numbers are shown first.',
        },
        enabled: {
            type: 'boolean',
            example: true,
            description:
                'New environments are enabled by default. Set to `false` to create the environment in a disabled state.',
        },
        requiredApprovals: {
            type: 'integer',
            nullable: true,
            minimum: 1,
            example: 2,
            description:
                'Experimental field. The number of approvals required before a change request can be applied in this environment.',
        },
    },
    components: {},
} as const;

export type CreateEnvironmentSchema = FromSchema<
    typeof createEnvironmentSchema
>;
