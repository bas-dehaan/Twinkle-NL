/**
 * This script bundles all source styles (css files in the styles-src directory)
 * into a single file, along with comments for gadget deployment
 */
const concat = require('concat');

const filenames = [
	/* Twinkle Core */
    "twinkle.min.js",
	"twinkle.min.css",
	"twinkle-pagestyles.min.css",

	/* Morebits */
	"morebits.min.js",
	"morebits.min.css",

	/* Twinkle Modules */
	"friendlyshared.min.js",
	"friendlytag.min.js",
	"friendlywelcome.min.js",
	"twinklearv.min.js",
	"twinklebatchdelete.min.js",
	"twinklebatchprotect.min.js",
	"twinklebatchundelete.min.js",
	"twinkleblock.min.js",
	"twinkleconfig.min.js",
	"twinklediff.min.js",
	"twinklefluff.min.js",
	"twinkleprotect.min.js",
	"twinklespeedy.min.js",
	"twinkleunlink.min.js",
	"twinklewarn.min.js",
	"twinklexfd.min.js"
]

let i;
let file;
let filelocation;
let tempfolder = "dist/temp/"
for(i in filenames){
	file = filenames[i];
	filelocation = tempfolder + file;
	concat([
		"comment-top.js",
		filelocation,
		"comment-bottom.js"
	], "dist/" + file);
}
