#This Makefile offers convience shortcuts into any Node.js project that utilizes npm scripts.
# It functions as a wrapper around the actual listed in `package.json`
# So instead of typing:
#
#  $ npm script build:assets
#
# you could just as well type:
#
#  $ make build-assets
#
# Notice that colons (:) are replaced by dashes (-) for Makefile compatibility.


define npm_script_targets
TARGETS := $(shell node -e 'for (var k in require("./package.json").scripts) {console.log(k.replace(/:/g, "-"));}')
$$(TARGETS):
	npm run $(subst -,:,$(MAKECMDGOALS))

.PHONY: $$(TARGETS)
endef

$(eval $(call npm_script_targets))
