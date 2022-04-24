import chalk from 'chalk';
import fs from 'fs';

function errTreatment (err) 
{
    throw new Error(chalk.blue(err.code, "Arquivo não encontrado"))
}

function getArchive(path)
{
    const encoding = 'utf-8';
    fs.promises
    .readFile(path, encoding)
    .then((text) => console.log(chalk.magenta(text)))
    .catch((err) => errTreatment(err))
}

/*function getArchive(path)
{
    const encoding = 'utf-8';
    fs.readFile(path, encoding, (err, text) => 
    {
        if (err) {
            errTreatment(err)
        } else {
        console.log(chalk.green(text))
        }
    })
}*/

getArchive('./arquivos/texto1.md');