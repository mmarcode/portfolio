## 🚀 Portfolio

This project is a portfolio built with **Vite + React + TailwindCSS**. It includes development and production support using **Docker** and **Makefile** for easy automation.

## ✔️ Requisites to make up and running

* Ensure install [make](https://www.gnu.org/software/make/manual/make.html) command 🏰.
* Ensure install the latest version of [docker](https://docs.docker.com/engine/install/) 🚢.

## 🐙 Make commands
There are a sets of commands to execute actions.

1.- Build image for development

```bash
make build
```

2.- Running a development server on Docker

```bash
make dev-server
```

3.- Enter the container in bash mode

```bash
make dev
```
4.- Run the app (dev mode, exposes port 5173)

```bash
make run
```

5.- Create production Build

```bash
make build-prod
```

6.- Run the production app
```bash
make run-prod
```
