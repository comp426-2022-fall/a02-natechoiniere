#!/usr/bin/env node

// Show help
import minimist from 'minimist';
const args = (process.argv.slice(2));

if (args.h) {
	  console.log("Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE\n");
	  console.log("-h\t\tShow this help message and exit.\n");
	  console.log("-n, -s\tLatitude: N positive; S negative.\n");
	  console.log("-e, -w\tLongitude: E positive; W negative.\n");
	  console.log("-z\t\tTime zone: uses tz.guess() from moment-timezone by default.\n");
	  console.log("-d 0-6\tDay to retrieve weather: 0 is today; defaults to 1.\n");
	  console.log("-v\t\tVerbose output: returns full weather forecast.\n");
	  console.log("-j\t\tEcho pretty JSON from open-meteo API and exit.\n");
	        
}
