#! /usr/bin/env node

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const util = require('util')

const testTemplate = require('../templates/test')
const functionTemplate = require('../templates/function')

const writeFile = util.promisify(fs.writeFile)
const appendFile = util.promisify(fs.appendFile)

const generateMethodFile = (name) => {
    const filename = path.resolve(__dirname, `../src/${name}.js`);
    const content = functionTemplate(name)

    writeFile(filename, content)
        .then(
            console.log(`Successfully created the "${name}.js" file`))
        .catch(_ =>
            console.log(`Could not create the "${name}.js" file`)
        )
}

const generateTestFile = (name) => {
    const filename = path.resolve(__dirname, `../src/${name}.test.js`)
    const content = testTemplate(name)
    writeFile(filename, content)
        .then( _ =>
            console.log(`Successfully created the "${name}.test.js" file`)
        )
        .catch(_ =>
            console.log(`Could not create the "${name}.test.js" file`)
        )
}

const generateReadMeEntry = (fileName) => {
    const readmeFile = path.resolve(__dirname, '../README.MD')
    const link = `[${fileName}](../src/${fileName}.test.js)  ` + '\n'
    appendFile(readmeFile, link)
        .then( _ =>
            console.log('Successfully updated README file')
        )
        .catch(_ =>
            console.error('Failed appending to README.md')
        )
}
const app = async () => {
    let name = process.argv[2]

    if (!name) {
        const { answer } = await inquirer.prompt({
            type: 'input',
            name: 'answer',
            message: 'What is the name of the new template?',
        })

        name = answer;
    }

    generateMethodFile(name)
    generateTestFile(name)
    generateReadMeEntry(name)
}
app()
