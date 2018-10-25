const { default: Project, ts } = require('ts-simple-ast');

const project = new Project();
project.addExistingSourceFiles('src/app/{card,avatar}/*.component.ts');

project.getSourceFiles().forEach(source => {
  source.getClasses().forEach(cls => {
    cls.getInstanceProperties().forEach(prop => {
      console.log(prop.getName(), ':', prop.getType().getText(prop));
    });
  });
});
