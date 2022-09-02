import { URL } from 'url';
import path from 'path';
import fs from "fs";
import { FileInformation } from 'interfaces';

export async function getFolderContent(folder: any): Promise<FileInformation[]> {
    try {
        // Get the files as an array
        const files = await fs.promises.readdir( folder );
        let result = [];

        // Loop them all with the new for...of
        for( const file of files ) {
            // Get the full paths
            const fromPath = path.join( folder, file );
            console.log(fromPath)

            // Stat the file to see if we have a file or dir
            const stat = await fs.promises.stat( fromPath );

            result.push({ name: file, path: fromPath, isDir: stat.isDirectory() });
        } // End for...of

        return result.sort((a, b) => b.isDir - a.isDir || a.name - b.name);
    }
    catch( e ) {
        // Catch anything bad that happens
        console.error( "We've thrown! Whoops!", e );
    }

    return null;
}

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function copyFolderSync(from: string, to: string) {
    fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

