import type { AstroIntegration } from "astro";
import Airtable, { type FieldSet, type Records, type Record } from 'airtable';

interface AirtableConfig {
  apiKey: string;
  baseId: string;
}

const config: AirtableConfig = {
  apiKey: `${import.meta.env.AIRTABLE_API_KEY}` || '',
  baseId: `${import.meta.env.AIRTABLE_BASE_ID}` || '',
};

const base = new Airtable({ apiKey: config.apiKey }).base(config.baseId);

export const fetchRecords = async (tableName: string, maxRecords?: number): Promise<FieldSet[]> => {
  const records: Records<FieldSet> = await base(tableName).select({ maxRecords: maxRecords || 100, sort: [{field: "id", direction: "asc"}] }).all();
  return records.map((record: Record<FieldSet>) => record.fields);
};

export const createRecord = async (tableName: string, fields: FieldSet): Promise<FieldSet> => {
  const createdRecord: Record<FieldSet> = await base(tableName).create(fields);
  return createdRecord.fields;
};

export const updateRecord = async (tableName: string, recordId: string, fields: FieldSet): Promise<FieldSet> => {
  const updatedRecord: Record<FieldSet> = await base(tableName).update(recordId, fields);
  return updatedRecord.fields;
};

export const deleteRecord = async (tableName: string, recordId: string): Promise<{ deleted: boolean }> => {
  await base(tableName).destroy(recordId);
  return { deleted: true };
};

export default function astroAirtable(): AstroIntegration {
  return {
    name: 'astro-airtable',
    hooks: {
      'astro:config:setup': ({ injectScript }) => {
        injectScript('page', `import { fetchRecords } from '/src/lib/astro-airtable/astro-airtable.ts';`);
      },
    },
  };
}
