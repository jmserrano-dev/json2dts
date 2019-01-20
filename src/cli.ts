#!/usr/bin/env node

import
{
    Args,
    File,
    Converter
}  from './libs'

async function start(): Promise<void> {
    const isDirectory = await File.isDirectory(input);
    const declaration = (isDirectory)
        ? await Converter.getDeclarationFromFolder(input)
        : await Converter.getDeclarationFromFile(input, "translations");
    File.writeFile(output, declaration);
};

const { input, output } = Args.getOptionsFromCommandLine();

start();
