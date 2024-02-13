# WinWinTravel

## Task

### What needs to be done

You need to create a basic todo

The TODO should have the following functionality:

- Creation of an item
- Deletion of an item
- Marking an item as completed
- Marking an item as not completed if it has already been completed
- Changing the text of an item
- When closing and opening the tab, the items should not reset

The design is free, but the following sections are needed:

- Data entry section, where there will be an input and a button
- Section of uncompleted tasks
- Section of completed tasks

## What technologies to use

- Semantic layout - HTML 5
- React
- Chakra UI - UI library with all the necessary ready-made components
- zustand - State-manager
- i18n - For internationalization
- You can also use all other technologies that we have installed

### How to perform

- Make a fork into a PRIVATE repository
- Complete the task
- Add @ltlaitoff to the fork for review
- Write to the telegram chat or email that the task is completed

## How to set up the project

All scripts described below (except for _**dependency installation**_) can be used with pnpm instead of npm. They work the same way.

### Installing dependencies

After downloading the project's source code, you need to install the dependencies. To do this, you can use the following command:

```shell
pnpm i
# or
pnpm install
```

### Run

To start the project for development, use the script `dev`:

```shell
npm run dev
```

This script automatically refreshes the page after you make changes in the code and works quickly with `vite`.

### Build

To compile the project, use the script `build`:

```shell
npm run build
```

After executing this script, you will have a folder `dist` in which the project's output files will be located, which can be uploaded to hosting.

Also, to see how the compiled version of the program looks, you can use the script `preview`.

```shell
npm run preview
```
