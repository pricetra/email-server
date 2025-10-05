import fs from 'fs';
import path from 'path';
import _ from 'lodash';

export function getEmailTemplate(templateName: string): string {
  const filePath = path.join(process.cwd(), 'resources', 'email-templates', `${templateName}.html`);
  return fs.readFileSync(filePath, 'utf8');
}

export function fillTemplateVariables(template: string, variableToValueMap: Map<string, string>) {
  let result = template;
  for (const [key, val] of variableToValueMap) {
    const keyProper = key.includes('{{', 0) ? key : `{{${key}}}`
    result = result.replace(new RegExp(keyProper, "g"), val);
  }
  return result;
}
