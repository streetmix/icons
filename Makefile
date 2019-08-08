SHELL := /bin/bash  # Required for OSX
PATH  := node_modules/.bin:$(PATH)

.PHONY: all clean

all:
	svg-sprite --config config.json svg/*.svg

clean:
	rm -rf dist
