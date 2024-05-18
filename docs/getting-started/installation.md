---
sidebar_position: 2
---

# Installation

## Create Your Project

First you need to create a project if you haven't done so already. This can be achieved many different ways but for simplicity, we will be using NextJS.

The docs including a tutorial on getting started with NextJS can be found [here](https://nextjs.org/).

```bash
npx create-next-app@latest my-iracing-project
```

Follow all the steps and answer the questions presented in your terminal window and the project will then be created.

## Download The Package

Next, you need to install the package using one of the package managers listed on the [Getting Started](/docs/getting-started/intro) page.

To install the package, run one of the following commands.

### NPM

```bash
cd my-iracing-project
npm install iRacing-web-sdk
```

### PNPM

```bash
cd my-iracing-project
pnpm add iRacing-web-sdk
```

You can type this command into Terminal or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run the SDK.

## Start Your Site

1. Run the development server using `npm run dev` or `pnpm run dev`

2. Visit `http://localhost:3000` to view your application.

3. Edit `app/page.tsx` (or `pages/index.tsx `) file and save it to see the updated results in your browser.

Again, this is using NextJS so your NPM or PNPM scripts may be different depepnding on how you have chosen to setup your project.

## Ready To Begin Building

Now your project is setup with the iRacing-web-sdk package installed and you are ready to go!

## Command Notes

The `cd` command changes the directory you're working with. In order to work with your newly created site, you'll need to navigate the terminal there.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

The `npm install` and `pnpm add` commands install packages into your projects node_modules folder.
