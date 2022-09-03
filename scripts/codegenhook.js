const fs = require('fs');

const generatedFiles = process.argv.slice(2)[0];

console.log('Generated files: ' + generatedFiles);

let content = fs.readFileSync(generatedFiles, { encoding: 'utf8' });

content = content
  .replace(/InputScalars\['String'\]/g, 'string')
  .replace(/Scalars\[\'String\'\]/g, 'string')
  .replace(/Scalars\[\'Int\'\]/g, 'number')
  .replace(/Scalars\[\'Float\'\]/g, 'number')
  .replace(/Scalars\[\'DateTime\'\]/g, 'string')
  .replace(/Scalars\[\'Boolean\'\]/g, 'boolean')
  .replace(/Scalars\[\'Json\'\]/g, 'any')
  .replace(/Scalars\[\'ID\'\]/g, 'string')
  .replace(/InputMaybe<(.*)>/g, '$1')
  .replace(/InputMaybe<(.*)>/g, '$1')
  .replace(/InputMaybe<(.*)>/g, '$1')
  .replace(/Maybe<(.*)>/g, '$1')
  .replace(/Maybe<(.*)>/g, '$1')
  .replace(/Array<(.*)>/g, '$1[]')
  ;

content = `declare module 'fluent-dts' {

${content.substring(content.indexOf('/**'))}

}`;

fs.writeFileSync(generatedFiles, content);


