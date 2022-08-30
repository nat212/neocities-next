import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const updatesDirectory = path.join(process.cwd(), 'content/shrines');

export interface ShrineMetadata {
    id: string;
    title: string;
    date: string;
    image: string;
}

export type ShrineData = ShrineMetadata & { contentHtml: string };

export async function getShrineData() {
    const fileNames = fs.readdirSync(updatesDirectory);
    const allShrinesData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(updatesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            id,
            matterResult,
        };
    });

    const outputShrines: ShrineData[] = [];

    for (const shrine of allShrinesData) {
        const processedContent = await remark().use(html).process(shrine.matterResult.content);

        const contentHtml = processedContent.toString();
        outputShrines.push({
            id: shrine.id,
            ...shrine.matterResult.data,
            contentHtml,
        } as ShrineData);
    }

    return outputShrines;
}
