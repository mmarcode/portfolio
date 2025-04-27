APP_NAME=portfolio
PORT=5173
PROD_PORT=80

ifeq ($(OS),Windows_NT)
    RM = del /q /f
    RM_DIR = rmdir /s /q
    DOCKER = docker.exe
    PWD := $(shell cd)
else
    RM = rm -f
    RM_DIR = rm -rf
    DOCKER = docker
    PWD := $(shell pwd)
endif

# Build imagen de desarrollo
.PHONY: build
build:
	$(DOCKER) build -t $(APP_NAME) -f Dockerfile .

# Build imagen de producción
.PHONY: build-prod
build-prod:
	$(DOCKER) build -t $(APP_NAME)-prod -f Dockerfile.prod .

# Correr contenedor en desarrollo
.PHONY: run
run:
	$(DOCKER) run -d -p $(PORT):$(PORT) $(APP_NAME)

# Correr contenedor en producción
.PHONY: run-prod
run-prod:
	$(DOCKER) run -d -p $(PROD_PORT):80 $(APP_NAME)-prod

# Entrar al contenedor para desarrollo
.PHONY: dev
dev:
	$(DOCKER) run --rm -it -v "$(PWD)":/app -w /app node:20 bash

# Levantar servidor de desarrollo
.PHONY: dev-server
dev-server:
	$(DOCKER) run --rm -it -v "$(PWD)":/app -w /app -p $(PORT):$(PORT) node:20 sh -c "npm install && npm run dev -- --host 0.0.0.0"

# Limpiar node_modules y builds
.PHONY: clean
clean:
	$(RM_DIR) node_modules dist build
	-$(DOCKER) rmi $(APP_NAME) $(APP_NAME)-prod || true

# Clean + Rebuild
.PHONY: build-clean
build-clean: clean build
