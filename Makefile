MAJOR_VERSION = 0
MINOR_VERSION = 1
CURRENT_BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
REV_COUNT = $(shell git rev-list --count $(CURRENT_BRANCH))
TIMESTAMP = $(shell date +%s)
VERSION = v$(MAJOR_VERSION).$(MINOR_VERSION).$(REV_COUNT).$(TIMESTAMP)
MAKEFLAGS = -s

.NOTPARALLEL:

.PHONY: all build test clean docker_test docker_base

all: build

build:
	docker build --no-cache -t docker.quizofkings.com/qok/qok-frontend-ng:latest .

push: tag
	git push origin $(CURRENT_BRANCH)
ifeq ($(CURRENT_BRANCH),master)
	git push origin $(VERSION)
else
	git push origin $(VERSION)-$(CURRENT_BRANCH)
endif

tag:
ifeq ($(CURRENT_BRANCH),master)
	git tag $(VERSION)
	echo "Tagged $(VERSION)"
else
	git push origin $(VERSION)-$(CURRENT_BRANCH)
	echo "Tagged $(VERSION)-$(CURRENT_BRANCH)"
endif
