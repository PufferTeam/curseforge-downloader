import { test, expect, Page } from '@playwright/test';
const fs = require('fs');

const version: number = 3543538
const slug: string = 'iron-chests'

test.describe('Download', () => {
    test('Downloading stuff', async ({ page }) => {
        page.goto(`https://www.curseforge.com/minecraft/mc-mods/${slug}/download/${version}/file`)
        const [ download ] = await Promise.all([
            // Start waiting for the download
            page.waitForEvent('download'),
        ]);
        const path = await download.path();
        //Move the file to E:\\Downloads using nodejs
        //await fs.copyFile(path, `E:\\nvmedownload\\${slug}-${version}.jar`)
        fs.copyFile(path, `${slug}-${version}.jar`, (err) => {
            if (err) throw err;
            console.log('source.txt was copied to destination.txt');
          });
          
    });
});