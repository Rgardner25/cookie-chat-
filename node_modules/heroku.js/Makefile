MOCHA_OPTS = --check-leaks test/test-processes.js
REPORTER = spec
COV_REPORTER = json-cov
# COV_REPORTER = html-cov

check: test

test: test-unit

test-unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
							--reporter $(REPORTER) \
							$(MOCHA_OPTS)

test-cov:
	@NODE_ENV=test ./node_modules/.bin/mocha \
							--require blanket \
							--reporter $(COV_REPORTER) \
							$(MOCHA_OPTS) \
							> coverage.html

clean:
		rm -f coverage.html

.PHONY: test test-unit clean
