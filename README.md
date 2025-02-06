

# stoicss/ui

![stoicss](https://github.com/ekovegeance/stoicss/blob/main/app/opengraph-image.png)



Stoicss is a CLI tool that allows you to easily add UI components, blocks, and skeletons to your project. With stoicss, interface development becomes faster and more structured.

## Installation

You can install Stoicss globally or use `npx` to run it directly.

### Global Installation
```sh
npm install -g stoicss
```

### Using npx
```sh
npx stoicss@latest <command>
```

## Usage

Stoicss provides several main commands to add components based on the available categories.

### Display Help
```sh
npx stoicss help
```

### Add a UI Component
```sh
npx stoicss add <component-name>
```
The component will be added to the `components/ui/` folder.

### Add a Block
```sh
npx stoicss add -b <component-name>
```
The component will be added to the `components/blocks/` folder.

### Add a Skeleton
```sh
npx stoicss add -s <component-name>
```
The component will be added to the `components/skeleton/` folder.

## Folder Structure

Stoicss has a clean directory structure to organize components by category:
```
your-projects/
    components/
    ├── ui/
    ├── blocks/
    ├── skeleton/
```

## Contributing

We warmly welcome contributions from the community! If you want to contribute:
1. Fork this repository
2. Create a new branch for your feature or fix
3. Commit and push your changes
4. Submit a Pull Request

## License

This project is licensed under the MIT License. Please refer to the `LICENSE` file for more details.

